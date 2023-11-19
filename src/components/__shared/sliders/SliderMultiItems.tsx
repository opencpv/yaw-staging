"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import "@/app/styles/popularcities.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
// import PopularCitiesCard from "./PopularCitiesCard";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import PopularCitiesCard from "@/app/components/PopularCitiesCard";

const SliderMultiItems = ({ items }: SliderMultiItemsProps) => {
  return (
    <>
      <Swiper
        slidesPerView={1.5}
        spaceBetween={15}
        centeredSlides
        breakpoints={{
          330: {
            spaceBetween: 20,
          },
        }}
        pagination={{
          clickable: true,
          el: ".slider-multi-items-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          nextEl: ".slider-multi-items-next",
          prevEl: ".slider-multi-items-prev",
        }}
        modules={[Pagination, Navigation]}
        className="w-full h-fit mySwiper slider-multi-items"
      >
        {items.map((item, idx) => (
          <SwiperSlide key={idx + 1} className="">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination bullets and button */}
      <div className="relative z-20 bottom-[-2rem] w-11/12 mx-auto flex items-center justify-center">
        <div className="inline-flex items-center justify-between w-full gap-5">
          {/* Prev Button */}
          <div className="grid w-12 h-12 rounded-full slider-multi-items-prev bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronLeft className="text-white" />
          </div>
          <div className="ml-10 slider-multi-items-pagination w-full hidden min-[250px]:block min-[360px]:ml-20"></div>
          {/* Next button */}
          <div className="grid w-12 h-12 rounded-full slider-multi-items-next bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default SliderMultiItems;
