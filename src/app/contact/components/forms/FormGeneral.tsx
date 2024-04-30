import { Form, Formik } from "formik";
import React, { useRef } from "react";
import { E164Number } from "libphonenumber-js/core";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import Loader from "@/components/__shared/loader/Loader";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactSubmitButton from "./ContactSubmitButton";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { UploadFile } from "../UploadFile";
import axios from "axios";
import { generateString } from "@/lib/utils";
import slugify from "@/lib/utils/slugify";
import { toast } from "react-toastify";

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
  } = useContactForm();

  const fullNameInputRef = useRef<HTMLInputElement>(null);

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  return (
    <Formik
      initialValues={{
        contactType: "",
        fullname: "",
        email: "",
        message: "",
        phone: "",
        fileUrl: "",
      }}
      validationSchema={ContactSchema}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => validate(values, phone)}
      onSubmit={async (values, { resetForm }) => {
        values.contactType = activeTab;
        values.phone = phone as E164Number;
        const newFilename: string =
          generateString(8) + "-" + slugify(file?.name || "");
        var newFile = new File([file as File], newFilename, {
          type: file?.type,
        });
        setLoading(true);
        const fileForm = new FormData();
        fileForm.append("file", newFile);
        const fileUrl = `https://rentright.nyc3.cdn.digitaloceanspaces.com/${newFilename}`;
        const uploadRes = await axios.post(
          `${location.origin}/api/file-upload`,
          fileForm,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          },
        );
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
          .then(({ data, error }) => {
            if (error) {
              setLoading(false);
            } else {
              setLoading(false);
              toast.success("Your message has been sent");
              resetForm();
            }
          });
      }}
      className=""
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form ref={formRef} className="flex-1 pt-8">
          <div className="gap-5 ">
            <div className={``}>
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
                    phone={phone}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handlePhone={handlePhone}
                    handleCountryChange={handleCountryChange}
                  />
                </div>

                <ContactMessageField error={errors.message} />
                <UploadFile
                  file={file as File}
                  handleFileUpload={handleFileUpload}
                />
              </div>
            </div>
          </div>
          {loading ? (
            <div className="mt-2">
              <Loader />
            </div>
          ) : (
            <ContactSubmitButton />
          )}
        </Form>
      )}
    </Formik>
  );
};

export default FormGeneral;
