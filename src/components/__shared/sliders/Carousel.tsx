"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "@/styles/custom-swiper.css";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { usePropertyCarouselStore } from "@/store/properties/usePropertiesStore";

const Carousel = (props: CarouselProps) => {
  const { setActiveIndex } = usePropertyCarouselStore();

  return (
    <>
      <div className={`relative cursor-default rounded-2xl`}>
        <Swiper
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          modules={[Navigation]}
          onActiveIndexChange={(slide) => setActiveIndex(slide.activeIndex)}
          className={`relative w-8/12 rounded-2xl property-carousel shadow-sm h-[26rem] xl:h-[28rem]`}
        >
          {/* Mapping through Featured listings from database */}
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full mx-auto">
                <Image
                  src={image.src}
                  alt={image.label as string}
                  fill
                  className="brightness-[0.8]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination bullets and button */}
        <div className="custom-l-prev absolute bottom-40 left-[5%] z-10 flex h-12 w-12 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronLeft className="text-xl text-neutral-700" />
        </div>
        <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div>
        <div className="custom-l-next absolute bottom-40 right-[5%] z-10 flex h-12 w-12 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronRight className="text-xl text-neutral-700" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
