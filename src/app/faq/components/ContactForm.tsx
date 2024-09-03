"use client";
import { Formik, Form } from "formik";
import { useState } from "react";
import supabase from "@/lib/utils/supabase/supabaseClient";
import ContactSchema from "@/app/contact/components/forms/lib/contactSchema";
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import ContactSubmitButton from "@/app/contact/components/forms/ContactSubmitButton";
import ContactFullNameField from "@/app/contact/components/forms/ContactFullNameField";
import ContactPhoneField from "@/app/contact/components/forms/ContactPhoneField";
import { useContactForm } from "@/app/contact/components/forms/hooks/useContactForm";
import FaqMessageField from "./FaqMessageField";
import { useSessionStorage } from "@uidotdev/usehooks";
import toast from "react-hot-toast";
import Loader from "@/components/__shared/ui/loader";

const ContactForm = () => {
  const [loading, setLoading] = useState(false);
  const { handleCountryChange } = usePhoneInputDisclosure();
  const { contactFormSession } = useContactForm();
  const [faqFormSession] = useSessionStorage("faqFormSession", {
    message: "",
  });

  return (
    <Formik
      initialValues={{
        fullname: contactFormSession.fullname,
        email: contactFormSession.email,
        phone: contactFormSession.phone,
        message: faqFormSession.message,
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
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
              toast.error("Something went wrong. Please try again");
            } else {
              resetForm({});
              sessionStorage.removeItem("contactFormSession");
              sessionStorage.removeItem("faqFormSession");
              toast.success("Successfully sent");
            }
          });
      }}
    >
      <Form className="w-full">
        <div className="flex flex-col gap-10">
          <div className="w-full">
            <ContactFullNameField />
          </div>
          <div className="w-full">
            <ContactPhoneField handleCountryChange={handleCountryChange} />
          </div>
          <div>
            <FaqMessageField />
          </div>

          {loading ? <Loader /> : <ContactSubmitButton label="Submit" />}
        </div>
      </Form>
    </Formik>
  );
};

export default ContactForm;
