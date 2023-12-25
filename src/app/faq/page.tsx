"use client";
import Navbar from "@/components/__shared/Navbar";
import Head from "next/head";
import FaqHeader from "./components/FaqHeader";
import BreadCrumb from "./components/Breadcrumb";
import FAQBrowser from "./components/FAQBrowser";
import Footer from "@/components/__shared/footer/Footer";
import ContactSection from "./components/ContactSection";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import FaqHowToSwitch from "./components/FaqHowToSwitch";
import FaqPage from "./components/pages/FaqPage";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import { LowerCase } from "@/lib/utils/stringManipulation";
import HowToPage from "./components/pages/HowToPage";

const FAQ = () => {
  const activePage = useFaqHowToSwitchStore((state) => state.activePage);

  const { icons } = useAssets();
  return (
    <>
      <Head>
        <title>FAQ - RentRightGh</title>
      </Head>
      <Navbar />
      <main className="relative section">
        <FaqHeader />
        {/* <BreadCrumb link="FAQ" /> */}
        <FaqHowToSwitch />
        {LowerCase(activePage as string) === "faq" && <FaqPage />}
        {LowerCase(activePage as string) === "how to" && <HowToPage />}
      </main>
      <Footer />
    </>
  );
};

export default FAQ;
