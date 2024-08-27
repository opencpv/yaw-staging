"use client";
import React from "react";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import { ListingCardInterface } from "../../../../../../interfaces";

type Props = {
  value?: number;
  property?: Partial<ListingCardInterface>;
};
export default function AllReviewsModal({ property, value }: Props) {
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
  } = useRatingsModalStore();

  return (
    <>
      <button
        className=""
        onClick={() => {
          setCurrentProperty(property);
          setOpenAllRatings(true);
        }}
      >
        {/* <p>All reviews</p> */}

        <small>( {(value as number) > 0 ? `${value}+` : `${value}`} )</small>
      </button>
    </>
  );
}
