"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import { Button } from "@nextui-org/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import ModalCloseIcon from "@/app/components/ModalCloseIcon";
import Details from "./Details";

type Props = {
  variant: "invoice" | "receipt";
  maxWidth?: boolean;
};
export default function ViewDataDetailsModal({ variant, maxWidth }: Props) {
  return (
    <Dialog.Root>
      <Dialog.Trigger asChild>
        <div className={`flex justify-center ${maxWidth && "w-full bg-[#F1F1F1] rounded-lg"}`}>
          <div className="bg-[#F1F1F1] rounded-lg p-4">
            <MdOutlineRemoveRedEye size="24" color="#3F3F46" />
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-modalOverlay data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[75vh] lg:h-[90vh] w-[90vw] lg:w-[50vw] translate-x-[-50%] z-[1000] max-w-[664px] max-h-[857px] lg-hidden-scrollbar overflow-y-scroll translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none px-4 lg:px-12  pt-[50px] lg:pt-14 pb-4  `}>

          <Details variant={variant} />

          <Dialog.Close asChild>
            <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[15px] lg:top-[15px] right-[20px] lg:right-[50px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none z-[4000]"
              aria-label="Close">
              <ModalCloseIcon />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}
