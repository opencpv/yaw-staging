"use client";

import { styled } from "@stitches/react";
import { Field, Form, Formik } from "formik";
import Image from "next/image";
import { UploadFile } from "./components/UploadFile";
import { useRef, useState } from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import PhoneNumberInput from "@/components/__shared/PhoneInput";
import emailjs from "@emailjs/browser";
import FormSwitch from "./components/FormSwitch";
import { sendContactUsEmail } from "./api";
import supabase from "@/lib/utils/supabaseClient";
import * as Yup from "yup";
import Loader from "@/components/__shared/loader/Loader";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/components/__shared/footer/Footer";
import { motion } from "framer-motion";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { useContactStore } from "@/store/contact/useContactStore";
import { useHashChangeScroll } from "@/lib/custom-hooks/useWindowEvents";
import ContactBanner from "./components/ContactBanner";
import TextInput from "@/components/__shared/form/TextInput";
import FormErrorMessage from "./components/FormErrorMessage";
import ContactTabs from "./components/ContactTabs";
import ScrollTopAndSocial from "../../components/ui/ScrollTopAndSocial";
import FeedbackButton from "../../components/feedback/FeedbackButton";
import InputPhoneNumber from "@/components/__shared/form/InputPhoneNumber";
import { E164Number } from "libphonenumber-js/core";

const ContactSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email"),
  phone: Yup.string().required("This field is required"),
});

const NameInput = () => {
  return <TextInput name="fullname" label="Full Name" className="p-3 py-7" />;
};
const EmailInput = () => {
  return (
    <TextInput
      type="email"
      name="email"
      label="Email Address"
      className="p-3 py-7"
    />
  );
};

const PhoneInputComponent = () => {
  const [value, setValue] = useState<E164Number>();
  return (
    <TextInput
      // placeholder="Phone"
      name="phone"
      className="px-3 py-7"
      value={value}
      onChange={setValue}
    />
  );
};

const PhoneInput = () => {
  return <InputPhoneNumber name="phone" placeholder="Phone" />;
};

const LinkInput = () => {
  return (
    <TextInput
      name="reportLink"
      placeholder="Paste URL link here (optional)"
      className="p-3 py-7"
    />
  );
};

const Page = () => {
  const active = useContactStore((state) => state.activeKey);

  const { images } = useAssets();

  const [phone, setPhone] = useState("+233");
  const [loading, setLoading] = useState(false);
  const [isWhatsapp, setIsWhatsapp] = useState(false);

  const handlePhone = (phoneNumber: string) => {
    setPhone(phoneNumber);
  };

  const activeImages = {
    general: images.StockImage,
    report: images.niceHome,
    writers: images.StockImage,
    advertise: images.niceHome,
  };

  const formRef = useRef<HTMLFormElement>(null);

  useHashChangeScroll(-200);

  return (
    <>
      <Navbar />
      <main className="wrapper">
        <Root className="flex flex-col items-center justify-center mt-12">
          <ContactBanner />
          <div
            className={`max-w-full lg:max-w-[90%] relative z-[20] h-full w-full min-h-[500px] form-root p-5 sm:p-3 lg:p-8 pt-5 lg:pt-2 rounded-2xl lg:-top-36`}
          >
            <div className="">
              <ContactTabs />
              <div className="flex flex-col h-full gap-10 md:flex-row ">
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
                    values.phone = phone;

                    // console.log(formRef.current)
                    sendContactUsEmail(formRef.current);
                    setLoading(true);
                    supabase
                      .from("contact us")
                      .insert([
                        {
                          fullname: values.fullname,
                          email: values.email,
                          phone: phone,
                          message: values.message,
                          isWhatsapp: values.isWhatsapp,
                          companyName: "",
                          fileUrl: "",
                          reportLink: "",
                          contactType: values.contactType,
                        },
                      ])
                      .select()
                      .then(({ data, error }) => {
                        if (error) {
                          setLoading(false);
                          console.log(error);
                        } else {
                          console.log(data);
                          setLoading(false);
                          resetForm();
                        }
                      });
                  }}
                  className=""
                >
                  <Form ref={formRef} className="flex-1 pt-8">
                    <div className="gap-5 ">
                      <div className={``}>
                        <div className="flex flex-col gap-10">
                          <div className="form-div">
                            <Field component={NameInput} />
                            <FormErrorMessage name="fullname" />
                          </div>

                          <div className="form-div">
                            <Field type="email" component={EmailInput} />
                          </div>
                          <div className="form-div">
                            <Field
                              name="phone"
                              component={PhoneInput}
                              // onChange={handlePhone}
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
                              // component={MessageInput}
                              placeholder="Message"
                              className="p-4 max-w-[673px] border shadow-sm rounded-md outline-none transition-all focus:border-black hover:border-black/50"
                              rows="8"
                              cols="50"
                            />
                          </div>
                          <div>
                            <UploadFile />
                          </div>

                          <div className="form-div">
                            <Field
                              type="text"
                              name="link"
                              component={LinkInput}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                    {loading ? (
                      <Loader />
                    ) : (
                      <button
                        className="bg-[#DDB771] rounded-[8px] h-[52px] 
              w-[135px] flex items-center justify-center text-white mt-5
              hover:scale-[1.05]
              "
                        type="submit"
                      >
                        Submit
                      </button>
                    )}
                  </Form>
                </Formik>
                <div className="relative flex items-center flex-1 w-full aspect-square lg:mt-10 md:aspect-auto">
                  <Image
                    src={activeImages[active]}
                    alt="ad"
                    className="rounded-[8px] h-full max-h-[807px]"
                    fill
                    style={{ objectFit: "cover" }}
                    objectPosition="bottom"
                  />
                </div>
              </div>
            </div>
          </div>
        </Root>
        <ScrollTopAndSocial />
        <div className="mt-20 lg:mt-0">
          <FeedbackButton />
        </div>
      </main>
      <Footer />
    </>
  );
};

const SlideUpAnimation = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: -50 }}
      transition={{
        type: "spring",
        stiffness: "10",
        duration: "1000",
      }}
    >
      {children}
    </motion.div>
  );
};
export default Page;

const Root = styled("div", {
  ".banner": {
    background:
      "var(--faq-banner, linear-gradient(103deg, #21A19F 38.96%, rgba(30, 169, 166, 0.63) 90.07%))",
    width: "100%",
    "@media screen and (min-width:640px)": {
      borderRadius: "32px",
    },
  },

  ".form-root": {
    backgroundColor: "white",
    borderRadius: "1rem",

    "@media screen and (min-width:1024px)": {
      boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
    },
  },
  " .form-div": {
    color: "#6A6968",
    display: "flex",
    flexDirection: "column",
    gap: "0.875rem",
  },
  " .form-input": {
    maxHeight: "52px",
    padding: "0.9375rem",
    // maxWidth: "673px",
    aspectRatio: "422/52",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
    backgroundColor: "white",
  },
  "form-input-textarea": {
    padding: "0.9375rem",
    maxWidth: "541px",
    width: "100%",
    aspectRatio: "541/368",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
    color: "#737373",
  },
  "& .link-icon": {
    top: "75%",
    transform: "translateY(-75%)",
    left: "1rem",
  },
  ".sc-button": {
    background:
      "linear-gradient(271deg, rgba(255, 255, 255, 0.83) 55.34%, rgba(255, 255, 255, 0.83) 124.12%)",
  },
  "required-message": {
    color: "#073B3A",
    fontSize: "14px",
  },
});
