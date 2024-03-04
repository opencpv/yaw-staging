"use client";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import { urlForImage } from "@/lib/utils/sanity/utils";
import React from "react";

let images = [
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
];

const AdsSliderColumn = ({ ads = [] }: { ads: any }) => {
  console.log(ads);
  return (
    <div className="col-span-2 hidden h-full flex-col gap-4 lg:flex">
      {ads.map((ad: any, idx: number) => (
        <SliderPaginationOnly
          disabledOnInteraction
          key={idx + 1}
          className="h-full w-full flex-1 last:flex-[2]"
          images={ad.adImages.map((image: any) => ({
            name: image.alt,
            src: urlForImage(image.customImageItem)?.url() as string,
          }))}
        />
      ))}
    </div>
  );
};

export default AdsSliderColumn;
