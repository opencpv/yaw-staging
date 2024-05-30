"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

type Props = {};

let tempPromos = [
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid officia a voluptatum dolores obcaecati eos suscipit culpa possimus fugiat blanditiis.",
    image: "/assets/images/dashboard/person-holding-house.jpeg",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid officia a voluptatum dolores obcaecati eos suscipit. ",
    image: "/assets/images/dashboard/lady-stirring-at-phone.jpg",
  },
  {
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid officia a voluptatum dolores obcaecati eos suscipit. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid officia a voluptatum dolores obcaecati eos suscipit.",
    image: "/assets/images/dashboard/feeling-refreshed.jpg",
  },
];

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
        autoplay={{ delay: 6000 }}
        slidesPerView={1}
        spaceBetween={20}
        className="slider-promotions h-full w-full"
        modules={[Navigation, Pagination, EffectFade, Autoplay]}
        fadeEffect={{ crossFade: true }}
        effect="fade"
        pagination={{
          clickable: true,
          el: ".slider-promotions-pagination",
        }}
        cssMode
        ref={sliderRef}
      >
        {tempPromos.map((item) => (
          <SwiperSlide key={item.image}>
            <div className="grid-cols-7 justify-between gap-10 sm:grid">
              <div className="col-span-3 space-y-3">
                <h2 className="uppercase text-primary">Promotions</h2>
                <p className="text-shade-200">{item.description}</p>
                <div className="hidden flex-wrap items-center gap-5 pt-4 sm:flex">
                  <NavButton placement="left" onClick={handlePrev} />
                  <NavButton placement="right" onClick={handleNext} />
                </div>
              </div>
              <div className="relative col-span-4 aspect-video w-full max-sm:mt-5 ">
                <Image
                  src={item.image}
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
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center sm:mt-10">
        <div className="slider-promotions-pagination" />
      </div>
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
