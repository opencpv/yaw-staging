import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import {
  FAQ_CATEGORIES_QUERY,
  FAQ_PAGE_QUERY,
  HOW_TO_PAGE_QUERY,
  HOW_TO_TAGS_QUERY,
} from "@/lib/utils/sanity/queries";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const FaqPageWrapper = dynamic(() => import("./components/FaqPageWrapper"));

export const metadata: Metadata = {
  title: "FAQ",
  description: "", // tentative
};

const FAQ = async () => {
  const initialFaqData = await loadQuery<SanityDocument[]>(FAQ_PAGE_QUERY);
  const faqData = initialFaqData.data;
  const initialHowToData = await loadQuery<SanityDocument[]>(HOW_TO_PAGE_QUERY);
  const howToData = initialHowToData.data;
  const initialTagsData = await loadQuery<SanityDocument[]>(HOW_TO_TAGS_QUERY);
  const tagsData = initialTagsData.data;
  const faqCategories = await loadQuery<SanityDocument[]>(FAQ_CATEGORIES_QUERY);

  return (
    <>
      <FaqPageWrapper
        tagsData={tagsData}
        faqData={faqData}
        howToData={howToData}
        faqCategories={faqCategories.data}
      />
    </>
  );
};

export default FAQ;
