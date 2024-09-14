"use client";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/custom-swiper.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { createUUID } from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";

import { CarouselProps } from "./types";
import SliderNav from "./slider-nav";

const Carousel = (props: CarouselProps) => {
  return (
    <>
      <div className="relative cursor-default rounded-2xl">
        <Swiper
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          modules={[Navigation]}
          onActiveIndexChange={(slide) =>
            props.setActiveIndex(slide.activeIndex)
          }
          className="carousel relative w-full max-w-4xl rounded-2xl shadow-sm"
        >
          {props.images.map((image) => (
            <SwiperSlide key={createUUID()}>
              <div className="relative mx-auto aspect-square h-[40rem] max-h-[40rem] w-full rounded-lg">
                <Image
                  src={image}
                  alt={"#"} // FIXME:
                  fill
                  className="rounded-lg brightness-[0.8]"
                  style={{ objectFit: props.isCover ? "cover" : "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
          {/* navigation buttons */}
          <NavButton position="left" />
          <NavButton position="right" />
        </Swiper>
      </div>
    </>
  );
};

const NavButton = ({ position }: { position: "left" | "right" }) => {
  return (
    <SliderNav
      className={cn(
        "border-2 border-shade text-shade hover:bg-shade-50 hover:text-shade-300 max-lg:text-shade-300 lg:bg-transparent",
        {
          "custom-l-prev": position === "left",
          "custom-l-next": position === "right",
        },
      )}
      position={position}
    ></SliderNav>
  );
};

export default Carousel;
