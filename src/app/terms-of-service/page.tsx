import Head from "next/head";
import TermsNav from "./components/TermsNav";
import { TERMS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import MainView from "./components/MainView";

const page = async () => {
  const initial = await loadQuery<SanityDocument[]>(TERMS_QUERY);
  const data = initial.data[0];

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
