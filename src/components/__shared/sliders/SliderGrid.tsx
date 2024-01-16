"use client";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "@/styles/custom-swiper.css";

import { Pagination, Navigation, Grid } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SliderGrid = ({ items }: SliderGridProps) => {
  // useEffect(() => {
  //   let swiperInstance = false;

  //   const initializeSwiper = () => {
  //     // swiperInstance = new Swiper('.swiper-grid', {
  //     //  {}
  //     // });
  //   };

  //   initializeSwiper();

  //   const handleResize = () => {
  //     // Detect the breakpoint and re-initialize Swiper
  //     if (window.innerWidth === 640) {
  //       // initializeSwiper();
  //       // alert("reached 640px !")

  //     }
  //   };

  //   window.addEventListener('resize', handleResize);

  //   return () => {
  //     window.removeEventListener('resize', handleResize);
  //     // Destroy Swiper instance on component unmount
  //     // if (swiperInstance) {
  //     //   swiperInstance.destroy();
  //     // }
  //   };
  // }, []);

  return (
    <div className="w-full h-full mb-10">
      <Swiper
        slidesPerView={1}
        // centeredSlides
        grid={{
          fill: "row",
          rows: 1,
        }}
        spaceBetween={20}
        // grabCursor
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
          460: {
            centeredSlides: true,
            slidesPerView: 1.5,
          },
          640: {
            slidesPerView: 2,
            centeredSlides: false,
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
        observer
        observeParents
        observeSlideChildren
        resizeObserver
        className="w-full h-full slider-grid"
      >
        {/* Mapping through Featured listings from database */}
        {items?.map((item, idx) => (
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
