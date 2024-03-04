import Head from "next/head";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import {
  FAQ_CATEGORIES_QUERY,
  FAQ_PAGE_QUERY,
  HOME_PAGE_QUERY,
} from "@/lib/utils/sanity/queries";
import ClientPageWrapper from "@/components/__shared/ClientPageWrapper";
import FaqPageWrapper from "./components/FaqPageWrapper";
const FAQ = async () => {
  const initial = await loadQuery<SanityDocument[]>(FAQ_PAGE_QUERY);
  const data = initial.data;
  const faqCategories = await loadQuery<SanityDocument[]>(FAQ_CATEGORIES_QUERY);
  return (
    <>
      <Head>
        <title>FAQ - RentRightGh</title>
      </Head>
      <FaqPageWrapper data={data} faqCategories={faqCategories.data} />
    </>
  );
};

export default FAQ;
