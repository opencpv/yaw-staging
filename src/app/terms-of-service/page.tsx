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
          className={`flex h-full min-h-[100vh] w-full max-w-[1728px] flex-col bg-terms-bg bg-cover`}
        >
          <div className="w-full">{data && <TermsNav data={data[0]} />}</div>
          {data && (
            <div className="flex h-full w-full items-center justify-center px-4 pb-4 pl-5 ">
              <MainView data={data[0]} />
            </div>
          )}
        </div>
      </main>
    </>
  );
};

export default page;
