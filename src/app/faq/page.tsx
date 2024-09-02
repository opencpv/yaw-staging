import { client } from "@/lib/utils/sanity/client";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import {
  FAQ_CATEGORIES_QUERY,
  FAQ_PAGE_QUERY,
} from "@/lib/utils/sanity/queries";
import { Metadata } from "next";
import FaqPage from "./components/pages/FaqPage";
import FaqHeader from "./components/FaqHeader";
import FaqHowToSwitch from "./components/FaqHowToSwitch";
import dynamic from "next/dynamic";
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));
const Survey = dynamic(() => import("@/components/__shared/ui/survey"));

export const metadata: Metadata = {
  title: "FAQ",
  description: "", // tentative
};

export default async function page() {
  const faqData = await client.fetch(FAQ_PAGE_QUERY);
  const faqCategories = await client.fetch(FAQ_CATEGORIES_QUERY);

  return (
    <>
      <Navbar />
      <main className="wrapper relative max-xs:pt-0">
        <FaqHeader />
        <FaqHowToSwitch />
        <FaqPage data={faqData} faqCategories={faqCategories} />
      </main>
      <Footer />
      <Survey />
    </>
  );
}
