"use client";
import React, { useMemo, useState } from "react";
import { cn } from "@/lib/utils";

import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import { ListingCardInterface } from "../../../../../../interfaces";
import { FaRegStar } from "react-icons/fa";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

type Props = {
  value?: number;
  className?: string;

  property?: Partial<ListingCardInterface>;
};
export default function AllReviewsModal({ property, value, className }: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
  } = useRatingsModalStore();

  const ratingValue = useMemo(() => {
    return value ?? 0 > 5 ? 5 : value;
  }, [value]);

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
        <div className="undefrline flex items-center gap-1 border-b-1 border-shade-300 leading-6">
          <FaRegStar className="text-yellow-400" />
          {value !== undefined && value > 0 && (
            <p className={cn("cursor-pointer text-lg ", className)}>
              {ratingValue} ( {value} reviews)
            </p>
          )}
        </div>{" "}
      </button>
    </>
  );
}
