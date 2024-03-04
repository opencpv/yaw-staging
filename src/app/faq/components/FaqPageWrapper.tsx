"use client";
import Footer from "@/components/__shared/footer/Footer";
import FaqHowToSwitch from "../components/FaqHowToSwitch";
import FaqPage from "../components/pages/FaqPage";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import HowToPage from "../components/pages/HowToPage";
import Navbar from "@/components/__shared/Navbar";
import FaqHeader from "./FaqHeader";
import { LowerCase } from "@/lib/utils/stringManipulation";

const FaqPageWrapper = ({
  data,
  faqCategories,
}: {
  data: any;
  faqCategories: any[];
}) => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);

  return (
    <>
      <Navbar />
      <main className="wrapper relative">
        <FaqHeader />
        <FaqHowToSwitch />
        {LowerCase(activePage as string) === "faq" && (
          <FaqPage data={data} faqCategories={faqCategories} />
        )}
        {LowerCase(activePage as string) === "how to" && <HowToPage />}
      </main>
      <Footer />
    </>
  );
};

export default FaqPageWrapper;
