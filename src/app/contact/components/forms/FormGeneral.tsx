import { Form, Formik } from "formik";
import React, { useRef } from "react";
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
import { usePhoneInputDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type Props = {};

const FormGeneral = (props: Props) => {
  const { activeTab, file, formRef, loading, setLoading, tableName, validate } =
    useContactForm();

  const fullNameInputRef = useRef<HTMLInputElement>(null);

  const { phone, setPhone, handleCountryChange, handlePhone } =
    usePhoneInputDisclosure();

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
                  <ContactFullNameField
                    value={values.fullname}
                    handleBlur={handleBlur}
                    handleChange={handleChange}
                    error={errors.fullname}
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
                    handlePhone={handlePhone}
                    handleCountryChange={handleCountryChange}
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

export default FormGeneral;
