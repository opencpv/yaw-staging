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
    <Root className="flex flex-col gap-4 px-1 py-3 lg:px-4">
      <div className="flex flex-col gap-4">
        {/* EC: Please use a heading element. e.g h2, h3
          * By using a heading element you may not need to use "text-base font-bold 2xl:text-[1.5625rem]"
          e.g <h2>Write a review</h2>
          * Please make sure any color is in the scheme unless it's a one-off color.
          * e.g text-shade-300 instead of text-[#373737]
          * Please address all similar instances.
        */}
        <p className="text-base font-bold text-[#373737] 2xl:text-[1.5625rem]">
          Write a review
        </p>

        <div className="flex  items-center gap-4">
          <div className="relative aspect-square w-full max-w-[48px] overflow-hidden rounded-full">
            <Image src={currentProperty?.images?.[0] ?? ""} fill alt="Image" />{" "}
            {/* Please an appropriate alt text is recommended */}
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
