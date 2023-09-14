import Navbar from "@/components/__shared/Navbar";
import Head from "next/head";
import FaqHeader from "./components/FaqHeader";
import { sanityClient } from "@/lib/utils/sanityClient";
import fetchFaqData from "./lib/fetchFaqData";

const FAQ = async () => {
  const data = await fetchFaqData();

  return (
    <>
      <Head>
        <title>FAQ - RentRightGh</title>
      </Head>
      <main className="w-full">
        <Navbar />
        <FaqHeader />
      </main>
    </>
  );
};

// export async function getStaticProps() {
//   const query = `*[_type == "faqItem"]{
//     _id,
//     title,
//     description,
//     category->{title}

//   }`;

//   const data = await sanityClient.fetch(query);

//   return {
//     props: {
//       data,
//     },
//   };
// }

export default FAQ;
