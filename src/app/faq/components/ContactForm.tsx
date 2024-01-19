"use client";
import { Formik, Form } from "formik";
import { useRef, useState } from "react";
import supabase from "@/lib/utils/supabaseClient";
import Loader from "@/components/__shared/loader/Loader";
import ContactSchema from "@/app/contact/components/forms/lib/contactSchema";
import {
  usePhoneInputDisclosure,
  useToastDisclosure,
} from "@/lib/custom-hooks/useCustomDisclosure";
import ContactMessageField from "@/app/contact/components/forms/ContactMessageField";
import { E164Number } from "libphonenumber-js/core";
import ContactSubmitButton from "@/app/contact/components/forms/ContactSubmitButton";
import ContactFullNameField from "@/app/contact/components/forms/ContactFullNameField";
import ContactEmailField from "@/app/contact/components/forms/ContacEmailField";
import ContactPhoneField from "@/app/contact/components/forms/ContactPhoneField";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();
  const { onOpen } = useToastDisclosure();

  const { validate } = useContactForm();

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
      validate={(values) => validate(values, phone)}
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
              onOpen("👍 Successfully sent");
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
              <ContactPhoneField
                phone={phone}
                handleBlur={handleBlur}
                handleChange={handleChange}
                handlePhone={handlePhone}
                handleCountryChange={handleCountryChange}
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
