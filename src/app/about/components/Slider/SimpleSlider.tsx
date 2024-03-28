"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image, { StaticImageData } from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { MdChevronRight, MdChevronLeft } from "react-icons/md";
import { useCallback, useRef } from "react";
import { EffectCoverflow, Navigation } from "swiper/modules";
import { styled } from "@stitches/react";
import MobileVersion from "./MobileVersion";
import DesktopVersion from "./DesktopVersion";

const SlideItem = ({ image }: { image: StaticImageData }) => (
  <div className="relative aspect-[679/527]  md:max-w-[679px] lg:mx-10 lg:aspect-[772/599] lg:w-[772px] lg:max-w-[772px] ">
    <Image src={image} alt="slide image" fill className="rounded-2xl" />
  </div>
);
const SimpleSlider = ({ data }: { data: any }) => {
  console.log(data);

  const { images } = useAssets();
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div
      className="w-full bg-[#333] px-5 xs:px-10 lg:px-0"
      id="q5y40WLNHa7Htg=="
    >
      <div className="flex lg:justify-center">
        <h2 className="my-8 text-center font-bold text-white lg:mt-20 lg:text-4xl">
          Lorem ipsum dolor
        </h2>
      </div>
      <div className="flex lg:justify-center">
        <p className="mb-8 max-w-5xl text-sm font-semibold text-white md:mb-20 lg:mb-24 lg:text-center">
          {data.title}
        </p>
      </div>
      <MobileVersion />
      <DesktopVersion />
    </div>
  );
};

export default SimpleSlider;
