"use client";
import React, { useState } from "react";
import { Button, useDisclosure } from "@nextui-org/react";

import Modal from "../Modal";
import CloseModalIcon from "../../icons/CloseModalIcon";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import { ListingCardInterface } from "../../../../../../interfaces";

type Props = {
  value?: number;
  property?: Partial<ListingCardInterface>;
};
export default function AllReviewsModal({
  property,
  value,
}: Props) {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();
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
