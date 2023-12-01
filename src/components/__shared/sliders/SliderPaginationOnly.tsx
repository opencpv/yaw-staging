"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "@/styles/custom-swiper.css";

const SliderPaginationOnly = ({
  images,
  className,
}: SliderPaginationOnlyProps) => {
  return (
    <div className={`relative h-80 w-72 ${className}`}>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        modules={[Pagination]}
        className={`h-80 w-72 rounded-lg slider-pagination-only ${className}`}
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
