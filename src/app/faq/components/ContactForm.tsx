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
          if (fullNameInputRef.current) {
            fullNameInputRef.current.scrollIntoView({
              block: "center",
              behavior: "smooth",
            });
          }
        }
        if (!values.message) errors.message === "Required";
        if (!values.email && phone === undefined) {
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
              <TextInput
                name="fullname"
                value={values.fullname}
                label="Full Name"
                required
                onChange={handleChange}
                onBlur={handleBlur}
                className={`p-3 py-7 ${
                  errors.fullname && "border-neutral-900"
                }`}
                ref={fullNameInputRef}
              />
            </div>
            <div className="w-full">
              <TextInput
                name="email"
                value={values.email}
                type="email"
                label="Email"
                onChange={handleChange}
                className="p-3 py-7"
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
