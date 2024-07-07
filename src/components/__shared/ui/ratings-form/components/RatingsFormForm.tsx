"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review";
import Recommend from "./Recommend";
import { Progress } from "./Progress";
import { styled } from "@stitches/react";
import Rate from "./Rate";

import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import useRatingsStore from "../useRatingsStore";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import { fadeUp } from "@/lib/animations";
import Button from "../../button/Button";

function RatingsFormForm() {
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
  } = useRatingsModalStore();
  const { activeTab, setActiveTab } = useRatingsStore();

  const pages: any = {
    0: <Rate />,
    1: <Recommend />,
    2: <Review />,
  };

  useEffect(() => {
    setActiveTab(0);
  }, [setActiveTab]);

  return (
    <Root className="flex h-[726px] min-h-[726px] flex-col justify-between gap-4 px-0 lg:px-5 py-2">
      <div className="flex h-full flex-col gap-4 ">
        <p className="text-base font-bold text-[#373737] 2xl:text-2xl">
          Write a review
        </p>

        <div className="flex  items-center gap-4">
          <div className="relative aspect-[120/100] w-full max-w-[120px] overflow-hidden rounded-lg">
            <Image src={currentProperty?.images?.[0] ?? ""} fill alt="Image" />
          </div>

          <div className="flex flex-wrap items-center gap-1 xs:gap-2 xl:gap-4">
            <p className="text-base md:text-xl">
              {currentProperty?.bedrooms} Bedroom{" "}
              {currentProperty?.propertyType}
            </p>

            <button
              onClick={() => {
                setOpenRatingsForm(false);
                setOpenAllRatings(true);
              }}
              className="cursor-pointer border-primary bg-white text-primary lg:text-xl"
            >
              <p className="leading-5 underline"> Read Reviews </p>
            </button>
          </div>
        </div>

        <div className="my-8 flex h-full w-full flex-col justify-center px-1">
          <div className="mb-16 flex items-center gap-5  pl-1">
            <Progress number={1} label="Rate" classes="sc1" />
            <Progress number={2} label="review" classes="sc2" />
            <Progress number={3} label="recommend" classes="sc3" />
          </div>
          <div className="flex h-full flex-col justify-center">
            {pages[activeTab]}
          </div>{" "}
        </div>
      </div>

      <div className="flex w-full justify-center">
        <Button
          color="primary"
          onClick={() => {
            activeTab != 2 && setActiveTab(activeTab + 1);
            if (activeTab == 2) {
              setOpenRatingsForm(false);
            }
          }}
          className="h-[48px] w-full lg:w-[264px]"
        >
          {activeTab != 2 ? "Next" : "Finish"}
        </Button>
      </div>
    </Root>
  );
}

export default RatingsFormForm;

const Root = styled("div", {
  "::-webkit-scrollbar": {
    width: 0,
  },
});
