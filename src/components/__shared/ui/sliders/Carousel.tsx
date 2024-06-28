"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "@/styles/custom-swiper.css";

import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { carouselStore } from "@/store/properties/usePropertiesStore";
import { CarouselProps } from "./sliders";

const Carousel = (props: CarouselProps) => {
  const { setActiveIndex } = carouselStore();

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
          className={`property-carousel relative h-[26rem] w-full max-w-4xl rounded-2xl shadow-sm xl:h-[28rem]`}
        >
          {props.images.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative mx-auto h-full w-full rounded-lg ">
                <Image
                  src={image.src}
                  alt={image.label as string}
                  fill
                  className="rounded-lg brightness-[0.8]"
                  style={{ objectFit: props.isCover ? "cover" : "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination bullets and button */}
        <div className="custom-l-prev absolute bottom-40 left-[5%] z-10 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white">
          <MdChevronLeft className="text-xl text-neutral-700" />
        </div>
        <div className="custom-l-pagination bottom-40 w-full space-x-3 text-center"></div>
        <div className="custom-l-next absolute bottom-40 right-[5%] z-10 flex h-12 w-12 shrink-0 cursor-pointer items-center justify-center rounded-full bg-white">
          <MdChevronRight className="text-xl text-neutral-700" />
        </div>
      </div>
    </>
  );
};

export default Carousel;
