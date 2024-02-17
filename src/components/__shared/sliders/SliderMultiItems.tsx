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
  autoplay,
  swiperSlideClassName,
}: SliderMultiItemsProps) => {
  return (
    <>
      {/* lg breakpoint and above */}
      <div className="hidden lg:block">
        <Swiper
          autoplay={
            autoplay === false || autoplay === undefined
              ? false
              : {
                  delay: 100,
                  disableOnInteraction: true,
                  pauseOnMouseEnter: true,
                }
          }
          slidesPerView={slidesPerView ? slidesPerView : 1.5}
          spaceBetween={15}
          centeredSlides
          breakpoints={{
            ...breakpoints,
            330: {
              spaceBetween: 20,
            },
          }}
          freeMode={{
            enabled:
              autoplay === false || autoplay === undefined ? false : true,
            // momentumRatio: 0.4,
            // momentumVelocityRatio: 0.4,
          }}
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
          className="mySwiper slider-multi-items h-fit w-full"
        >
          {items?.map((item, idx) => (
            <SwiperSlide key={idx + 1} className={swiperSlideClassName}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination bullets and button */}
        {hasNavAndPagination === false ? null : (
          <div className="relative bottom-[-2rem] z-20 mx-auto flex w-11/12 items-center justify-center">
            <div className="inline-flex w-full items-center justify-between gap-5">
              {/* Prev Button */}
              <div className="slider-multi-items-prev grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-50 md:h-16 md:w-16">
                <FaChevronLeft className="text-white" />
              </div>
              <div className="slider-multi-items-pagination absolute left-10 hidden w-full min-[250px]:block"></div>
              {/* Next button */}
              <div className="slider-multi-items-next grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-50 md:h-16 md:w-16">
                <FaChevronRight className="text-white" />
              </div>
            </div>
          </div>
        )}
      </div>

      {/* lg breakpoint and below */}
      <div className="block lg:hidden">
        <Swiper
          cssMode
          slidesPerView={slidesPerView ? slidesPerView : 1.5}
          spaceBetween={15}
          centeredSlides
          breakpoints={{
            ...breakpoints,
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
          className="mySwiper slider-multi-items h-fit w-full"
        >
          {items?.map((item, idx) => (
            <SwiperSlide key={idx + 1} className={swiperSlideClassName}>
              {item}
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Pagination bullets and button */}
        {hasNavAndPagination === false ? null : (
          <div className="relative bottom-[-2rem] z-20 mx-auto flex w-11/12 items-center justify-center">
            <div className="inline-flex w-full items-center justify-between gap-5">
              {/* Prev Button */}
              <div className="slider-multi-items-prev grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-50 md:h-16 md:w-16">
                <FaChevronLeft className="text-white" />
              </div>
              <div className="slider-multi-items-pagination absolute left-10 hidden w-full min-[250px]:block"></div>
              {/* Next button */}
              <div className="slider-multi-items-next grid h-12 w-12 shrink-0 place-items-center rounded-full bg-accent-50 md:h-16 md:w-16">
                <FaChevronRight className="text-white" />
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SliderMultiItems;
