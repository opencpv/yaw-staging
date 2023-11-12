"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";

const VerticalSlider = () => {
  const { images } = useAssets();
  return (
    <div className="relative flex flex-col items-center w-full xl:block">
      <Swiper
        direction={"vertical"}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className={`mySwiper vertical-slider flex-[2] order-2 relative rounded-[3rem] w-full h-full bg-neutral-700 text-white`}
      >
        {/* Promotee info from database */}
        {/* <SwiperSlide>
          <div className="flex">
            <div className="relative top-10 xl:top-[-27rem] z-10 w-60 h-40 min-[480px]:w-[24rem] xl:w-[34rem] min-[480px]:h-80 xl:-left-60">
              <Image
                src={images.niceHome}
                alt=""
                fill
                style={{ objectFit: "cover" }}
                className="rounded-[3rem]"
              />
            </div>
            <div className="w-full max-w-2xl py-20 pl-10 pr-24 space-y-5 xl:ml-auto">
              <h2 className="text-2xl font-[700]">
                Lorem ipsum dolor, sit amet consectetur. Onarne.
              </h2>
              <p className="text-sm">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
                fugit, reiciendis voluptatum doloremque, accusantium aperiam
                magnam at veniam corrupti iusto eaque quam odio animi sit
                dolores quod molestias inventore beatae?
              </p>
            </div>
          </div>
        </SwiperSlide> */}
        <SwiperSlide>
          <div className="w-full max-w-2xl py-20 pl-10 pr-24 space-y-5 xl:ml-auto">
            <h2 className="text-2xl font-[700]">
              Lorem ipsum dolor, sit amet consectetur. Onarne
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              fugit, reiciendis voluptatum doloremque, accusantium aperiam
              magnam at veniam corrupti iusto eaque quam odio animi sit dolores
              quod molestias inventore beatae?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-2xl py-20 pl-10 pr-24 space-y-5 xl:ml-auto">
            <h2 className="text-2xl font-[700]">
              Lorem ipsum dolor, sit amet consectetur. Onarne
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              fugit, reiciendis voluptatum doloremque, accusantium aperiam
              magnam at veniam corrupti iusto eaque quam odio animi sit dolores
              quod molestias inventore beatae?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-2xl py-20 pl-10 pr-24 space-y-5 xl:ml-auto">
            <h2 className="text-2xl font-[700]">
              Lorem ipsum dolor, sit amet consectetur. Onarne
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              fugit, reiciendis voluptatum doloremque, accusantium aperiam
              magnam at veniam corrupti iusto eaque quam odio animi sit dolores
              quod molestias inventore beatae?
            </p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="w-full max-w-2xl py-20 pl-10 pr-24 space-y-5 xl:ml-auto">
            <h2 className="text-2xl font-[700]">
              Lorem ipsum dolor, sit amet consectetur. Onarne
            </h2>
            <p className="text-sm">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab
              fugit, reiciendis voluptatum doloremque, accusantium aperiam
              magnam at veniam corrupti iusto eaque quam odio animi sit dolores
              quod molestias inventore beatae?
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
      <div className="relative top-10 xl:top-[-27rem] z-10 w-60 h-40 min-[480px]:w-[24rem] xl:w-[34rem] min-[480px]:h-80 xl:-left-60">
        <Image
          src={images.niceHome}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="rounded-[3rem]"
        />
      </div>
    </div>
  );
};

export default VerticalSlider;
