"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/styles/custom-swiper.css";
import { useAdsSliderStore } from "@/store/ads/useAdsSliderStore";


const SliderPaginationOnly = ({
  images,
  className,
  disabledOnInteraction
}: SliderPaginationOnlyProps) => {
  const shouldAutoplay = useAdsSliderStore((state) => state.autoplay);
  const setAutoplay = useAdsSliderStore((state) => state.setAutoplay)

  return (
    <div className={`relative h-80 w-72 ${className}`}>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: disabledOnInteraction ? disabledOnInteraction : false,
          waitForTransition: false,
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        modules={[Pagination, Autoplay]}
        className={`h-80 w-72 rounded-lg slider-pagination-only ${className}`}
        // onSlideChange={() => setAutoplay(false)}
        // onTransitionEnd={() => setAutoplay(true)}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx + 1}>
            <div className="relative w-full h-full">
              <Image
                src={image.src}
                alt={image.name}
                className=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="relative h-10 rounded-b-lg bottom-10 z-10 bg-neutral-600 bg-opacity-30"></div>
    </div>
  );
};

export default SliderPaginationOnly;
