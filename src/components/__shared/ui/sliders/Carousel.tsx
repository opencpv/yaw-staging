"use client";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/custom-swiper.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { createUUID } from "@/lib/utils/stringManipulation";

const Carousel = (props: CarouselProps) => {
  return (
    <>
      <div className={`relative cursor-default rounded-2xl`}>
        <Swiper
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          modules={[Navigation]}
          onActiveIndexChange={(slide) =>
            props.setActiveIndex(slide.activeIndex)
          }
          className={`property-carousel relative aspect-square h-[26rem] w-full max-w-4xl rounded-2xl shadow-sm xl:h-[28rem]`}
        >
          {props.images.map((image) => (
            <SwiperSlide key={createUUID()}>
              <div className="relative mx-auto aspect-square h-full w-full">
                <Image
                  src={image}
                  alt={"#"} // fix
                  fill
                  className="aspect-square brightness-[0.8]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination bullets and button */}
        <button className="custom-l-prev absolute bottom-40 left-[5%] z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white text-white hover:bg-shade-50 hover:text-shade-300 max-lg:bg-white max-lg:text-shade-300">
          <MdChevronLeft className="text-xl" />
        </button>
        <div className="custom-l-pagination bottom-40 w-full space-x-3 text-center"></div>
        <button className="custom-l-next absolute bottom-40 right-[5%] z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white text-white hover:bg-shade-50 hover:text-shade-300 max-lg:bg-white max-lg:text-shade-300">
          <MdChevronRight className="text-xl" />
        </button>
      </div>
    </>
  );
};

export default Carousel;
