"use client";
import React, { useState } from "react";
import style from "../components/ListingSlider.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import "./custom-swiper.css";

import { Pagination } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const AdCard = ({images, className, href}: AdCardInterface) => {
  const { icons } = useAssets();

  return (
    <div className={`relative w-80 cursor-default shadow-lg ${className}`}>
      <Swiper
        pagination={{
          clickable: true,
          //   el: ".custom-l-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        modules={[Pagination]}
        className={`relative w-full rounded-t-lg mySwiper listing-card h-52`}
      >
        {/* Mapping through Featured listings from database */}
        {images.map((image, idx) => (
          <SwiperSlide key={idx + 1}>
            <Link href={`${image.href}`}>
              <div className="relative w-full h-full">
                <Image
                  src={image.image}
                  alt={image.propertyType.toLowerCase()}
                  fill
                  className="brightness-[0.8]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Pagination bullets and button */}
        <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div>

      </Swiper>
    </div>
  );
};

export default AdCard;
