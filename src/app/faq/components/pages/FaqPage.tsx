import React from "react";
import FAQBrowser from "../FAQBrowser";
import ContactSection from "../ContactSection";

type Props = {
  data: any;
  faqCategories: any[];
};

const FaqPage = (props: Props) => {
  return (
    <>
      <h2 className={`text-neutral-800 xs:text-4xl`}>
        Frequently Asked Questions
      </h2>
      <FAQBrowser data={props.data} faqCategories={props.faqCategories} />
      <ContactSection />
    </>
  );
};

export default FaqPage;
