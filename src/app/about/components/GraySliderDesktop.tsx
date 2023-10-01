"use client";
import React, { useCallback, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";
import { styled } from "@stitches/react";
import { MdOutlineImage, MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  Autoplay,
  EffectCoverflow,
  Navigation,
  Pagination,
} from "swiper/modules";
import "../styles/main.css";
import { openSans } from "@/app/styles/font";

const GraySliderDesktop = ({ data }: { data: any }) => {
  const sliderRef: any = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  const SlideButton = (onClick: () => void, direction: string) => {
    switch (direction) {
      case "right":
        return (
          <button
            onClick={onClick}
            className="w-10 h-10 md:h-[70px] md:w-[70px] bg-[#fff] rounded-full"
          >
            <MdChevronRight className="h-4 w-4 md:h-5 md:w-5" />
          </button>
        );
      case "left":
        return (
          <button
            onClick={onClick}
            className="w-10 h-10 md:h-[70px] md:w-[70px] bg-[#fff] rounded-full"
          ></button>
        );
    }
  };

  return (
    <>
      <Root className="hidden lg:block">
        <div className="  bg-[#333] lg:pb-12 md:pb-[107px] pb-[30px] mt-0 md:mt-[-200px] absolute -z-10    ">
          <p
            className={`lg:px-[338px] md:px-[30px] lg:pt-[224px] lg:pb-[97px] md:pt-[232px] md:pb-[60px] pb-8 pt-[30px] mx-auto text-center text-[#fff] ${openSans.className} font-semibold`}
          >
            Lorem ipsum dolor sit amet consectetur. Sit consequat a elit
            scelerisque felis fames. In fames feugiat est risus in. Elit
            vulputate viverra duis nunc nulla nulla. Facilisi suspendisse libero
            praesent sed diam nulla sed non in. Id commodo{" "}
          </p>
          <div className=" lg:pl-[26px] md:px-[77px] px-4 h-fit relative w-full">
            <Swiper
              ref={sliderRef}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={3}
              navigation={true}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 500,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Navigation]}
            >
              <SwiperSlide>
                <MdOutlineImage size={196} color="#9E9E9E" />
              </SwiperSlide>
              <SwiperSlide>
                <MdOutlineImage size={196} color="#9E9E9E" />
              </SwiperSlide>
              <SwiperSlide>
                <MdOutlineImage size={196} color="#9E9E9E" />
              </SwiperSlide>
            </Swiper>
            <div className="flex justify-between lg:px-[311px] ">
              <button
                onClick={handlePrev}
                className="w-10 h-10 md:h-[70px] md:w-[70px] bg-[#fff] rounded-full  flex items-center justify-center"
              >
                <MdChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="w-10 h-10 md:h-[70px] md:w-[70px] bg-[#fff] rounded-full flex items-center justify-center "
              >
                <MdChevronRight className="h-4 w-4 md:h-5 md:w-5" />
              </button>
            </div>
          </div>
        </div>
      </Root>
    </>
  );
};

export default GraySliderDesktop;

const Root = styled("div", {
  "& .big-slide .swiper, swiper-container": {
    display: "flex",
    flexDirection: "column",
    maxWidth: "1728px",
    gap: "5rem",
    "@media screen and (max-width: 760px)": {
      maxWidth: "1728px",
    },
  },
  "& .coverflow .swiper-wrapper": {
    alignItems: "center",
    maxHeight: "900px",
    maxWidth: "1728px",
  },
  "& .coverflow .swiper-slide": {
    maxWidth: "772px",
    maxHeight: "699px",
    width: "100%",
    height: "100%",
    backgroundColor: "#E9ECEF",
    boxShadow: "0px 50px 130px 0px rgba(0, 0, 0, 0.15)",
    borderRadius: "16px",
    minWidth: "357px",
    minHeight: "277px",
    aspectRatio: "772/600",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  "& .banner": {
    display: "flex",
    //marginTop: '8%',
    paddingInline: "5%",
    maxWidth: "1533px",
    maxHeight: "566px",
    aspectRatio: "1533/566",
    zIndex: "50",
    transform: "translate(0px, 21%)",
    boxShadow: "0px 1px 66px 7px rgba(0, 0, 0, 0.08)",
    background:
      " var(--faq-banner, linear-gradient(159deg, #21A19F 0%, rgba(30, 169, 166, 0.63) 100%))",
    "@media (max-width: 760px)": {
      transform: "unset",
    },
  },
  "& .green-gray": {
    width: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    // height: '1541px',
    // aspectRatio:"1728/1541",
  },

  ".coverflow .swiper-button-next": {
    backgroundImage: "url(/svgs/carousel-right-small.svg)",
    position: "absolute",
    width: "70px",
    height: "70px",
    aspectRatio: "70/70",
    bottom: "0px !important",
    top: "unset",
    right: "20%",
  },
  ".coverflow .swiper-button-prev": {
    position: "relative",
    backgroundImage: "url(/svgs/carousel-left-small.svg)",
    width: "70px",
    height: "70px",
    aspectRatio: "70/70",
    // top:"100%",
    bottom: "0px",
    left: "20%",
  },
  "& .coverflow .swiper-button-prev::after": {
    display: "none",
  },
  "& .coverflow .swiper-button-next::after": {
    display: "none",
  },
});
