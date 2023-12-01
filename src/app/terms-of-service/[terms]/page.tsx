import Head from "next/head";
import fetchTermsData from "../lib/fetchTermsData";
import TermsNav from "../components/TermsNav";
import { openSans } from "@/styles/font";
import TermsMainView from "./components/TermsMainVie";
import Footer from "@/app/components/Footer";

const Terms = async (props: any) => {
  const path = props.params.terms;
  const paths = path.split("/");
  const currentPath = paths[paths.length - 1];
  const data = await fetchTermsData();
  const terms: any = await data[0].termCategories;
  const currentTerms = terms.filter((obj: any) => obj.slug == currentPath);
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className={` max-w-[1728px] mx-auto w-full ${openSans.className}`}>
        {data && <TermsNav data={data[0]} primary={false} />}
        {data && <TermsMainView data={currentTerms[0]} />}

        <Footer />
      </main>
    </>
  );
};

export default Terms;
