"use client";
import "swiper/css";
import "swiper/css/pagination";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {};

const PromotionSlider = (props: Props) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className="relative">
      <Swiper
        slidesPerView={1}
        spaceBetween={20}
        className="slider-promotions h-full w-full"
        modules={[Navigation, Pagination]}
        pagination={{
          clickable: true,
        }}
        ref={sliderRef}
      >
        {[1, 2, 3]?.map((item) => (
          <SwiperSlide key={item}>
            <div className="grid-cols-7 justify-between gap-10 sm:grid">
              <div className="col-span-3 space-y-3">
                <h2 className="uppercase text-primary">Promotions</h2>
                <p className="text-shade-200">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Aliquid officia a voluptatum dolores obcaecati eos suscipit
                  culpa possimus fugiat blanditiis.
                </p>
                <div className="hidden flex-wrap items-center gap-5 pt-4 sm:flex">
                  <NavButton placement="left" onClick={handlePrev} />
                  <NavButton placement="right" onClick={handleNext} />
                </div>
              </div>
              <div className="relative col-span-4 aspect-video w-full max-sm:mt-5 ">
                <Image
                  src={"/assets/images/dashboard/person-holding-house.jpeg"}
                  alt={"MTN"}
                  fill
                  className="rounded-2xl object-cover"
                />
              </div>
              <div className="flex flex-wrap items-center justify-between gap-5 pt-4 sm:hidden">
                <NavButton placement="left" onClick={handlePrev} />
                <NavButton placement="right" onClick={handleNext} />
              </div>
            </div>
            {/* <div className="promotions-pagination relative top-20 flex justify-center" /> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default PromotionSlider;

const NavButton = ({
  placement,
  onClick,
}: {
  placement: "left" | "right";
  onClick: () => void;
}) => {
  return (
    <button
      className="grid size-10 place-items-center rounded-lg border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white sm:h-14 sm:w-20"
      onClick={onClick}
    >
      {placement === "left" ? (
        <FaChevronLeft size={15} />
      ) : (
        <FaChevronRight size={15} />
      )}
    </button>
  );
};
