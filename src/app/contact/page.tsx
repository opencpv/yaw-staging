"use client";

import { styled } from "@stitches/react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import Image from "next/image";
import { AiOutlineLink } from "react-icons/ai";
import { UploadFile } from "./components/UploadFile";
import { useRef, useState } from "react";
import { montserat, openSans } from "../styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { BiRightArrowCircle } from "react-icons/bi";

const Page = () => {
  const [active, setActive] = useState("general");
  const { images } = useAssets();
  const scrollContainerRef = useRef<HTMLDivElement | null>(null);

  // Function to scroll to the bottom
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

  return (
    <Root className="sm:p-5 lg:p-10 flex flex-col items-center justify-center">
      <div
        className={`banner flex flex-col lg:flex-row justify-center items-center lg:items-start min-h-[493px] md:h-[528px] text-white font-bold  lg::gap-20 ${openSans.className}`}>
        <div className="lg:py-20 text-[32px] md:text-5xl lg:text-[61px]">
          <p>Get in touch with us</p>
        </div>
        <div
          className="w-full relative max-w-[450px]
        aspect-[318/240]
        md:aspect-[414/303]
        lg:aspect-square lg:pb-5">
          <Image src={"/svgs/contact1.svg"} alt="Contact" fill />
        </div>
      </div>
      <div
        className={`max-w-full lg:max-w-[90%] relative lg:top-[-100px] z-[20] h-full w-full min-h-[500px] form-root p-5 sm:p-3 lg:p-8 pt-5 lg:pt-2  ${montserat.className}`}>
        <div className="">
          <div className="flex  items-center " ref={scrollContainerRef}>
            <div className="flex gap-[50px] overflow-x-scroll lg:overflow-x-auto relative ">
              <Tab
                onClick={(e) => setActive("general")}
                type={active == "general" && "active"}>
                General
              </Tab>
              <Tab
                onClick={(e) => setActive("report")}
                type={active == "report" && "active"}>
                Report an issue
              </Tab>
              <Tab
                onClick={(e) => setActive("advertise")}
                type={active == "advertise" && "active"}>
                Advertise with us
              </Tab>
              <Tab
                onClick={(e) => setActive("writers")}
                className="sc"
                type={active == "writers" && "active"}>
                Writers
              </Tab>
            </div>
            <div
              className="md:hidden absolute right-5 pl-5 sc-button"
              onClick={scrollToRight}>
              <BiRightArrowCircle color="#71C9C7" size="24" />
            </div>
          </div>

          <div className="flex xl:flex-row flex-col gap-10 h-full">
            <Formik
              initialValues={{}}
              onSubmit={(values) => {
                console.log(values);
              }}
              clasName="">
              <Form className=" pt-8 xl:flex-[1_0_407px] 2xl:flex-[1_0_637px] ">
                <div className=" gap-5">
                  <div className="">
                    <div className="flex flex-col gap-5">
                      <div className="form-div">
                        <label>Full Name:</label>
                        <Field
                          type="text"
                          name="name"
                          placeholder="Enter your full name"
                          className="form-input"
                        />
                        <ErrorMessage name="name" />
                      </div>

                      <div className="form-div">
                        <label>Email Address:</label>
                        <Field
                          type="email"
                          name="email"
                          placeholder="Enter your email address"
                          className="form-input"
                        />
                        <ErrorMessage name="email" />
                      </div>
                      <UploadFile />
                    </div>

                    <div className="form-div">
                      <label htmlFor="bio" className="mt-5">
                        Message:
                      </label>
                      <Field
                        as="textarea" // Use 'textarea' as the component
                        id="bio"
                        name="bio"
                        placeholder="Type your message"
                        className="form-input-textarea px-4 max-w-[673px]
                      border-[#E6E6E6] rounded-[4px] text-[#737373]
                      border py-2"
                        rows="15" // Optional: Set the number of rows for the text area
                        cols="50" // Optional: Set the number of columns for the text area
                      />
                    </div>
                  </div>
                </div>
                <button
                  className="bg-[#DDB771] rounded-[8px] h-[52px] 
                w-[135px] flex items-center justify-center text-white mt-5"
                  type="submit">
                  Submit
                </button>
              </Form>
            </Formik>
            <div
              className="flex items-center relative w-full md:min-h-[807px]
            max-h-[402px] md:max-h-[807px] lg:mt-10
            aspect-[398/402] md:aspect-[774/807] lg:aspect-auto">
              <Image
                src={images.StockImage}
                alt="Faq IMAGE"
                className="rounded-[8px] h-full max-h-[807px]"
                fill
              />
            </div>
          </div>
        </div>
      </div>
    </Root>
  );
};

export default Page;

const Root = styled("div", {
  ".banner": {
    background:
      "var(--faq-banner, linear-gradient(103deg, #21A19F 38.96%, rgba(30, 169, 166, 0.63) 90.07%))",
    width: "100%",
    aspectRatio: "550px",
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
    maxWidth: "673px",
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
          transition: "width 1000ms ease-in-out",
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
