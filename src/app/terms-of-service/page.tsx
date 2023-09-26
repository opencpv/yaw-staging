"use client";
import Head from "next/head";
import TermsNav from "./components/TermsNav";
import fetchTermsData from "./lib/fetchTermsData";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import fetchFaqData from "../faq/lib/fetchFaqData";
import MainView from "./components/MainView";
import { openSans } from "../styles/font";

const TermsOfService = (props: any) => {
  const [data, setdata] = useState<any>();

  useEffect(() => {
    fetchTermsData()
      .then((data) => {
        setdata(data);
      })
      .catch((error: any) => {
        console.log(error.message);
      });
  }, []);
  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <main
        className={`bg-terms-bg bg-cover lg:h-[100vh] w-full ${openSans.className}`}
      >
        <div className="w-max-[1728px] mx-auto md:px-[30px] px-4 py-4">
          {data && <TermsNav data={data[0]} />}
        </div>
        {data && (
          <div className="w-max-[1728px] mx-auto md:px-[30px] px-4 py-4">
            <MainView data={data[0]} />
          </div>
        )}
      </main>
    </>
  );
};

export default TermsOfService;
