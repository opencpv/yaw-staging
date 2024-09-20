import React, { Suspense } from "react";
import Callout from "@/components/__shared/ui/callout";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";
import dynamic from "next/dynamic";
import { client } from "@/lib/utils/sanity/client";
import Loader from "@/components/__shared/ui/loader";
const Items = dynamic(() => import("./components/Items"));
const SliderWide = dynamic(
  () => import("@/components/__shared/ui/sliders/slider-wide"),
  {
    loading: () => <Loader />,
  },
);

const page = async () => {
  const data = await client.fetch(ADS_QUERY);
  const filteredAdsData = data.filter((item: any) => item.isPublished == true);

  return (
    <main className="wrapper overflow-x-hidden pb-0 text-neutral-600">
      {/* Banner */}
      <section className="relative mb-10 w-full text-white">
        <SliderWide
          pagination
          autoplay
          className="max-sm:aspect-video sm:h-[26rem]"
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
      <Callout
        content="You may select more than one response"
        className="mb-10"
      />
      <Suspense>
        <Items ads={filteredAdsData} />
      </Suspense>
    </main>
  );
};

export default page;
