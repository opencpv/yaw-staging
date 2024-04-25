import { ErrorMessage, Form, Formik } from "formik";
import React from "react";
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
import capitalizeName from "@/lib/utils/stringManipulation";
import { useRouter } from "next/navigation";

type Props = {};

const FormGeneral = (props: Props) => {
  const {
    activeTab,
    file,
    formRef,
    loading,
    setLoading,
    tableName,
    validate,
    contactFormSession,
  } = useContactForm();

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

  const { onOpen } = useToastDisclosure();
  const router = useRouter();

  return (
    <Formik
      initialValues={{
        contactType: "",
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
              router.refresh();
            }
          });
      }}
      className=""
    >
      {({ handleBlur, handleChange, values, errors }) => (
        <Form ref={formRef} className="flex-1 pt-8">
          <div className="flex flex-col gap-10">
            <div className="form-div">
              <ContactFullNameField
                value={values.fullname}
                handleBlur={handleBlur}
                handleChange={handleChange}
                error={errors.fullname}
              />
              <CustomErrorMessage className="mt-5" error={errors.fullname}>
                <ErrorMessage name="fullname" error={errors.fullname} />
              </CustomErrorMessage>
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
              <CustomErrorMessage className="mt-2" error={errors.message}>
                <ErrorMessage name="message" error={errors.message} />
              </CustomErrorMessage>
            </div>
            <ContactUploadField />
          </div>
          {loading ? <Loader /> : <ContactSubmitButton />}
        </Form>
      )}
    </Formik>
  );
};

export default FormGeneral;
