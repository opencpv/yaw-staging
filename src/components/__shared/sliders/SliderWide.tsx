"use client";
import React, { useState } from "react";
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

const SliderWide = ({
  images,
  className,
  navigation,
  pagination,
  autoplay,
  onSlideChange,
  onClick,
}: SliderWideProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const lastIndex = images.lastIndexOf(images[images.length - 1]);

  return (
    <div className={`relative w-full sm:h-80 ${className}`}>
      <Swiper
        navigation={
          navigation && {
            nextEl: ".slider-wide-next-btn",
            prevEl: ".slider-wide-prev-btn",
          }
        }
        pagination={
          pagination && {
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }
        }
        autoplay={
          autoplay && {
            delay: 6000,
          }
        }
        modules={[Navigation, Pagination, Autoplay]}
        className={`w-full rounded-3xl h-60 slider-wide sm:h-80 ${className}`}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          onSlideChange && onSlideChange(swiper);
        }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx + 1}>
            {image.href ? (
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
            ) : (
              <div className="relative w-full h-full" onClick={onClick}>
                <Image
                  src={image.src}
                  alt={image.name}
                  className=""
                  fill
                  style={{ objectFit: "cover" }}
                />
              </div>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="">
        {/* Navigation buttons */}
        <div
          className={`slider-wide-prev-btn absolute left-[5%] z-20 flex h-12 w-12 shrink-0 cursor-default items-center justify-center rounded-full bottom-[40%] ${
            activeIndex === 0 ? "bg-white/30" : "bg-white"
          }`}
          style={{ opacity: navigation ? "1" : "0" }}
        >
          <MdChevronLeft className="text-lg text-neutral-700" />
        </div>
        {/* <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div> */}
        <div
          className={`slider-wide-next-btn absolute right-[5%] z-20 flex h-12 w-12 shrink-0 cursor-default items-center justify-center rounded-full bg-white bottom-[40%] ${
            activeIndex === lastIndex
              ? "bg-white/30"
              : "bg-white"
          }`}
          style={{ opacity: navigation ? "1" : "0" }}
        >
          <MdChevronRight className="text-lg text-neutral-700" />
        </div>
      </div>
    </div>
  );
};

export default SliderWide;
