import TermsNav from "./components/TermsNav";
import fetchTermsData from "./lib/fetchTermsData";
import { Metadata } from "next";
import fetchFaqData from "../faq/lib/fetchFaqData";
import MainView from "./components/MainView";
import legal from "@/enum/about/legal";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read and understand the terms and conditions of using ${legal.companyName}  platform, including but not limited to the terms of use and any additional terms and conditions that we may provide from time to time.`, // tentative
};

const page = async () => {
  const data = await fetchTermsData();

  return (
    <section className="h-screen bg-terms-bg bg-cover">
      <nav className="w-full">{data && <TermsNav data={data[0]} />}</nav>
      <main className="wrapper flex w-full flex-col items-center justify-center">
        <div className={`flex h-full w-full flex-col`}>
          {data && (
            <div className="flex h-full w-full items-center justify-center px-4 pb-4 pl-5 ">
              <MainView data={data[0]} />
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default page;
