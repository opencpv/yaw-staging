import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import Loader from "@/components/__shared/ui/loader/Loader";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactSubmitButton from "./ContactSubmitButton";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import {
  usePhoneInputDisclosure,
  useToastDisclosure,
} from "@/lib/custom-hooks/useCustomDisclosure";
import CustomErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useRouter } from "next/navigation";
import { UploadFile } from "../UploadFile";
import axios from "axios";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import { toast } from "react-toastify";
import ContactUploadField from "./ContactUploadField";
import Button from "@/components/__shared/ui/button/Button";

type Props = {};

const FormGeneral = (props: Props) => {
  const {
    activeTab,
    file,
    formRef,
    loading,
    setLoading,
    tableName,
    handleFileUpload,
    validate,
    contactFormSession,
  } = useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const { onOpen } = useToastDisclosure();
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        contactType: "",
        fullname: contactFormSession.fullname,
        email: contactFormSession.email,
        message: contactFormSession.message,
        phone: contactFormSession.phone,
        fileUrl: contactFormSession.fileUrl,
      }}
      validationSchema={ContactSchema}
      validate={(values) => validate(values, contactFormSession.phone)}
      onSubmit={async (values, { resetForm }) => {
        values.contactType = capitalizeName(activeTab);
        const newFilename: string =
          generateString(4) + "-" + slugify(file?.name || "");
        var newFile = new File([file as File], newFilename, {
          type: file?.type,
        });
        let fileUrl = "";
        setLoading(true);
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
              fileUrl = `${process.env.NEXT_PUBLIC_DO_CDN_URL}${newFilename}`;
            })
            .catch(() => {
              toast.error(`Image upload unavailable`, {
                toastId: "toast",
              });
            }),
        );
        Promise.all([...fileUploadPromise])
          .then(() => {
            sendContactUsEmail(formRef.current);
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
              .then(({ error }) => {
                setLoading(false);
                if (error) {
                  onOpen("Something went wrong", "error");
                } else {
                  resetForm();
                  sessionStorage.removeItem("contactFormSession");
                  setPhone(undefined);
                  onOpen("Successfully sent", "success");
                  router.refresh();
                }
              });
          })
          .catch(() => {
            onOpen("Something went wrong", "error");
          });
      }}
      className=""
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form ref={formRef} className="flex-1 pt-8">
          <div className="flex flex-col gap-10">
            <div className="form-div">
              <ContactFullNameField
                value={values.fullname}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors.fullname}
              />
              <CustomErrorMessage className="mt-5" error={errors.fullname}>
                <ErrorMessage name="fullname" error={errors.fullname} />
              </CustomErrorMessage>
            </div>
            <div className="form-div">
              <ContactPhoneField
                phone={values.phone}
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
              <CustomErrorMessage className="mt-2" error={errors.message}>
                <ErrorMessage name="message" error={errors.message} />
              </CustomErrorMessage>
            </div>
            <UploadFile
              file={file as File}
              handleFileUpload={handleFileUpload}
            />
            <Button
              className="max-w-full xs:max-w-fit"
              color="accent"
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

export default FormGeneral;
