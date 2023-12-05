"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Link from "next/link";

import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/styles/custom-swiper.css";

const SliderWide = ({ images, className, navigation, autoplay }: SliderWideProps) => {
  return (
    <div className={`relative w-full sm:h-80 ${className}`}>
      <Swiper
        navigation={
          navigation && {
            nextEl: ".slider-wide-next-btn",
            prevEl: ".slider-wide-prev-btn",
          }
        }
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        autoplay={autoplay && {
          delay: 6000,
        }}
        modules={[Navigation, Pagination, Autoplay]}
        className={`w-full rounded-lg h-60 slider-wide sm:h-80 ${className}`}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx + 1}>
            <Link href={`${image.href}`}>
              <div className="relative w-full h-full">
                <Image
                  src={image.src}
                  alt={image.name}
                  className=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="">
        {/* Navigation buttons */}
        <div className="slider-wide-prev-btn absolute bottom-24 left-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white sm:bottom-32" style={{opacity: navigation ? "1" : "0"}}>
          <MdChevronLeft className="text-lg text-neutral-700" />
        </div>
        {/* <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div> */}
        <div className="slider-wide-next-btn absolute bottom-24 right-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white sm:bottom-32" style={{opacity: navigation ? "1" : "0"}}>
          <MdChevronRight className="text-lg text-neutral-700" />
        </div>
      </div>
    </div>
  );
};

export default SliderWide;
