import React from "react";
import SliderWide from "@/components/__shared/ui/sliders/SliderWide";
import Items from "./components/Items";
import CallOut from "@/components/__shared/ui/CallOut";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@sanity/react-loader";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";

const MovingSalesPage = () => {
  let adsData: SanityDocument[] = [];
  let filteredAdsData: SanityDocument[] = [];
  loadQuery<SanityDocument[]>(ADS_QUERY).then((ads) => {
    adsData = ads.data;
    filteredAdsData = adsData.filter((item: any) => item.isPublished == true);
  });

  return (
    <main className="wrapper overflow-x-hidden pb-0 text-neutral-600">
      {/* Banner */}
      <section className="relative mb-20 w-full text-white">
        <SliderWide
          pagination
          autoplay
          className="absolute max-sm:aspect-video sm:h-[26rem]"
          images={[1, 2, 3].map((image) => ({
            src: "/assets/images/moving-sale/lady-shopping.jpeg",
            name: "",
            href: "/blog/c/p",
          }))}
          overlay
          classNames={{
            overlay: "bg-gradient-to-r from-primary-500/70 to-transparent",
          }}
        />
        <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center rounded-l-3xl">
          <h1 className="relative z-20 pl-5 text-4xl font-[700] xs:pl-20 sm:text-5xl">
            Shop
          </h1>
        </div>
      </section>
      <CallOut
        content="You may select more than one response"
        className="mb-20"
      />
      <Items />
    </main>
  );
};

export default MovingSalesPage;
