"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review";
import Recommend from "./Recommend";
import { Progress } from "./Progress";
import { styled } from "@stitches/react";
import Rate from "./Rate";

import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";

function RatingsFormForm() {
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
  } = useRatingsModalStore();

  const [activeNumber, setActiveNumber] = useState(1);

  return (
    <Root className="flex flex-col gap-4 px-1 py-3 lg:px-4">
      <div className="flex flex-col gap-4">
        <p className="text-base font-bold text-[#373737] 2xl:text-[1.5625rem]">
          Write a review
        </p>

        <div className="flex  items-center gap-4">
          <div className="relative aspect-square w-full max-w-[48px] overflow-hidden rounded-full">
            <Image src={currentProperty?.images?.[0] ?? ""} fill alt="Image" />
          </div>
          <div className="flex items-center flex-wrap gap-1 xs:gap-4">
            <p className="text-base font-semibold md:text-[1.25rem]">
              {currentProperty?.bedrooms} Bedroom {currentProperty?.propertyType}
            </p>

            <span
              onClick={() => {
                setOpenRatingsForm(false);
                setOpenAllRatings(true);
              }}
              className="cursor-pointer border-b-[1px] border-primary bg-white lg:text-[1.25rem] text-primary"
            >
              ( {currentProperty?.ratingCount} reviews )
            </span>
          </div>
          
        </div>
      </div>

      <Swiper className="mt-8 w-full px-1 " spaceBetween={50}>
        <div className="mb-16 flex items-center gap-5 overflow-x-scroll pl-1">
          <Progress
            number={1}
            label="Rate"
            classes="sc1"
            activeNumber={activeNumber}
            setActiveIndex={setActiveNumber}
          />
          <Progress
            number={2}
            label="review"
            classes="sc2"
            activeNumber={activeNumber}
            setActiveIndex={setActiveNumber}
          />
          <Progress
            third
            number={3}
            label="recommend"
            classes="sc3"
            activeNumber={activeNumber}
            setActiveIndex={setActiveNumber}
          />
        </div>
        <SwiperSlide>
          <Rate setActiveIndex={setActiveNumber} />
        </SwiperSlide>
        <SwiperSlide className="w-full">
          <Review setActiveIndex={setActiveNumber} />
        </SwiperSlide>
        <SwiperSlide>
          <Recommend
            setActiveIndex={setActiveNumber}
            setOpen={setOpenRatingsForm}
          />
        </SwiperSlide>
      </Swiper>
    </Root>
  );
}

export default RatingsFormForm;

const Root = styled("div", {
  "::-webkit-scrollbar": {
    width: 0,
  },
  ".swiper": {
    display: "flex",
    flexDirection: "column-reverse",
  },
});
