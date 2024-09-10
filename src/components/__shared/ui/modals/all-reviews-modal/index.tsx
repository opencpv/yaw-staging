"use client";
import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import { ListingCardInterface } from "../../../../../../interfaces";
// import { FaRegStar } from "react-icons/fa";
import { IoStar } from "react-icons/io5";
type Props = {
  value?: number;
  className?: string;
  clickable?: boolean;
  property?: Partial<ListingCardInterface>;
  isListingCard?: boolean;
};
export default function AllReviewsModal({
  clickable = true,
  property,
  value,
  className,
  isListingCard,
}: Props) {
  const {
    // openRatingsForm,
    // setOpenRatingsForm,
    // openAllRatings,
    setOpenAllRatings,
    // currentProperty,
    setCurrentProperty,
  } = useRatingsModalStore();

  const ratingValue = useMemo(() => {
    return (value ?? 0 > 5) ? 5 : value;
  }, [value]);

  return (
    <>
      <button
        className={`${!clickable && "cursor-text"}`}
        onClick={() => {
          if (clickable) {
            setCurrentProperty(property);
            setOpenAllRatings(true);
          }
        }}
      >
        {/* <p>All reviews</p> */}
        <div className="flex items-center gap-1 border-b-[1px] border-b-shade-300 leading-6">
          <IoStar className="mr-1 text-yellow-400" />
          {value !== undefined && value > 0 && (
            <p className={cn("text-lg", className)}>
              {ratingValue} ( {value} {isListingCard ? "+ " : "Reviews"})
            </p>
          )}
        </div>{" "}
      </button>
    </>
  );
}
