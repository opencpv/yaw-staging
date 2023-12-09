"use client";
import { Button } from "@nextui-org/react";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Review from "./Review";
import Recommend from "./Recommend";
import { Progress } from "./Progress";
import { styled } from "@stitches/react";
import Rate from "./Rate";
import AllReviewsModal from "../../all-reviews-modal";

type Props = {
  setOpen: any;
  variant?: "property" | "person";
  preventDoubleModal : boolean
};

function RatingsFormForm({ setOpen, variant="person", preventDoubleModal }: Props) {
  const [showAllReviews, setShowAllReviews] = useState(false);
  const [activeNumber, setActiveNumber] = useState(1);

  return (
    <Root className="flex flex-col gap-4 py-3 px-6">
      <div className="absolute top-0">
        <AllReviewsModal
          hide
          variant="person"
          zindex={2001}
          open={showAllReviews}
          setOpen={setShowAllReviews}
        />
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-[1.5625rem] font-bold text-[#373737]">
          Write a review
        </p>
        <div className="flex items-center gap-4">
          <div className="relative w-full max-w-[48px] rounded-full aspect-square overflow-hidden">
            <Image
              src={
                "https://images.unsplash.com/photo-1682686578601-e7851641d52c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8"
              }
              fill
              alt="Image"
            />
          </div>
          <p className="text-[1.25rem[ font-semibold">Jane Cooper</p>
          <p
            onClick={() => setShowAllReviews(true)}
            className="text-[#073B3A] text-[1.25rem] bg-white border-b-[1px] border-[#073B3A] cursor-pointer">
            ( 150 reviews )
          </p>
        </div>
      </div>

      <Swiper className="w-full px-1 mt-8">
        <div className="flex gap-5 items-center mb-16 overflow-x-scroll">
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
        <SwiperSlide>
          <Review setActiveIndex={setActiveNumber} />
        </SwiperSlide>
        <SwiperSlide>
          <Recommend setActiveIndex={setActiveNumber} setOpen={setOpen} />
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
