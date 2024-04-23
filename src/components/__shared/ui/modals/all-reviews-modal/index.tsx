"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@nextui-org/react";
import ModalCloseIcon from "../ModalCloseIcon";
import { FaStar } from "react-icons/fa";
import AllReviewsData from "./components/AllReviewsData";
import RatingsForm from "../../ratings-form";

type Props = {
  variant: "property" | "person";
  open1?: any;
  setOpen1?: any;
  setOpen2: any;
};
export default function AllReviewsModal({
  variant,
  open1,
  setOpen1,
  setOpen2,
}: Props) {
  return (
    <Dialog.Root open={open1} onOpenChange={setOpen1}>
      <Dialog.Trigger asChild>
        <Button className="bg-white">
          <p>All reviews</p>
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-modalOverlay " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow hidden-scrollbar fixed left-[50%] top-[50%] z-[1000] h-[85vh] max-h-[1260px] w-[90vw] max-w-[1595px] translate-x-[-50%] ${"overflow-y-scroll"} translate-y-[-50%] rounded-xl bg-white p-4 shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none`}
        >
          <div className={`relative z-[1001] px-1 py-2 lg:px-12`}>
            <AllReviewsData
              variant={variant}
              setOpen1={setOpen1}
              setOpen2={setOpen2}
            />
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-[20px] top-[10px] z-[4000] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <ModalCloseIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
