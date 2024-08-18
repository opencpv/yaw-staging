import Image from "next/image";
import React from "react";
import TagsSelect from "./components/TagsSelect";
import FixedSocials from "@/components/__shared/ui/FixedSocials";
import ScrollTop from "@/components/__shared/ui/ScrollTop";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";
import dynamic from "next/dynamic";
const Footer = dynamic(() => import("@/components/__shared/ui/footer/Footer"));
const PropertiesListing = dynamic(
  () => import("./components/PropertiesListing"),
);
const SearchCity = dynamic(() => import("./components/SearchCity"));

const page = () => {
  let adsData: SanityDocument[] = [];
  let filteredAdsData: SanityDocument[] = [];
  loadQuery<SanityDocument[]>(ADS_QUERY).then((ads) => {
    adsData = ads?.data;
    filteredAdsData = adsData?.filter((item: any) => item.isPublished == true);
  });

  return (
    <>
      <div className="relative aspect-video h-40 w-full sm:h-60">
        <Image
          src="/assets/images/Stock.jpg"
          alt=""
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      {/* Search */}
      <section className="flex w-full flex-col items-center">
        <SearchCity />
        <div className="mx-auto w-full text-neutral-500">
          <TagsSelect />
        </div>
      </section>
      <PropertiesListing ads={filteredAdsData} />
      <FixedSocials thresholdMin={300} />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default page;
