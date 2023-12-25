"use client";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import React from "react";

let images = [
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
];

const AdsSliderColumn = () => {
  return (
    <div className="col-span-2 hidden h-full gap-4 flex-col lg:flex">
      {images.map((imageOuter, idx) => (
        <SliderPaginationOnly
          disabledOnInteraction
          key={idx + 1}
          className="h-full w-full flex-1 last:flex-[2]"
          images={[1, 2, 3].map((image) => ({
            name: "4 bedroom apartment",
            src: imageOuter,
          }))}
        />
      ))}
    </div>
  );
};

export default AdsSliderColumn;
