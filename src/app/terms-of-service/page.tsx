import TermsNav from "./components/TermsNav";
import { TERMS_QUERY } from "@/lib/utils/sanity/queries";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import MainView from "./components/MainView";
import legal from "@/enum/about/legal";
import { Metadata } from "next";
import TermsMenuWrapper from "./TermsMenuWrapper";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Read and understand the terms and conditions of using ${legal.companyName}  platform, including but not limited to the terms of use and any additional terms and conditions that we may provide from time to time.`, // tentative
};

const page = async () => {
  const initial = await loadQuery<SanityDocument[]>(TERMS_QUERY);
  const data = initial.data[0];

  return (
   <TermsMenuWrapper data={data.termCategories}>
      <section className="min-h-screen md:bg-[url('/assets/images/terms/t1.png')]
      bg-[url('/assets/images/terms/t1-mobile.png')]
      bg-cover bg-no-repeat bg-center md:bg-top "
      
      >
        <nav className="w-full">{data && <TermsNav data={data} />}</nav>
       
        <main className="wrapper flex w-full min-h-[80vh] lg:min-h-[65vh] h-full flex-col items-center justify-center max-sm:pt-0">
          <div className={`flex h-full w-full flex-col`}>
            {data && (
              <div className={`flex h-full w-full items-center justify-center pb-4  `}>
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
