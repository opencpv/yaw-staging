import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
import { E164Number } from "libphonenumber-js/core";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { sendContactUsEmail } from "../../api";
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

type Props = {};

const FormWriters = (props: Props) => {
  const { activeTab, file, formRef, loading, setLoading, tableName, validate } =
    useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const { onOpen } = useToastDisclosure();

  return (
    <Formik
      initialValues={{
        contactType: "Writers",
        fullname: "",
        email: "",
        phone: "",
        message: "",
        fileUrl: "",
      }}
      validationSchema={ContactSchema}
      validateOnChange={false}
      validateOnBlur={false}
      validate={(values) => validate(values, phone)}
      onSubmit={(values, { resetForm }) => {
        values.contactType = activeTab;
        values.phone = phone as E164Number;
        values.fileUrl = file;

        sendContactUsEmail(formRef.current);
        setLoading(true);
        supabase
          .from(tableName)
          .insert([
            {
              contactType: values.contactType,
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              message: values.message,
              fileUrl: values.fileUrl,
            },
          ])
          .select()
          .then(({ data, error }) => {
            setLoading(false);
            if (error) {
              onOpen("Something went wrong", "error");
            } else {
              resetForm();
              setPhone(undefined);
              onOpen("Successfully sent", "success");
            }
          });
      }}
      className=""
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form ref={formRef} className="flex-1 pt-8">
          <div className="gap-5">
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
                  <ContactPhoneField
                    phone={phone}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    handlePhone={handlePhone}
                    handleCountryChange={handleCountryChange}
                  />
                </div>
                <div>
                  <ContactMessageField
                    placeholder="How can we help you?"
                    className="w-full min-w-full"
                    error={errors.message}
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

export default FormWriters;
