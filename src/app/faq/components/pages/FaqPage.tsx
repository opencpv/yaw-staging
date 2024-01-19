import React from "react";
import FAQBrowser from "../FAQBrowser";
import ContactSection from "../ContactSection";
import SurveyButton from "@/components/survey/SurveyButton";

type Props = {};

const FaqPage = (props: Props) => {
  return (
    <>
      <h2 className={`text-neutral-800 xs:text-4xl`}>
        Frequently Asked Questions
      </h2>
      <FAQBrowser />
      <ContactSection />
      <SurveyButton />
    </>
  );
};

export default FaqPage;
