import TermsNav from "./components/TermsNav";
import { TERMS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import MainView from "./components/MainView";
import legal from "@/enum/about/legal";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read and understand the terms and conditions of using ${legal.companyName}  platform, including but not limited to the terms of use and any additional terms and conditions that we may provide from time to time.`, // tentative
};

const page = async () => {
  const initial = await loadQuery<SanityDocument[]>(TERMS_QUERY);
  const data = initial.data[0];

  return (
    <section className="min-h-screen bg-terms-bg bg-cover">
      <nav className="w-full">{data && <TermsNav data={data} />}</nav>
      <main className="wrapper flex w-full flex-col items-center justify-center max-sm:pt-0">
        <div className={`flex h-full w-full flex-col`}>
          {data && (
            <div className="flex h-full w-full items-center justify-center pb-4 pl-5 ">
              <MainView data={data} />
            </div>
          )}
        </div>
      </main>
    </section>
  );
};

export default page;
