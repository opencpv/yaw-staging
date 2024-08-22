import React from "react";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { HOME_PAGE_QUERY } from "@/lib/utils/sanity/queries";
import { Metadata } from "next";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/__shared/ui/footer/Footer"));
const Navbar = dynamic(() => import("@/components/__shared/ui/Navbar"));
const FeaturedListings = dynamic(
  () => import("@/components/__shared/ui/listing/featured-listings"),
);

type Props = {
  children: React.ReactNode;
};

export const metadata: Metadata = {
  title: {
    template: "%s | Blog",
    default: "Blog",
  },
  description: "", //
};

const layout = async ({ children }: Props) => {
  const initial = await loadQuery<SanityDocument[]>(HOME_PAGE_QUERY);
  const data = initial.data[0];

  return (
    <>
      <Navbar />
      <main>
        {children}
        <div className="section px-5 sm:px-10">
          <FeaturedListings />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default layout;
