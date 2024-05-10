import Footer from "@/components/__shared/ui/footer/Footer";
import Navbar from "@/components/__shared/ui/Navbar";
import FeaturedListings from "@/components/__shared/ui/listing/FeaturedListings";
import ScrollTopAndSocial from "@/components/__shared/ui/ScrollTopAndSocial";
import React from "react";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { HOME_PAGE_QUERY } from "@/lib/utils/sanity/queries";
import Survey from "@/components/__shared/ui/survey";

type Props = {
  children: React.ReactNode;
};

const layout = async ({ children }: Props) => {
  const initial = await loadQuery<SanityDocument[]>(HOME_PAGE_QUERY);
  const data = initial.data[0];
  return (
    <>
      <Navbar />
      <main className="pb-8 sm:pb-14">
        {children}
        <div className="section px-5 sm:px-10">
          <FeaturedListings />
        </div>
        <Survey />
        <ScrollTopAndSocial threshHoldMin={300} threshHoldMax={2500} />
      </main>
      <Footer />
    </>
  );
};

export default layout;
