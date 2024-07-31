"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/styles/custom-swiper.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import Link from "next/link";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { cn } from "@/lib/utils";
import { SLIDER_AUTOPLAY_DELAY } from "@/constants";
import { SliderWideProps } from "./sliders";
import SliderNav from "./SliderNav";

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
  classNames,
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
          }
        }
        autoplay={
          autoplay && {
            delay: SLIDER_AUTOPLAY_DELAY,
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
                      "absolute inset-0 z-10 size-full rounded-[inherit] bg-gradient-to-b from-[#3C3C3C]/60 to-black/20",
                      {
                        hidden: !overlay,
                      },
                      classNames?.overlay,
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
      {/* Navigation buttons */}
      <SliderNav
        position="left"
        className={`slider-wide-prev-btn`}
        hidden={activeIndex === 0 || !navigation}
      />
      <SliderNav
        position="right"
        className={`slider-wide-next-btn`}
        hidden={activeIndex === lastIndex || !navigation}
      />
    </div>
  );
};

export default SliderWide;
