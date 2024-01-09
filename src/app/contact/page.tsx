"use client";

import { styled } from "@stitches/react";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/components/__shared/footer/Footer";
import { motion } from "framer-motion";
import PhoneNumberInputv2 from "@/components/__shared/PhoneInputv2";
import { useHashChangeScroll } from "@/lib/custom-hooks/useWindowEvents";
import ContactBanner from "./components/ContactBanner";
import ContactTabs from "./components/ContactTabs";
import ScrollTopAndSocial from "../../components/ui/ScrollTopAndSocial";
import FeedbackButton from "../../components/feedback/FeedbackButton";
import ContactForm from "./components/ContactForm";
import ContactFormSideImage from "./components/ContactFormSideImage";

const Page = () => {
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
                <ContactForm />
                <ContactFormSideImage />
              </div>
            </div>
          </div>
        </Root>
        <ScrollTopAndSocial threshHoldMin={450} threshHoldMax={1400} />
        <div className="mt-20 lg:mt-0">
          <FeedbackButton />
        </div>
      </main>
      <Footer />
    </>
  );
};

// const SlideUpAnimation = ({ children }: { children: React.ReactNode }) => {
//   return (
//     <motion.div
//       className="w-full h-full"
//       initial={{ y: 50 }}
//       animate={{ y: 0 }}
//       exit={{ y: -50 }}
//       transition={{
//         type: "spring",
//         stiffness: "10",
//         duration: "1000",
//       }}
//     >
//       {children}
//     </motion.div>
//   );
// };

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

export default Page;