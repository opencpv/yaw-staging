import { Form, Formik } from "formik";
import React from "react";
import { E164Number } from "libphonenumber-js/core";
import supabase from "@/lib/utils/supabaseClient";
import { sendContactUsEmail } from "../../api";
import TextInput from "@/components/__shared/form/TextInput";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import Loader from "@/components/__shared/loader/Loader";
import ContactSchema from "./lib/contactSchema";
import { useContactForm } from "./hooks/useContactForm";
import ContactMessageField from "./ContactMessageField";
import ContactUploadField from "./ContactUploadField";
import ContactSubmitButton from "./ContactSubmitButton";
import ContactFullNameField from "./ContactFullNameField";
import ContactEmailField from "./ContacEmailField";
import ContactPhoneField from "./ContactPhoneField";

type Props = {};

const FormAdvertise = (props: Props) => {
  const {
    activeTab,
    file,
    formRef,
    phone,
    loading,
    setLoading,
    tableName,
    validate,
  } = useContactForm();

  return (
    <Formik
      initialValues={{
        contactType: "",
        fullname: "",
        email: "",
        message: "",
        phone: "",
        companyName: "",
        fileUrl: "",
      }}
      validationSchema={ContactSchema}
      validateOnChange={false}
      validateOnBlur={false}
      validate={validate}
      onSubmit={(values, { resetForm }) => {
        values.contactType = activeTab;
        values.phone = phone as E164Number;
        values.fileUrl = file;

        // console.log(values);
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
              companyName: "",
            },
          ])
          .select()
          .then(({ data, error }) => {
            if (error) {
              setLoading(false);
              console.log(error);
            } else {
              console.log("Data:", data);
              setLoading(false);
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
                  <TextInput
                    name="companyName"
                    value={values.companyName}
                    label="Company Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-3 py-7"
                  />
                </div>

                <div className="form-div">
                  <ContactEmailField
                    value={values.email}
                    handleChange={handleChange}
                  />
                </div>
                <div className="form-div">
                  <ContactPhoneField
                    phone={phone}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                  />
                </div>
                {/* <div className="">
                            <FormSwitch
                              label="Available on whatsapp"
                              onChange={(checked) => setIsWhatsapp(checked)}
                            />
                          </div> */}
                <ContactMessageField error={errors.message} />
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
