"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/styles/custom-swiper.css";

import { Pagination, Navigation, Grid } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderGrid = ({ items }: SliderGridProps) => {
  return (
    <div className="w-full h-full pb-10">
      <Swiper
        slidesPerView={1}
        // centeredSlides
        grid={{
          fill: "row",
          rows: 1,
        }}
        spaceBetween={20}
        grabCursor
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
          el: ".slider-grid-pagination",
        }}
        navigation={{
          nextEl: ".listing-grid-next",
          prevEl: ".listing-grid-prev",
        }}
        modules={[Grid, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            grid: {
              rows: 3,
            },
          },
          900: {
            slidesPerView: 3,
            grid: {
              rows: 3,
            },
          },
          1024: {
            slidesPerView: 2,
            grid: {
              rows: 3,
            },
          },
          1240: {
            slidesPerView: 3,
            grid: {
              rows: 3,
            },
          },
        }}
        className="w-full h-full pb-20 slider-grid"
      >
        {/* Mapping through Featured listings from database */}
        {items.map((item, idx) => (
          <SwiperSlide key={idx + 1} className="">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination bullets and button */}
      <div className="relative z-20 flex items-center justify-center w-11/12 mx-auto -mt-4 top-10 2xl:w-9/12">
        {/* Prev Button */}
        <div className="inline-flex items-center justify-between w-full gap-5">
          <div className="grid w-12 h-12 rounded-full cursor-pointer listing-grid-prev bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronLeft className="text-white" />
          </div>
          <div className="absolute left-20 slider-grid-pagination w-full hidden min-[250px]:block"></div>
          {/* Next button */}
          <div className="grid w-12 h-12 rounded-full cursor-pointer listing-grid-next bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderGrid;
