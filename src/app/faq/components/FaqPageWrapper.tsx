"use client";
import Footer from "@/components/__shared/ui/footer/Footer";
import FaqHowToSwitch from "../components/FaqHowToSwitch";
import FaqPage from "../components/pages/FaqPage";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import HowToPage from "../components/pages/HowToPage";
import Navbar from "@/components/__shared/ui/Navbar";
import FaqHeader from "./FaqHeader";
import { LowerCase } from "@/lib/utils/stringManipulation";

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
