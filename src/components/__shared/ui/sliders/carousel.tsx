"use client";
import "swiper/css";
import "swiper/css/navigation";
import "@/styles/custom-swiper.css";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { createUUID } from "@/lib/utils/stringManipulation";
import { cn } from "@/lib/utils";

import { CarouselProps } from "./types";

const Carousel = (props: CarouselProps) => {
  return (
    <>
      <div className={`relative cursor-default rounded-2xl`}>
        <Swiper
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          modules={[Navigation]}
          onActiveIndexChange={(slide) =>
            props.setActiveIndex(slide.activeIndex)
          }
          className={`property-carousel relative w-full max-w-4xl rounded-2xl shadow-sm`}
        >
          {props.images.map((image) => (
            <SwiperSlide key={createUUID()}>
              <div className="relative mx-auto aspect-square h-[40rem] max-h-[40rem] w-full rounded-lg">
                <Image
                  src={image}
                  alt={"#"} // Fixme:
                  fill
                  className="rounded-lg brightness-[0.8]"
                  style={{ objectFit: props.isCover ? "cover" : "contain" }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Pagination bullets and button */}
        <NavButton position="left" />
        <div className="custom-l-pagination bottom-40 w-full space-x-3 text-center"></div>
        <NavButton position="right" />
      </div>
    </>
  );
};

const NavButton = ({ position }: { position: "left" | "right" }) => {
  return (
    <button
      className={cn(
        "absolute bottom-60 z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full border-2 border-shade text-shade hover:bg-shade-50 hover:text-shade-300 max-lg:bg-shade max-lg:text-shade-300",
        {
          "custom-l-prev left-[5%]": position === "left",
          "custom-l-next right-[5%]": position === "right",
        },
      )}
    >
      {position === "right" ? (
        <MdChevronRight className="text-xl" />
      ) : (
        <MdChevronLeft className="text-xl" />
      )}
    </button>
  );
};

export default Carousel;
