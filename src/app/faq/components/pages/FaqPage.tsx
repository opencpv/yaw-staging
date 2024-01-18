import React from "react";
import FAQBrowser from "../FAQBrowser";
import ContactSection from "../ContactSection";

type Props = {};

const FaqPage = (props: Props) => {
  return (
    <>
      <h2
        className={`text-neutral-800 text-xl xs:text-4xl`}
      >
        Frequently Asked Questions
      </h2>
      <FAQBrowser />
      <ContactSection />
    </>
  );
};

export default FaqPage;
