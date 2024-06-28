import Navbar from "@/components/__shared/ui/Navbar";
import Image from "next/image";
import React from "react";
import TagsSelect from "./components/TagsSelect";
import Footer from "@/components/__shared/ui/footer/Footer";
import FixedSocials from "@/components/FixedSocials";
import ScrollTop from "@/components/__shared/ui/ScrollTop";
import PropertiesListing from "./components/PropertiesListing";
import SearchCity from "./components/SearchCity";
import { Metadata } from "next";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";

export const metadata: Metadata = {
  title: "Properties",
  description:
    "Find your dream home in Ghana. Browse through a wide variety of properties for rent. Compare properties and get notified when new listings match your preferences.", // tentative
};

const page = () => {
  let adsData: SanityDocument[] = [];
  let filteredAdsData: SanityDocument[] = [];
  loadQuery<SanityDocument[]>(ADS_QUERY).then((ads) => {
    adsData = ads.data;
    filteredAdsData = adsData.filter((item: any) => item.isPublished == true);
  });

  return (
    <>
      <Navbar />
      <div className="relative h-72 w-full">
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
      <FixedSocials />
      <Footer />
      <ScrollTop />
    </>
  );
};

export default page;
