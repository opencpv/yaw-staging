"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "@/app/about/components/custom-swiper.css";

import { Navigation, Pagination } from "swiper/modules";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const SliderWide = ({ images, className }: SliderWideProps) => {
  return (
    <div className={`relative w-full sm:h-80 ${className}`}>
      <Swiper
        navigation={{
          nextEl: ".slider-wide-next-btn",
          prevEl: ".slider-wide-prev-btn",
        }}
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        modules={[Navigation, Pagination]}
        className="h-60 w-full rounded-lg slider-wide sm:h-80"
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx + 1}>
            <div className="relative h-full w-full">
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
      <div className="">
        {/* Navigation buttons */}
        <div className="slider-wide-prev-btn absolute bottom-24 left-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white sm:bottom-32">
          <MdChevronLeft className="text-lg text-neutral-700" />
        </div>
        {/* <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div> */}
        <div className="slider-wide-next-btn absolute bottom-24 right-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white sm:bottom-32">
          <MdChevronRight className="text-lg text-neutral-700" />
        </div>
      </div>
    </div>
  );
};

export default SliderWide;
