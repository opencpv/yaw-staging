"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Button } from "@nextui-org/react";
import ModalCloseIcon from "../ModalCloseIcon";
import { FaStar } from "react-icons/fa";
import AllReviewsData from "./components/AllReviewsData";
import RatingsForm from "../ratings-form";

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
        <Dialog.Overlay className="bg-modalOverlay data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[85vh] w-[90vw] translate-x-[-50%] z-[1000] max-w-[1595px] max-h-[1260px] hidden-scrollbar ${"overflow-y-scroll"} translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none p-4`}>
          <div className={`relative z-[1001] px-1 lg:px-12 py-2`}>
            <AllReviewsData variant={variant} setOpen1={setOpen1} setOpen2={setOpen2} />
          </div>

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none z-[4000]"
              aria-label="Close">
              <ModalCloseIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
