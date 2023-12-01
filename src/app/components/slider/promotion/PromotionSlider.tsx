"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@/components/__shared/Button";

let images = [
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
  "/assets/images/home/promotion-1.jpg",
];

const PromotionSlider = () => {
  return (
    <>
      <Swiper
        direction={"vertical"}
        allowTouchMove={false}
        pagination={{
          clickable: true,
          el: ".custom-pagination-ver",
        }}
        modules={[Pagination, Autoplay]}
        className={`mySwiper relative rounded-3xl w-full h-full`}
      >
        {/* Promotee info from database */}
        {images.map((image, idx) => (
          <SwiperSlide key={idx + 1}>
            <div className="relative w-full h-full">
              <Image
                src={image}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="brightness-[0.60]"
              />
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute bottom-0 left-0 z-10 space-y-8">
          <div className="translate-x-[3%] space-y-3 text-sm">
            <h1 className="text-accent-100 font-[700] text-3xl">Promotion</h1>
            <p className="text-white">Lorem ipsum</p>
            <Button className="flex items-center w-40 gap-3 text-white capitalize border-none rounded-md bg-accent-200">
              View item <IoIosArrowRoundForward />
            </Button>
          </div>
          <div className="relative flex items-center justify-center p-5 w-full min-h-[4rem] bg-primary-500/25 xs:p-10">
            <p className="text-white text-sm font-[600] w-full leading-relaxed sm:w-10/12">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Exercitationem nulla possimus, eum amet minima dicta ducimus
              facilis? Libero, deserunt quam molestias tempore, assumenda modi
              mollitia pariatur et quas, exercitationem tenetur?
            </p>
            <div className="ml-5 custom-pagination-ver sm:ml-12"></div>
          </div>
        </div>
      </Swiper>
    </>
  );
};

export default PromotionSlider;
