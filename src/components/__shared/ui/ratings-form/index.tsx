"use client";
import React, { useMemo, useState } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { useAppStore } from "@/store/dashboard/AppStore";
import { cn } from "@/lib/utils";
import { ListingCardInterface } from "../../../../../interfaces";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import { useSignInModalStore } from "@/store/modal/useSignInModalStore";

type Props = {
  variant?: "property" | "person";
  className?: string;
  value?: number;
  property?: Partial<ListingCardInterface>;
};
export default function Rating({ value, className, property }: Props) {
  const { user } = useAppStore();
  const { openSignInModal, setOpenSignInModal } = useSignInModalStore();

  const ratingValue = useMemo(() => {
    return value ?? 0 > 5 ? 5 : value;
  }, [value]);

  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
  } = useRatingsModalStore();

  const handleRating = () => {
    if (user) {
      setCurrentProperty(property);
      setOpenRatingsForm(true);
    } else if (!user) {
      // set scroll position to scroll to after signing in.
      sessionStorage.setItem("windowScrollHeight", window.scrollY.toString());
      setOpenSignInModal(true);
    }
  };

  return (
    <>
      <button
        className="flex appearance-none items-center gap-2"
        onClick={handleRating}
      >
        <FaRegStar size={18} className="text-yellow-400" />
        {value !== undefined && value > 0 && (
          <p className={cn("cursor-pointer underline", className)}>
            {ratingValue}
          </p>
        )}

        {value === 0 && (
          <p className="text-neutral-900 underline hover:text-neutral-900 active:text-neutral-900">
            Rate
          </p>
        )}
      </button>
    </>
  );
}
