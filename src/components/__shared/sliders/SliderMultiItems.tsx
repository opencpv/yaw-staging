"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination, Navigation, Autoplay, FreeMode } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import "swiper/css/free-mode";

const SliderMultiItems = ({
  items,
  slidesPerView,
  breakpoints,
  hasNavAndPagination,
  autoplay
}: SliderMultiItemsProps) => {
  return (
    <>
      <Swiper
        autoplay={autoplay === false || autoplay === undefined ? false : {
          delay: 1,
          disableOnInteraction: true,
          pauseOnMouseEnter: true
        }}
        slidesPerView={slidesPerView ? slidesPerView : 1.5}
        spaceBetween={15}
        centeredSlides
        breakpoints={{
          ...breakpoints,
          330: {
            spaceBetween: 20,
          },
        }}
        freeMode={autoplay === false ? false : true}
        speed={autoplay ? 30000 : undefined}
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
        modules={[Pagination, Navigation, Autoplay, FreeMode]}
        className="w-full h-fit mySwiper slider-multi-items"
      >
        {items?.map((item, idx) => (
          <SwiperSlide key={idx + 1} className="">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination bullets and button */}
      {hasNavAndPagination === false ? null : (
        <div className="relative z-20 bottom-[-2rem] w-11/12 mx-auto flex items-center justify-center">
          <div className="inline-flex items-center justify-between w-full gap-5">
            {/* Prev Button */}
            <div className="grid w-12 h-12 rounded-full slider-multi-items-prev bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
              <FaChevronLeft className="text-white" />
            </div>
            <div className="absolute left-10 slider-multi-items-pagination w-full hidden min-[250px]:block"></div>
            {/* Next button */}
            <div className="grid w-12 h-12 rounded-full slider-multi-items-next bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
              <FaChevronRight className="text-white" />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default SliderMultiItems;
