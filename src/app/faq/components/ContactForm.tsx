"use client";
import { Formik, Form, ErrorMessage } from "formik";
import { useState } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import ContactSchema from "@/app/contact/components/forms/lib/contactSchema";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { E164Number } from "libphonenumber-js/core";
import ContactSubmitButton from "@/app/contact/components/forms/ContactSubmitButton";
import ContactFullNameField from "@/app/contact/components/forms/ContactFullNameField";
import ContactPhoneField from "@/app/contact/components/forms/ContactPhoneField";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";
import FaqMessageField from "./FaqMessageField";
import { useSessionStorage } from "@uidotdev/usehooks";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import dynamic from "next/dynamic";
import Loader from "@/components/__shared/ui/loader";
const CustomErrorMessage = dynamic(
  () => import("@/components/__shared/ui/states/ErrorMessage"),
);

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();
  const { validate, contactFormSession } = useContactForm();
  const [faqFormSession, setFaqFormSession] = useSessionStorage(
    "faqFormSession",
    {
      message: "",
    },
  );
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        fullname: contactFormSession.fullname,
        email: contactFormSession.email,
        phone: contactFormSession.phone,
        message: faqFormSession.message,
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
              toast.error("Something went wrong");
            } else {
              resetForm();
              sessionStorage.removeItem("contactFormSession");
              sessionStorage.removeItem("faqFormSession");
              setPhone(undefined);
              toast.success("Successfully sent");
              router.refresh();
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
              <CustomErrorMessage className="mt-5" error={errors.fullname}>
                {/* @ts-ignore */}
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
              <FaqMessageField
                value={faqFormSession.message || values.message}
                placeholder="How can we help you?"
                className="w-full min-w-full"
                error={errors.message}
                onChange={(e) => {
                  handleChange(e);
                  setFaqFormSession({
                    ...faqFormSession,
                    message: e.currentTarget.value,
                  });
                }}
                onBlur={handleBlur}
              />
              <CustomErrorMessage className="mt-2" error={errors.message}>
                {/* @ts-ignore */}
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
