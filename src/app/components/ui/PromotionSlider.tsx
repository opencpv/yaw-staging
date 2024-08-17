"use client";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/autoplay";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide, useSwiper, useSwiperSlide } from "swiper/react";
import Image from "next/image";
import { Navigation, Pagination, EffectFade, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/lib/utils/sanity/utils";
import Link from "next/link";
import { IFRAME_ALLOW, SLIDER_AUTOPLAY_DELAY } from "@/constants";

const PromotionSlider = ({ promotions = [] }: { promotions: any }) => {
  const sliderRef = useRef<any>(null);

  const handlePrev = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (sliderRef.current) sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <div className={cn("relative")}>
      <Swiper
        autoplay={{ delay: SLIDER_AUTOPLAY_DELAY, disableOnInteraction: true }}
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
        onClick={(swiper) => swiper.autoplay.pause()}
        onNavigationNext={(swiper) => swiper.autoplay.pause()}
        onNavigationPrev={(swiper) => swiper.autoplay.pause()}
        ref={sliderRef}
      >
        {promotions.map((promotion: any) => (
          <SwiperSlide key={promotion._key}>
            <div className="grid-cols-7 justify-between gap-10 sm:grid">
              <div className="col-span-3 space-y-3">
                <h2 className="uppercase text-primary">{promotion.title}</h2>
                <p className="line-clamp-4 text-shade-200">
                  {promotion.description}
                </p>
                {promotions.length > 1 && (
                  <div className="hidden flex-wrap items-center gap-5 pt-4 sm:flex">
                    <NavButton placement="left" onClick={handlePrev} />
                    <NavButton placement="right" onClick={handleNext} />
                  </div>
                )}
              </div>
              <div className="relative col-span-4 aspect-video w-full max-sm:mt-5 ">
                {promotion.fileType === "image" ? (
                  <Link href="/">
                    <Image
                      src={urlForImage(promotion?.image)?.url() as string}
                      alt={"MTN"}
                      fill
                      className="rounded-2xl object-cover"
                    />
                  </Link>
                ) : promotion.fileType === "video" ? (
                  <VideoMedia promotion={promotion} />
                ) : null}
              </div>
              {promotions.length > 1 && (
                <div className="flex flex-wrap items-center justify-between gap-5 pt-4 sm:hidden">
                  <NavButton placement="left" onClick={handlePrev} />
                  <NavButton placement="right" onClick={handleNext} />
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="flex items-center justify-center sm:mt-16">
        <div className="slider-promotions-pagination" />
      </div>
    </div>
  );
};

const NavButton = ({
  placement,
  onClick,
}: {
  placement: "left" | "right";
  onClick: () => void;
}) => {
  useSwiperSlide();
  const { isBeginning, isEnd } = useSwiper();

  return (
    <button
      className={cn(
        "grid size-10 place-items-center rounded-lg border-2 border-primary bg-white text-primary hover:bg-primary hover:text-white sm:h-14 sm:w-20",
        {
          "cursor-default opacity-50 hover:bg-white hover:text-primary":
            (isBeginning && placement === "left") ||
            (isEnd && placement === "right"),
        },
      )}
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

const VideoMedia = ({ promotion }: { promotion: any }) => {
  const { autoplay } = useSwiper();

  return (
    <iframe
      onMouseOver={() => autoplay.pause()}
      src={
        promotion.url // rel=0 is important to suggest only RentRightGH related videos
      }
      title={promotion?.title || ""}
      allow={IFRAME_ALLOW}
      className="absolute inset-0 h-full w-full rounded-2xl"
    />
  );
};

export default PromotionSlider;
