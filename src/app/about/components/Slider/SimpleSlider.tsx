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
  <div className="relative lg:mx-10  lg:w-[772px] lg:max-w-[772px] md:max-w-[679px] aspect-[679/527] lg:aspect-[772/599] ">
    <Image src={image} alt="slide image" fill className="rounded-2xl" />
  </div>
);

const SimpleSlider = () => {
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
    <div className="w-full lg:px-0 px-5 xs:px-10 md:mb-16 bg-[#333]">
      <div className="flex lg:justify-center">
        <p className="max-w-5xl mt-10 mb-8 font-semibold text-white lg:mt-40 lg:text-center md:mb-20 lg:mb-24">
          Lorem ipsum dolor sit amet consectetur. Sit consequat a elit
          scelerisque felis fames. In fames feugiat est risus in. Elit vulputate
          viverra duis nunc nulla nulla. Facilisi suspendisse libero praesent
          sed diam nulla sed non in. Id commodo
        </p>
      </div>
      <MobileVersion />
      <DesktopVersion />
    </div>
  );
};

export default SimpleSlider;
