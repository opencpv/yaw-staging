"use client";
import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Grid, FreeMode } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import "@/styles/custom-swiper.css";
import "swiper/css/bundle";
import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/free-mode";

const SliderGrid = ({ items }: SliderGridProps) => {
  const [shouldRefresh, setShouldRefresh] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 900) {
        setShouldRefresh(true);
      } else if (shouldRefresh && window.innerWidth >= 900) {
        window.location.reload();
        setShouldRefresh(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [shouldRefresh]);

  return (
    <div className="mb-10 h-full w-full">
      <Swiper
        slidesPerView={1}
        // centeredSlides
        grid={{
          fill: "row",
          rows: 1,
        }}
        spaceBetween={20}
        cssMode
        freeMode
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
        modules={[Grid, Pagination, Navigation, FreeMode]}
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
        }}
        observer
        observeParents
        observeSlideChildren
        className="slider-grid h-full w-full"
      >
        {/* Mapping through Featured listings from database */}
        {items?.map((item, idx) => (
          <SwiperSlide key={idx + 1} className="pb-5 max-[460px]:px-1.5">
            {item}
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination bullets and button */}
      <div className="relative top-10 z-20 mx-auto -mt-9 flex w-11/12 items-center justify-center 2xl:w-9/12">
        {/* Prev Button */}
        <div className="inline-flex w-full items-center justify-between gap-5">
          <div className="listing-grid-prev grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full bg-accent-50 md:h-16 md:w-16">
            <FaChevronLeft className="text-white" />
          </div>
          <div className="slider-grid-pagination absolute left-20 hidden w-full min-[250px]:block"></div>
          {/* Next button */}
          <div className="listing-grid-next grid h-12 w-12 shrink-0 cursor-pointer place-items-center rounded-full bg-accent-50 md:h-16 md:w-16">
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SliderGrid;
