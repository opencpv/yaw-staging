"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const PropertyDetailsSlider = (props: ListingInterface) => {
  return (
    <div className={`relative w-full h-full cursor-default`}>
      <Swiper
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          nextEl: ".custom-l-next",
          prevEl: ".custom-l-prev",
        }}
        modules={[Navigation]}
        className={`relative w-full rounded-2xl mySwiper h-full`}
      >
        {/* Mapping through listing details images from database */}
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href={`${props.href}`}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={props.propertyType.toLowerCase()}
                  fill
                  className="brightness-[0.8]"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}
        {/* Pagination bullets and button */}
        <div className="custom-l-prev absolute bottom-32 left-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronLeft className="text-lg text-neutral-700" />
        </div>
        <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div>
        <div className="custom-l-next absolute bottom-32 right-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronRight className="text-lg text-neutral-700" />
        </div>
      </Swiper>
    </div>
  );
};

export default PropertyDetailsSlider;
