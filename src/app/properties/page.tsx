import Image from "next/image";
import React, { Suspense } from "react";
import TagsSelect from "./components/TagsSelect";
import FixedSocials from "@/components/__shared/ui/fixed-socials/fixed-socials";
import { ADS_QUERY } from "@/lib/utils/sanity/queries";
import dynamic from "next/dynamic";
import { client } from "@/lib/utils/sanity/client";
const ScrollTop = dynamic(
  () => import("@/components/__shared/ui/scroll-top/scroll-top"),
);
const Footer = dynamic(() => import("@/components/__shared/ui/footer"));
const PropertiesListing = dynamic(
  () => import("./components/PropertiesListing"),
);
const SearchCity = dynamic(() => import("./components/SearchCity"));

async function page() {
  const data = await client.fetch(ADS_QUERY);
  const filteredAdsData = data.filter((item: any) => item.isPublished == true);

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
          <Suspense>
            <TagsSelect />
          </Suspense>
        </div>
      </section>
      <Suspense>
        <PropertiesListing ads={filteredAdsData} />
      </Suspense>
      <FixedSocials thresholdMin={300} />
      <Footer />
      <ScrollTop />
    </>
  );
}

export default page;
