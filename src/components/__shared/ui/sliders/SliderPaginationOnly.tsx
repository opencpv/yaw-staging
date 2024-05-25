"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";

import { Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/styles/custom-swiper.css";
import Link from "next/link";
import { createUUID } from "@/lib/utils/stringManipulation";

const SliderPaginationOnly = ({
  images,
  className,
  disabledOnInteraction,
}: SliderPaginationOnlyProps) => {
  return (
    <div className={`relative h-80 w-72 ${className}`}>
      <Swiper
        autoplay={{
          delay: 6000,
          disableOnInteraction: disabledOnInteraction
            ? disabledOnInteraction
            : false,
          waitForTransition: false,
        }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`slider-pagination-only h-80 w-72 rounded-lg ${className}`}
        key={createUUID()}
      >
        {images?.map((image, idx) => (
          <>
            {image.href ? (
              <SwiperSlide key={idx + 1} title={image.name}>
                <Link
                  href={image.href}
                  className="relative block h-full w-full"
                >
                  <Image
                    src={image.src}
                    alt={image.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Link>
              </SwiperSlide>
            ) : (
              <SwiperSlide key={idx + 1}>
                <div
                  className="relative h-full w-full before:absolute before:bottom-0 before:left-0 before:z-10 before:h-10 before:w-full before:rounded-b-lg before:bg-neutral-600/30"
                  title={image.name}
                >
                  <Image
                    src={image.src}
                    alt={image.name}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </SwiperSlide>
            )}
          </>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderPaginationOnly;
