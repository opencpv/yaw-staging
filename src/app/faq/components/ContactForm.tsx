"use client";
import { Formik, Form, ErrorMessage } from "formik";
import { useEffect, useState } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import Loader from "@/components/__shared/ui/loader/Loader";
import CustomErrorMessage from "@/components/__shared/ui/states/ErrorMessage";
import ContactSchema from "@/app/contact/components/forms/lib/contactSchema";
import {
  usePhoneInputDisclosure,
  useToastDisclosure,
} from "@/lib/custom-hooks/useCustomDisclosure";
import ContactMessageField from "@/app/contact/components/forms/ContactMessageField";
import { E164Number } from "libphonenumber-js/core";
import ContactSubmitButton from "@/app/contact/components/forms/ContactSubmitButton";
import ContactFullNameField from "@/app/contact/components/forms/ContactFullNameField";
import ContactPhoneField from "@/app/contact/components/forms/ContactPhoneField";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();
  const { onOpen } = useToastDisclosure();

  const { validate } = useContactForm();

  useEffect(() => {
    return () => {
      sessionStorage.removeItem("contactFormSession");
    };
  }, []);

  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        phone: "",
        message: "",
      }}
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
          .then(({ error }) => {
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
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form className="w-full">
          <div className="flex flex-col gap-10">
            <div className="w-full">
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
            <div className="w-full">
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
                value={values.message}
                placeholder="How can we help you?"
                className="w-full min-w-full"
                error={errors.message}
                onChange={handleChange}
                onBlur={handleBlur}
              />
              <CustomErrorMessage className="mt-2">
                <ErrorMessage name="message" error={errors.message} />
              </CustomErrorMessage>
            </div>

            {loading ? <Loader /> : <ContactSubmitButton label="Submit" />}
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
