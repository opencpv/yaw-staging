"use client";
import Head from "next/head";
import FaqHeader from "./components/FaqHeader";
import BreadCrumb from "./components/Breadcrumb";
import { openSans } from "@/lib/utils/fonts";
import FAQBrowser from "./components/FAQBrowser";
import Footer from "@/components/__shared/footer/Footer";
import ContactSection from "./components/ContactSection";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Navbar from "@/components/__shared/Navbar";

const FAQ = () => {
  const { icons } = useAssets();
  return (
    <>
      <Head>
        <title>FAQ - RentRightGh</title>
      </Head>
      <main className="max-w-[1728px] mx-auto relative">
        <Navbar />
        <FaqHeader />
        <BreadCrumb link="FAQ" />
        <h1
          className={`px-[39px] font-semibold mb-[100px] text-[#000] text-[39px] ${openSans.className}`}
        >
          Frequently Asked Questions
        </h1>
        <FAQBrowser />
        <ContactSection />

        <Footer />
      </main>
    </>
  );
};

export default FAQ;
