import { Field, Form, Formik } from "formik";
import React, { useRef, useState } from "react";
import * as Yup from "yup";
import { E164Number, CountryCode } from "libphonenumber-js/core";
import { useContactStore } from "@/store/contact/useContactStore";
import supabase from "@/lib/utils/supabaseClient";
import { sendContactUsEmail } from "../api";
import TextInput from "@/components/__shared/form/TextInput";
import FormErrorMessage from "./FormErrorMessage";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import { UploadFile } from "./UploadFile";
import Loader from "@/components/__shared/loader/Loader";

type Props = {};

const ContactForm = (props: Props) => {
  const formRef = useRef<HTMLFormElement>(null);

  const active = useContactStore((state) => state.activeKey);

  const [phone, setPhone] = useState<E164Number>();
  const [_, setCountry] = useState<CountryCode>("GH");
  const [loading, setLoading] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);
  const [file, setFile] = useState<string>("");

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]?.name);
    }
  };

  const handleCountryChange = (country: CountryCode | undefined) => {
    setCountry(country as CountryCode);
  };

  const handlePhone = (value: any) => {
    setPhone(value as E164Number);
  };

  const ContactSchema = Yup.object().shape({
    fullname: Yup.string()
      .min(2, "Too Short!")
      .max(255, "Too Long!")
      .required("This field is required"),
    // phone: Yup.string().required("This field is required"),
    message: Yup.string().required("This field is required"),
  });

  return (
    <Formik
      initialValues={{
        fullname: "",
        email: "",
        message: "",
        companyName: "",
        phone: "",
        isWhatsapp: false,
        fileUrl: "",
        contactType: "",
        reportLink: "",
      }}
      validationSchema={ContactSchema}
      onSubmit={(values, { resetForm }) => {
        values.contactType = active;
        values.isWhatsapp = isWhatsapp;
        values.phone = phone as E164Number;
        values.fileUrl = file;

        console.log(values);
        sendContactUsEmail(formRef.current);
        setLoading(true);
        supabase
          .from("contact us")
          .insert([
            {
              contactType: values.contactType,
              fullname: values.fullname,
              email: values.email,
              phone: values.phone,
              message: values.message,
              isWhatsapp: values.isWhatsapp,
              companyName: values.companyName,
              fileUrl: values.fileUrl,
              reportLink: values.reportLink,
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
      {({ handleBlur, handleChange, values }) => (
        <Form ref={formRef} className="flex-1 pt-8">
          <div className="gap-5 ">
            <div className={``}>
              <div className="flex flex-col gap-10">
                <div className="form-div">
                  <TextInput
                    name="fullname"
                    value={values.fullname}
                    label="Full Name"
                    onChange={handleChange}
                    onBlur={handleBlur}
                    className="p-3 py-7"
                  />
                  <FormErrorMessage name="fullname" />
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
                    name="phone"
                    value={phone}
                    placeholder="WhatsApp"
                    onBlur={handleBlur}
                    onChange={handlePhone}
                    onInput={handleChange}
                    onCountryChange={handleCountryChange}
                  />
                  <FormErrorMessage name="phone" />
                </div>
                {/* <div className="">
                            <FormSwitch
                              label="Available on whatsapp"
                              onChange={(checked) => setIsWhatsapp(checked)}
                            />
                          </div> */}
                <div className="form-div">
                  <Field
                    as="textarea" // Use 'textarea' as the component
                    id="message"
                    name="message"
                    placeholder="Message"
                    className="p-4 max-w-[673px] border shadow-sm rounded-md outline-none transition-all focus:border-black hover:border-black/50"
                    rows="8"
                    cols="50"
                  />
                  <FormErrorMessage name="message" />
                </div>
                <div>
                  <UploadFile file={file} handleFileUpload={handleFileUpload} />
                </div>

                <div className="form-div">
                  <TextInput
                    name="reportLink"
                    value={values.reportLink}
                    onChange={handleChange}
                    placeholder="Paste URL link here (optional)"
                    className="p-3 py-7 placeholder:text-neutral-400"
                  />
                </div>
              </div>
            </div>
          </div>
          {loading ? (
            <Loader />
          ) : (
            <button
              className="bg-[#DDB771] rounded-[8px] h-[52px] w-[135px] flex items-center justify-center text-white mt-5 hover:scale-[1.05]"
              type="submit"
            >
              Submit
            </button>
          )}
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
