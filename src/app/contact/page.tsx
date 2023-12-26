"use client";

import { styled } from "@stitches/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import { UploadFile } from "./components/UploadFile";
import { useEffect, useRef, useState } from "react";
import { montserat, openSans } from "../../styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { BiRightArrowCircle } from "react-icons/bi";
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

const ContactSchema = Yup.object().shape({
  fullname: Yup.string()
    .min(2, "Too Short!")
    .max(50, "Too Long!")
    .required("This field is required"),
  email: Yup.string().email("Invalid email").required("This field is required"),
});

const Page = () => {
  // type ActiveKeys = "general" | "report" | "writers" | "advertise";
  // const [active, setActive] = useState<ActiveKeys>("general");
  const active = useContactStore((state) => state.activeKey)
  const setActive = useContactStore((state) => state.setActiveKey)

  const { images } = useAssets();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);
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
  const scrollToRight = () => {
    const scrollContainer = scrollContainerRef.current;
    if (scrollContainer) {
      const childElement = scrollContainer.querySelector(".sc"); // Replace with your desired selector
      if (childElement) {
        childElement.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "end",
        });
      }
    }
  };

  useHashChangeScroll(-300)

  return (
    <main className="max-w-[1728px] mx-auto">
      <Navbar />
      <Root className="sm:p-5 lg:mt-[143px] mt-[81.5px] lg:p-10 flex flex-col items-center justify-center">
        <div
          className={`banner flex flex-col lg:flex-row justify-center lg:justify-between px-24 items-center lg:items-start min-h-[453px] md:h-[528px] text-white font-bold  lg::gap-20 ${openSans.className}`}>
          <div className="pt-10 md:py-20 text-[32px] md:text-5xl lg:text-[61px]">
            <p className="whitespace-nowrap lg:whitespace-normal">Get in touch with us</p>
          </div>
          <div
            className="w-full relative max-w-[450px]
          min-h-[240px]
        aspect-[318/240]
        md:aspect-[414/303]
        lg:aspect-square lg:pb-5">
            <Image src={"/svgs/contact1.svg"} alt="Contact" fill id="jPFcRVJIZphajw==" />
          </div>
        </div>
        <div
          className={`max-w-full lg:max-w-[90%] relative lg:top-[-100px] z-[20] h-full w-full min-h-[500px] form-root p-5 sm:p-3 lg:p-8 pt-5 lg:pt-2 rounded-2xlu  ${montserat.className}`}
          >
          <div className="">
            <div className="flex items-center " ref={scrollContainerRef}>
              <div className="flex gap-[50px] overflow-x-scroll lg:overflow-x-auto relative ">
                <Tab
                  onClick={(e: any) => setActive("general")}
                  type={active === "general" ? "active" : undefined}>
                  General
                </Tab>
                <Tab
                  onClick={(e: any) => setActive("report")}
                  type={active === "report" ? "active" : undefined}>
                  Report an issue
                </Tab>
                <Tab
                  onClick={(e: any) => setActive("advertise")}
                  type={active === "advertise" ? "active" : undefined}>
                  Advertise with us
                </Tab>
                <Tab
                  onClick={(e: any) => setActive("writers")}
                  className="sc"
                  type={active === "writers" ? "active" : undefined}>
                  Writers
                </Tab>
              </div>
              <div
                className="md:hidden absolute right-5 pl-5 sc-button"
                onClick={scrollToRight}>
                <BiRightArrowCircle color="#71C9C7" size="24" />
              </div>
            </div>

            <div className="flex xl:flex-row flex-col gap-10 h-full ">
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
                clasName="">
                <Form
                  ref={formRef}
                  className=" pt-8 xl:flex-[1_0_407px] 2xl:flex-[1_0_650px] xl:max-w-[400px] 2xl:min-w-[673px] 2xl:max-w-full">
                  <div className=" gap-5">
                    <div className={`${openSans.className}`}>
                      <div className="flex flex-col gap-5">
                        <div className="form-div">
                          <label>Full Name</label>
                          <Field
                            type="text"
                            name="fullname"
                            placeholder="Enter your full name"
                            className="form-input"
                          />
                          <ErrorMessage
                            className={`text-[#073B3A] text-[13px] ${openSans.className}`}
                            name="fullname"
                            component="p"
                          />
                        </div>

                        <div className="form-div">
                          <label>Email Address</label>
                          <Field
                            type="email"
                            name="email"
                            placeholder="Enter your email address"
                            className="form-input"
                          />
                          <ErrorMessage
                            className={`text-[#073B3A] text-[13px] ${openSans.className}`}
                            name="email"
                            component="p"
                          />
                        </div>
                        <PhoneNumberInputv2
                          label="Phone"
                          onChange={handlePhone}
                        />

                        <div className="mb-2">
                          <FormSwitch
                            label="Available on whatsapp"
                            onChange={(checked) => setIsWhatsapp(checked)}
                          />
                        </div>
                        <UploadFile />
                      </div>

                      <div className="form-div">
                        <label className="mt-5">Message</label>
                        <Field
                          as="textarea" // Use 'textarea' as the component
                          id="message"
                          name="message"
                          placeholder="Type your message"
                          className="form-input-textarea px-4 max-w-[673px]
                      border-[#E6E6E6] rounded-[4px] text-[#737373]
                      border py-2"
                          rows="15" // Optional: Set the number of rows for the text area
                          cols="50" // Optional: Set the number of columns for the text area
                        />
                      </div>

                      <div className="form-div mt-5">
                        <label>Link</label>
                        <Field
                          type="text"
                          name="link"
                          placeholder="Paste your url here..."
                          className="form-input"
                        />
                        <ErrorMessage
                          className={`text-[#073B3A] text-[13px] ${openSans.className}`}
                          name="email"
                          component="p"
                        />
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
                      type="submit">
                      Submit
                    </button>
                  )}
                </Form>
              </Formik>
              <div
                className="flex items-center relative w-full md:min-h-[807px]
            max-h-[402px] md:max-h-[807px] lg:mt-10
            aspect-[398/402] md:aspect-[774/807] lg:aspect-auto">
                {active == "general" && (
                  <SlideUpAnimation>
                    <Image
                      src={activeImages[active]}
                      alt="Faq IMAGE"
                      className="rounded-[8px] h-full max-h-[807px]"
                      fill
                      style={{ objectFit: "cover" }}
                      objectPosition="bottom"
                    />
                  </SlideUpAnimation>
                )}
                {active == "report" && (
                  <SlideUpAnimation>
                    <Image
                      src={activeImages[active]}
                      alt="Faq IMAGE"
                      className="rounded-[8px] h-full max-h-[807px]"
                      fill
                      style={{ objectFit: "cover" }}
                      objectPosition="bottom"
                    />
                  </SlideUpAnimation>
                )}
                {active == "advertise" && (
                  <SlideUpAnimation>
                    <Image
                      src={activeImages[active]}
                      alt="Faq IMAGE"
                      className="rounded-[8px] h-full max-h-[807px]"
                      fill
                      style={{ objectFit: "cover" }}
                      objectPosition="bottom"
                    />
                  </SlideUpAnimation>
                )}
                {active == "writers" && (
                  <SlideUpAnimation>
                    <Image
                      src={activeImages[active]}
                      alt="Faq IMAGE"
                      className="rounded-[8px] h-full max-h-[807px]"
                      fill
                      style={{ objectFit: "cover" }}
                      objectPosition="bottom"
                    />
                  </SlideUpAnimation>
                )}
              </div>
            </div>
          </div>
        </div>
      </Root>
      <Footer />
    </main>
  );
};

const SlideUpAnimation = ({ children } : {children : React.ReactNode}) => {
  return (
    <motion.div
      className="w-full h-full"
      initial={{ y: 50 }}
      animate={{ y: 0 }}
      exit={{ y: -50 }}
      transition={{
        type: "spring",
        stiffness: "10",
        duration: "3000",
      }}>
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
});

const Tab = styled("button", {
  fontSize: "18px",
  color: "#45808B",
  paddingBlock: "1rem",
  fontWeight: "400",
  cursor: "pointer",
  paddingInline: "1rem",
  transition: "background 200ms ease-in-out, font-weight 200ms ease-in",
  whiteSpace: "nowrap",
  display: "block",
  // backgroundColor:"white",

  "&::after": {
    marginTop: "0px",
    display: "block",
    content: "",
    width: "0px",
    borderBottom: "4px solid white",
    height: "2px",
    // transition: "width 1000ms ease-in-out",
  },

  "&:hover": {
    backgroundColor: "#45808b1c",
  },

  variants: {
    type: {
      active: {
        fontWeight: "600",
        "&::after": {
          marginTop: "11px",
          display: "block",
          content: "",
          width: "100%",
          borderBottom: "4px solid #45808B",
          height: "2px",
          transition: "width 500ms ease-in-out",
        },
        // "&:active::after": {
        //   marginTop: "11px",
        //   display: "block",
        //   borderBottom: "4px solid #45808B",
        //   content: "",
        //   height: "2px",
        //   width: "0px",
        // },
      },
    },
  },
});
