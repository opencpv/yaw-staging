"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {};

const PromotionSlider = (props: Props) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    console.log("prev");
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    console.log("next");
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        navigation={{
          nextEl: ".promotions-swiper-button-next",
          prevEl: ".promotions-swiper-button-prev",
        }}
        className="h-full w-full"
        modules={[Navigation]}
        ref={sliderRef}
      >
        {[1, 2, 3]?.map((item) => (
          <SwiperSlide key={item}>
            <div className="grid grid-cols-7 justify-between gap-10">
              <div className="col-span-3 space-y-3">
                <h2 className="uppercase text-primary">Promotions</h2>
                <p className="text-shade-200">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid officia a voluptatum dolores obcaecati eos suscipit
                  culpa possimus fugiat blanditiis.
                </p>
              </div>
              <div className="relative col-span-4 aspect-video w-full">
                <Image
                  src={"/assets/images/dashboard/person-holding-house.jpeg"}
                  alt={"MTN"}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="absolute left-0 top-32 z-10 flex flex-wrap items-center gap-5 pt-2">
        <button className="promotions-swiper-button-left grid h-14 w-20 place-items-center rounded-lg border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white">
          <FaChevronLeft size={15} onClick={handlePrev} />
        </button>
        <button className="promotions-swiper-button-right grid h-14 w-20 place-items-center rounded-lg border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white">
          <FaChevronRight size={15} onClick={handleNext} />
        </button>
      </div>
    </div>
  );
};

export default PromotionSlider;
