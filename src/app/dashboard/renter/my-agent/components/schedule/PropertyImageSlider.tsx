"use client";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "@/styles/custom-swiper.css";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation } from "swiper/modules";
import { cn } from "@/lib/utils";
import { createUUID } from "@/lib/utils/stringManipulation";
import SliderNav from "@/components/__shared/ui/sliders/SliderNav";

const PropertyImageSlider = ({
  images,
  title,
}: {
  images: string[];
  title: string;
}) => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const lastIndex = images.lastIndexOf(images[images.length - 1]);

  return (
    <div className={`relative aspect-square w-full max-w-2xl xxs:aspect-video`}>
      <Swiper
        navigation={{
          nextEl: ".schedule-image-slider-next-btn",
          prevEl: ".schedule-image-slider-prev-btn",
        }}
        modules={[Navigation]}
        className={`schedule-image-slider size-full rounded-xl`}
        onSlideChange={(swiper) => {
          setActiveIndex(swiper.activeIndex);
        }}
      >
        {images.map((image) => (
          <SwiperSlide key={createUUID()}>
            <div className="relative h-full w-full">
              <div
                className={cn(
                  "absolute inset-0 z-10 size-full bg-gradient-to-b from-[#3C3C3C]/60 to-black/20",
                )}
              ></div>
              <Image
                src={image}
                alt={title}
                className=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation buttons */}
      <SliderNav
        position="left"
        className={`schedule-image-slider-prev-btn cursor-pointer`}
        hidden={activeIndex === 0}
        size="sm"
      />
      <SliderNav
        position="right"
        className={`schedule-image-slider-next-btn cursor-pointer`}
        hidden={activeIndex === lastIndex}
        size="sm"
      />
    </div>
  );
};

export default PropertyImageSlider;
