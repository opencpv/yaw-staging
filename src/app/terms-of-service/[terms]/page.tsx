"use client";
import Head from "next/head";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import fetchTermsData from "../lib/fetchTermsData";
import TermsNav from "../components/TermsNav";
import { openSans } from "@/app/styles/font";
import TermsMainView from "./components/TermsMainVie";
import Footer from "@/app/components/Footer";

const Terms = () => {
  const path = usePathname();
  const paths = path.split("/");
  const currentPath = paths[paths.length - 1];
  const [data, setdata] = useState<any>();
  const [termsData, settermsData] = useState<any>();
  useEffect(() => {
    fetchTermsData().then((res) => {
      const terms: any = res[0].termCategories;
      const currentTerms = terms.filter((obj: any) => obj.slug == currentPath);
      settermsData(currentTerms[0]);
      setdata(res);
      console.log(currentTerms);
    });
  }, []);
  return (
    <>
      <Head>
        <title></title>
      </Head>
      <main className={` w-full ${openSans.className}`}>
        {data && <TermsNav data={data[0]} primary={false} />}
        <TermsMainView data={termsData} />

        <Footer />
      </main>
    </>
  );
};

export default Terms;
