import { Form, Formik } from "formik";
import React from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useRouter } from "next/navigation";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/__shared/ui/button";
import { UploadFile } from "../UploadFile";
import { E164Number } from "libphonenumber-js/core";
import { tag } from "@/store/contact/useContactStore";

type Props = {};

const FormWriters = (props: Props) => {
  const {
    file,
    formRef,
    loading,
    setLoading,
    tableName,
    handleFileUpload,
    handleFileRemove,
    validate,
    contactFormSession,
  } = useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const router = useRouter();

  return (
    <Formik
      initialValues={{
        contactType: "Writers",
        fullname: contactFormSession.fullname,
        email: contactFormSession.email,
        message: contactFormSession.message,
        phone: contactFormSession.phone,
        fileUrl: contactFormSession.fileUrl,
      }}
      validationSchema={ContactSchema}
      validate={(values) =>
        validate(values, contactFormSession.phone as E164Number)
      }
      onSubmit={async (values, { resetForm }) => {
        if (!tag) return;
        values.contactType = capitalizeName(tag);
        const newFilename: string =
          generateString(4) + "-" + slugify(file?.name || "");
        var newFile = new File([file as File], newFilename, {
          type: file?.type,
        });
        setLoading(true);
        let fileUrl = "";

        const fileForm = new FormData();
        fileForm.append("file", newFile);
        const fileUploadPromise: Promise<any>[] = [];
        fileUploadPromise.push(
          axios
            .post(`${location.origin}/api/file-upload`, fileForm, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then(() => {
              fileUrl = `${process.env.NEXT_PUBLIC_DO_CDN_URL}${newFile.name}`;
            })
            .catch(() => {
              toast.error(`Image upload unavailable.`);
            }),
        );
        Promise.all([...fileUploadPromise])
          .then(() => {
            supabase
              .from(tableName)
              .insert([
                {
                  contact_type: values.contactType,
                  fullname: values.fullname,
                  email: values.email,
                  phone: values.phone,
                  message: values.message,
                  file_url: fileUrl,
                },
              ])
              .select()
              .then(({ data, error }) => {
                setLoading(false);
                if (error) {
                  toast.error("Something went wrong.");
                } else {
                  sendContactUsEmail(formRef.current);
                  resetForm();
                  sessionStorage.removeItem("contactFormSession");
                  setPhone(undefined);
                  toast.success("Successfully submitted.");
                  router.refresh();
                }
              });
          })
          .catch(() => {
            toast.error("Something went wrong.");
          });
      }}
      className=""
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form ref={formRef} className="w-full pt-8">
          <div className="flex flex-col gap-10">
            <div className="form-div">
              <ContactFullNameField
                value={values.fullname}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors.fullname}
              />
            </div>
            <div className="form-div">
              <ContactPhoneField
                phone={values.phone as E164Number}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handlePhone={handlePhone}
                handleCountryChange={handleCountryChange}
              />
            </div>
            <div>
              <ContactMessageField
                value={values.message}
                className="w-full min-w-full"
                error={errors.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </div>
            <UploadFile
              file={file as File}
              handleFileUpload={handleFileUpload}
              handleFileRemove={handleFileRemove}
            />

            <Button
              className="max-w-full xs:max-w-fit"
              variant="accent"
              isLoading={loading}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default FormWriters;
