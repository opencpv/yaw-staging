import { Form, Formik } from "formik";
import React from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import { Input } from "@/components/__shared/ui/form/input";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import capitalizeName from "@/lib/utils/stringManipulation";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import axios from "axios";
import { toast } from "react-hot-toast";
import { Button } from "@/components/__shared/ui/button/Button";
import { UploadFile } from "../UploadFile";
import { tag } from "@/store/contact/useContactStore";

const FormAdvertise = () => {
  const {
    file,
    formRef,
    loading,
    setLoading,
    tableName,
    handleFileUpload,
    handleFileRemove,
    contactFormSession,
    handleSessionChange,
  } = useContactForm();

  const { handleCountryChange } = usePhoneInputDisclosure();

  return (
    <Formik
      initialValues={{
        contactType: "",
        companyName: contactFormSession.companyName,
        fullname: contactFormSession.fullname,
        email: contactFormSession.email,
        message: contactFormSession.message,
        phone: contactFormSession.phone,
        fileUrl: contactFormSession.fileUrl,
      }}
      validationSchema={ContactSchema}
      onSubmit={async (values, { resetForm }) => {
        if (!tag) return;
        setLoading(true);

        values.contactType = capitalizeName(tag);
        const newFilename: string =
          generateString(8) + "-" + slugify(file?.name || "");
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
              toast.error(`Image upload unavailable.`);
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
                  company_name: values.companyName,
                },
              ])
              .select()
              .then(({ error }) => {
                if (error) {
                  toast.error("Something went wrong. Please try again.");
                  setLoading(false);
                } else {
                  resetForm();
                  sessionStorage.removeItem("contactFormSession");
                  toast.success("Successfully submitted.");
                  setLoading(false);
                }
              });
          })
          .catch(() => {
            toast.error("Something went wrong. Please try again.");
          });
      }}
    >
      <Form ref={formRef} className="w-full pt-8">
        <div className="gap-5">
          <div className={``}>
            <div className="flex flex-col gap-10">
              <div className="form-div">
                <ContactFullNameField />
              </div>
              <div className="form-div">
                <Input
                  name="companyName"
                  placeholder="Company Name"
                  onChange={(e) => {
                    handleSessionChange("companyName", e.target.value);
                  }}
                />
              </div>
              <div className="form-div">
                <ContactPhoneField handleCountryChange={handleCountryChange} />
              </div>
              <div>
                <ContactMessageField />
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
          </div>
        </div>
      </Form>
    </Formik>
  );
};

export default FormAdvertise;
