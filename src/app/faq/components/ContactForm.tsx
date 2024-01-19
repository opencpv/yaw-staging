"use client";
import { Formik, Form } from "formik";
import { useRef, useState } from "react";
import supabase from "@/lib/utils/supabaseClient";
import Loader from "@/components/__shared/loader/Loader";
import ContactSchema from "@/app/contact/components/forms/lib/contactSchema";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import TextInput from "@/components/__shared/form/TextInput";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import ContactMessageField from "@/app/contact/components/forms/ContactMessageField";
import { E164Number } from "libphonenumber-js/core";
import ContactSubmitButton from "@/app/contact/components/forms/ContactSubmitButton";
import ContactFullNameField from "@/app/contact/components/forms/ContactFullNameField";
import ContactEmailField from "@/app/contact/components/forms/ContacEmailField";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { phone, setPhone, handlePhone, handleCountryChange } =
    usePhoneInputDisclosure();

  const fullNameInputRef = useRef<HTMLInputElement>(null);

  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        phone: "",
        message: "",
      }}
      validateOnBlur={false}
      validateOnChange={false}
      validationSchema={ContactSchema}
      validate={(values) => {
        const errors: any = {};
        if (!values.fullname) {
          errors.fullname === "Required";
         
        }
        if (!values.message) errors.message === "Required";
        if (
          values.fullname &&
          values.message &&
          !values.email &&
          phone === undefined
        ) {
          alert("Email or WhatsApp Number is required");
          errors.email = "Required";
          errors.phone = "Required";
        }
        return errors;
      }}
      onSubmit={(values, { resetForm }) => {
        values.phone = phone as E164Number;
        setLoading(true);
        supabase
          .from("faq")
          .insert([
            {
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              message: values.message,
            },
          ])
          .select()
          .then(({ data, error }) => {
            if (error) {
              setLoading(false);
              console.log(error);
            } else {
              setLoading(false);
              resetForm();
              setPhone(undefined);
            }
          });
      }}
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form className="w-full ">
          <div className="flex flex-col gap-10">
            <div className="w-full">
              <ContactFullNameField
                value={values.fullname}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors.fullname}
              />
            </div>
            <div className="w-full">
              <ContactEmailField
                value={values.email}
                handleChange={handleChange}
              />
            </div>
            <div className="w-full">
              <InputPhoneNumber
                id="phone"
                name="phone"
                value={phone}
                placeholder="WhatsApp"
                onBlur={handleBlur}
                onChange={handlePhone}
                onInput={handleChange}
                onCountryChange={handleCountryChange}
              />
            </div>
            <ContactMessageField
              placeholder="How can we help you?"
              className="w-full min-w-full"
              error={errors.message}
            />
            {loading ? <Loader /> : <ContactSubmitButton label="Contact" />}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
