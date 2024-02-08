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

type Props = {};

const FormGeneral = (props: Props) => {
  const {
    activeTab,
    file,
    formRef,
    handleCountryChange,
    handlePhone,
    phone,
    loading,
    setLoading,
    tableName,
    phoneInputPlaceholder,
  } = useContactForm();

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
      validate={(values) => {
        const errors: any = {};
        if (!values.email && phone === undefined) {
          alert("Email or WhatsApp Number is required");
          errors.email = "Required";
          errors.phone = "Required";
        }
        return errors;
      }}
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
              contact_type: values.contactType,
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              message: values.message,
              file_url: values.fileUrl,
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
                  <TextInput
                    name="fullname"
                    value={values.fullname}
                    label="Full Name"
                    required
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-3 py-7"
                  />
                </div>

                <div className="form-div">
                  <TextInput
                    name="email"
                    value={values.email}
                    type="email"
                    label="Email"
                    onChange={handleChange}
                    className="p-3 py-7"
                  />
                </div>
                <div className="form-div">
                  <InputPhoneNumber
                    id="phone"
                    name="phone"
                    value={phone}
                    placeholder={phoneInputPlaceholder}
                    onBlur={handleBlur}
                    onChange={handlePhone}
                    onInput={handleChange}
                    onCountryChange={handleCountryChange}
                  />
                </div>
                {/* <div className="">
                            <FormSwitch
                              label="Available on whatsapp"
                              onChange={(checked) => setIsWhatsapp(checked)}
                            />
                          </div> */}
                <ContactMessageField />
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

export default FormGeneral;
