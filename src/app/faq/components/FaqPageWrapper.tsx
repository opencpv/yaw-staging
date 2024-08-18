"use client";

import FaqHowToSwitch from "../components/FaqHowToSwitch";
import FaqPage from "../components/pages/FaqPage";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import HowToPage from "../components/pages/HowToPage";
import FaqHeader from "./FaqHeader";
import { LowerCase } from "@/lib/utils/stringManipulation";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/__shared/ui/footer/Footer"));
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));

const FaqPageWrapper = ({
  faqData,
  howToData,
  tagsData,
  faqCategories,
}: {
  faqData: any;
  howToData: any;
  tagsData: any;
  faqCategories: any[];
}) => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);
  return (
    <>
      <Navbar />
      <main className="wrapper relative max-xs:pt-0">
        <FaqHeader />
        <FaqHowToSwitch />
        {LowerCase(activePage as string) === "faq" && (
          <FaqPage data={faqData} faqCategories={faqCategories} />
        )}
        {LowerCase(activePage as string) === "how to" && (
          <HowToPage tags={tagsData} howtos={howToData} />
        )}
      </main>
      <Footer />
    </>
  );
};

export default FaqPageWrapper;
