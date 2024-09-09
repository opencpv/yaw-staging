"use client";
import React, { useMemo, useState } from "react";

import { useAppStore } from "@/store/dashboard/AppStore";
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
      
        <div className="flex items-center gap-2 text-primary">
          <p>|</p>
          <p className="text-lg ">Rate</p>
        </div>
      </button>
    </>
  );
}
