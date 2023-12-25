import React from "react";
import FAQBrowser from "../FAQBrowser";
import ContactSection from "../ContactSection";

type Props = {};

const FaqPage = (props: Props) => {
  return (
    <>
      <h1
        className={`px-[39px] font-semibold mb-[100px] text-[#000] text-[39px]`}
      >
        Frequently Asked Questions
      </h1>
      <FAQBrowser />
      <ContactSection />
    </>
  );
};

export default FaqPage;
