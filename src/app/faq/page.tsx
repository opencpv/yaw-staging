import Navbar from "@/components/__shared/Navbar";
import Head from "next/head";
import FaqHeader from "./components/FaqHeader";
import BreadCrumb from "./components/Breadcrumb";
import { openSans } from "@/lib/utils/fonts";
import FAQBrowser from "./components/FAQBrowser";

const FAQ = async () => {
  return (
    <>
      <Head>
        <title>FAQ - RentRightGh</title>
      </Head>
      <main className="w-full">
        <Navbar />
        <FaqHeader />
        <BreadCrumb link="FAQ" />
        <h1
          className={`px-[39px] font-semibold mb-[100px] text-[#000] text-[39px] ${openSans.className}`}
        >
          Frequently Asked Questions
        </h1>
        <FAQBrowser />
      </main>
    </>
  );
};

export default FAQ;
