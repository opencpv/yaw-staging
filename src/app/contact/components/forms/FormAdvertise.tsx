import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { E164Number } from "libphonenumber-js/core";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
import TextInput from "@/components/__shared/ui/form/TextInput";
import Loader from "@/components/__shared/ui/loader/Loader";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactUploadField from "./ContactUploadField";
import ContactSubmitButton from "./ContactSubmitButton";
import ContactFullNameField from "./ContactFullNameField";
import ContactPhoneField from "./ContactPhoneField";
import {
  usePhoneInputDisclosure,
  useToastDisclosure,
} from "@/lib/custom-hooks/useCustomDisclosure";
import CustomErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import capitalizeName from "@/lib/utils/stringManipulation";

type Props = {};

const FormAdvertise = (props: Props) => {
  const {
    activeTab,
    file,
    formRef,
    loading,
    setLoading,
    tableName,
    validate,
    contactFormSession,
    handleSessionChange,
  } = useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const { onOpen } = useToastDisclosure();

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
      validate={(values) => validate(values, contactFormSession.phone)}
      onSubmit={(values, { resetForm }) => {
        values.contactType = capitalizeName(activeTab);
        values.fileUrl = file;

        sendContactUsEmail(formRef.current);
        setLoading(true);
        supabase
          .from(tableName)
          .insert([
            {
              contact_type: values.contactType,
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              message: values.message,
              file_url: values.fileUrl,
              company_name: values.companyName,
            },
          ])
          .select()
          .then(({ data, error }) => {
            setLoading(false);
            if (error) {
              onOpen("Something went wrong", "error");
            } else {
              resetForm();
              sessionStorage.removeItem("contactFormSession");

              setPhone(undefined);
              onOpen("Successfully sent", "success");
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
                  <CustomErrorMessage className="mt-5">
                    <ErrorMessage name="fullname" error={errors.fullname} />
                  </CustomErrorMessage>
                </div>
                <div className="form-div">
                  <TextInput
                    name="companyName"
                    value={values.companyName}
                    label="Company Name"
                    onChange={(e) => {
                      handleChange(e);
                      handleSessionChange("companyName", e.target.value);
                    }}
                    onBlur={handleBlur}
                    className="p-3 py-7"
                  />
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
                  <CustomErrorMessage className="mt-2">
                    <ErrorMessage name="message" error={errors.message} />
                  </CustomErrorMessage>
                </div>
                <ContactUploadField />
              </div>
            </div>
          </div>
          {loading ? <Loader /> : <ContactSubmitButton />}
        </Form>
      )}
    </Formik>
  );
};

export default FormAdvertise;
