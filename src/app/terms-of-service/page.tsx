import { TERMS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import legal from "@/enum/about/legal";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const TermsNav = dynamic(() => import("./components/TermsNav"))
const MainView = dynamic(() => import("./components/MainView"))
const TermsMenuWrapper = dynamic(() => import("./TermsMenuWrapper"))

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read and understand the terms and conditions of using ${legal.companyName}  platform, including but not limited to the terms of use and any additional terms and conditions that we may provide from time to time.`, // tentative
};

const page = async () => {
  const initial = await loadQuery<SanityDocument[]>(TERMS_QUERY);
  const data = initial.data[0];

  return (
    <TermsMenuWrapper data={data.termCategories}>
      <section
        className="min-h-screen bg-[url('/assets/images/terms/t1-mobile.png')]
      bg-cover
      bg-center bg-no-repeat md:bg-[url('/assets/images/terms/t1.png')] md:bg-top "
      >
        <nav className="w-full">{data && <TermsNav data={data} />}</nav>{" "}
        {/* EC: Good, however preferably make the TermsNav a "nav" element,
         * and remove the surrounding nav from here.
         * It seems it doesn't have an effect. TermsNav already has "w-full"
         * e.g {data && <TermsNav data={data} />}
         */}
        <main className="wrapper flex h-full min-h-[80vh] w-full flex-col items-center justify-center max-sm:pt-0 lg:min-h-[65vh]">
          <div className={`flex h-full w-full flex-col`}>
            {data && (
              <div
                className={`flex h-full w-full items-center justify-center pb-4  `}
              >
                <MainView data={data} />
              </div>
            )}
          </div>
        </main>
      </section>
    </TermsMenuWrapper>
  );
};

export default page;
