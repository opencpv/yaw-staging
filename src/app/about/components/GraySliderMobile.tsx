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
import { openSans } from "@/styles/font";

const GraySliderMobile = ({ data }: { data: any }) => {
  const sliderRef: any = useRef();

  const handlePrev = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slidePrev();
  }, []);

  const handleNext = useCallback(() => {
    if (!sliderRef.current) return;
    sliderRef.current.swiper.slideNext();
  }, []);

  return (
    <>
      <Root className="block lg:hidden">
        <div className="  absolute -z-10 mt-0 bg-[#333] pb-[30px] md:mt-[-200px] md:pb-[107px] lg:pb-12    ">
          <p
            className={`mx-auto pb-8 pt-[30px] text-center font-semibold text-[#fff] md:px-[30px] md:pb-[60px] md:pt-[232px] lg:px-[338px] lg:pb-[97px] lg:pt-[224px]`}
          >
            Lorem ipsum dolor sit amet consectetur. Sit consequat a elit
            scelerisque felis fames. In fames feugiat est risus in. Elit
            vulputate viverra duis nunc nulla nulla. Facilisi suspendisse libero
            praesent sed diam nulla sed non in. Id commodo{" "}
          </p>
          <div className=" relative h-fit w-full px-4 md:px-[77px] lg:pl-[26px]">
            <Swiper
              ref={sliderRef}
              effect={"coverflow"}
              grabCursor={true}
              centeredSlides={true}
              slidesPerView={1}
              coverflowEffect={{
                rotate: 0,
                stretch: 0,
                depth: 500,
                modifier: 1,
                slideShadows: true,
              }}
              modules={[EffectCoverflow, Navigation]}
              className="coverflow"
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
                className="flex h-10 w-10 items-center justify-center rounded-full  bg-[#fff] md:h-[70px] md:w-[70px]"
              >
                <MdChevronLeft className="h-4 w-4 md:h-5 md:w-5" />
              </button>
              <button
                onClick={handleNext}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-[#fff] md:h-[70px] md:w-[70px] "
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

export default GraySliderMobile;

const Root = styled("div", {
  "& .big-slide .swiper, swiper-container": {
    display: "flex",
    width: "`100%",
    gap: "5rem",
  },

  "& .coverflow .swiper-wrapper": {
    alignItems: "center",
    maxHeight: "900px",
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
