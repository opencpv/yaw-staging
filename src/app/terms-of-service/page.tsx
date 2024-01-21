import Head from "next/head";
import TermsNav from "./components/TermsNav";
import fetchTermsData from "./lib/fetchTermsData";
import { GetServerSideProps } from "next";
import { useEffect, useState } from "react";
import fetchFaqData from "../faq/lib/fetchFaqData";
import MainView from "./components/MainView";
import { openSans } from "../../styles/font";

const page = async () => {
  const data = await fetchTermsData();

  return (
    <>
      <Head>
        <title>Terms of Service</title>
      </Head>
      <main className="flex w-full flex-col items-center justify-center">
        <div
          className={` min-h-[100vh] w-full max-w-[1728px] bg-terms-bg bg-cover ${openSans.className}`}
        >
          <div className="w-full px-4 py-4 ">
            {data && <TermsNav data={data[0]} />}
          </div>
          {data && (
            <div className="w-full px-4 py-4 ">
              <MainView data={data[0]} />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default page;
