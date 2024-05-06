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
import { cn } from "@/lib/utils";

const SliderWide = ({
  images,
  className,
  navigation,
  pagination,
  autoplay,
  overlay = true,
  onSlideChange,
  onClick,
  loop,
}: SliderWideProps) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const lastIndex = images.lastIndexOf(images[images.length - 1]);

  return (
    <div className={`relative aspect-video w-full sm:h-80 ${className}`}>
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
        loop={loop}
        modules={[Navigation, Pagination, Autoplay]}
        className={`slider-wide aspect-video w-full rounded-3xl ${className}`}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
          onSlideChange && onSlideChange(swiper);
        }}
      >
        {images.map((image, idx) => (
          <SwiperSlide key={idx + 1}>
            {image.href ? (
              <Link href={`${image.href}`}>
                <div className="relative h-full w-full">
                  <div
                    className={cn(
                      "absolute inset-0 z-10 size-full bg-gradient-to-b from-[#3C3C3C]/60 to-black/20",
                      {
                        hidden: !overlay,
                      },
                    )}
                  ></div>
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
              <div className="relative h-full w-full" onClick={onClick}>
                <div
                  className={cn(
                    "absolute inset-0 z-10 size-full bg-gradient-to-b from-[#3C3C3C]/60 to-black/20",
                    {
                      hidden: !overlay,
                    },
                  )}
                ></div>
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
          className={`slider-wide-prev-btn absolute bottom-[40%] left-[5%] z-20 flex h-12 w-12 shrink-0 cursor-default items-center justify-center rounded-full bg-white ${
            activeIndex === 0 && "hidden"
          }`}
          style={{ opacity: navigation ? "1" : "0" }}
        >
          <MdChevronLeft className="text-lg text-neutral-700" />
        </div>
        <div
          className={`slider-wide-next-btn absolute bottom-[40%] right-[5%] z-20 flex h-12 w-12 shrink-0 cursor-default items-center justify-center rounded-full bg-white ${
            activeIndex === lastIndex && "hidden"
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
