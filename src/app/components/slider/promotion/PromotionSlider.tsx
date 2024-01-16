"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "./styles.css";

import Image from "next/image";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import Button from "@/components/__shared/ui/button/Button";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";

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
        className={`mySwiper relative rounded-3xl w-full h-[29rem]`}
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
            {/* Promotion label */}
            <div className="absolute z-50 top-32 left-3 space-y-20 min-[300px]:left-10">
              <div className="space-y-3 text-sm ">
                <h1 className="text-accent-100 font-[700] text-3xl">
                  Promotion
                </h1>
                <p className="text-white">Lorem ipsum</p>
                <Link href="" className="inline-block">
                  <Button className="flex items-center gap-3 text-white capitalize border-none rounded-md min-w-fit bg-accent-200 hover:bg-neutral-300 hover:text-neutral-600">
                    View item <IoIosArrowRoundForward />
                  </Button>
                </Link>
              </div>
              {/* Promotion description */}
                <p className="relative z-30 text-white text-sm font-[600] leading-relaxed w-10/12 line-clamp-5 lg:ml-10">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Exercitationem nulla possimus, eum amet minima dicta ducimus
                  facilis? Libero, deserunt quam molestias tempore, assumenda
                  modi mollitia pariatur et quas, exercitationem tenetur?
                </p>
            </div>
          </SwiperSlide>
        ))}
        <div className="absolute z-10 bottom-0 left-0 p-5 w-full bg-primary-500 bg-opacity-25 min-h-[10rem] xs:p-10">
          <div className="absolute mr-3 -mt-10 custom-pagination-ver md:mr-20"></div>
        </div>
      </Swiper>
    </>
  );
};

export default PromotionSlider;
