import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import {
  HOW_TO_PAGE_QUERY,
  HOW_TO_TAGS_QUERY,
} from "@/lib/utils/sanity/queries";
import { Metadata } from "next";
import HowToPage from "../faq/components/pages/HowToPage";
import Navbar from "@/components/__shared/ui/Navbar";
import FaqHeader from "../faq/components/FaqHeader";
import FaqHowToSwitch from "../faq/components/FaqHowToSwitch";
import Footer from "@/components/__shared/ui/footer/Footer";
import Survey from "@/components/__shared/ui/survey";

export const metadata: Metadata = {
  title: "How To",
  description: "", // tentative
};

export default async function page() {
  const initialHowToData = await loadQuery<SanityDocument[]>(HOW_TO_PAGE_QUERY);
  const howToData = initialHowToData.data;
  const initialTagsData = await loadQuery<SanityDocument[]>(HOW_TO_TAGS_QUERY);
  const tagsData = initialTagsData.data;

  return (
    <>
      <Navbar />
      <main className="wrapper relative max-xs:pt-0">
        <FaqHeader />
        <FaqHowToSwitch />
        <HowToPage tags={tagsData} howtos={howToData} />
      </main>
      <Footer />
      <Survey />
    </>
  );
}
