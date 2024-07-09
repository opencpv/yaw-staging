"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import Review from "./Review";
import Recommend from "./Recommend";
import { Progress, ProgressLabel, ProgressLine } from "./Progress";
import { styled } from "@stitches/react";
import Rate from "./Rate";

import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import useRatingsStore from "../useRatingsStore";

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
    <Root className="flex h-[726px] min-h-[726px] flex-col justify-between gap-4 px-0 py-2 lg:px-5">
      <div className="flex h-full flex-col gap-4 ">
        <h3 className="text-base font-bold text-shade-300 2xl:text-2xl">
          {/* EC: Good, however you don't need to specify a breakpoint, unless in a specific use case.
           * I think <h2> will do here
           * So we need to modify the h2 style globally to be smaller on mobile
           * Please update the h2 in globals.css on line 41 to "text-xl sm:text-[1.563rem]"
           */}
          Write a review
        </h3>

        <div className="flex  items-center gap-4">
          <div className="relative aspect-[120/100] w-full max-w-[120px] overflow-hidden rounded-lg">
            <Image
              src={currentProperty?.images?.[0] ?? ""}
              fill
              alt={`Image of ${currentProperty?.bedrooms} Bedroom
              ${currentProperty?.propertyType}`}
            />
            {/* EC: Good you can do away with the phrase "Image of"
             * eg. 2 Bedroom Apartment
             */}
          </div>
          <div className="flex flex-wrap items-center gap-1 xs:gap-4">
            <p className="text-base font-semibold md:text-[1.25rem]">
              {currentProperty?.bedrooms} Bedroom{" "}
              {currentProperty?.propertyType}
            </p>

            <button
              onClick={() => {
                setOpenRatingsForm(false);
                setOpenAllRatings(true);
              }}
              className="cursor-pointer border-b-[1px] border-primary bg-white text-primary lg:text-[1.25rem]"
            >
              <p className="leading-5 underline"> Read Reviews </p>
            </button>
          </div>
        </div>

        <div className="my-8 mb-16 flex h-full w-full flex-col justify-center  gap-8">
          <div className=" grid w-full grid-cols-5 items-center gap-2  pl-1 sm:gap-5">
            <Progress number={1} />
            <ProgressLine />
            <Progress number={2} />
            <ProgressLine />

            <Progress number={3} />
          </div>
          <div className="grid w-full grid-cols-5 items-center justify-center gap-2 text-center sm:gap-5">
            <ProgressLabel number={1} label="Rate" />
            <p></p>
            <ProgressLabel number={2} label="Recommend" />
            <p></p>
            <ProgressLabel number={7} label="Review" />
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
