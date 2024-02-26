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
        <div
          className={`flex justify-center ${
            maxWidth && "w-full rounded-lg bg-secondary-50"
          }`}
        >
          <div className="rounded-lg bg-secondary-50 p-4">
            <MdOutlineRemoveRedEye size="24" color="#3F3F46" />
          </div>
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-modalOverlay " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow lg-hidden-scrollbar fixed left-[50%] top-[50%] z-[1000] h-[75vh] max-h-[857px] w-[90vw] max-w-[664px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-xl bg-white px-4 pb-4 pt-[50px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none lg:h-[90vh]  lg:w-[50vw] lg:px-12 lg:pt-14  `}
        >
          <Details variant={variant} />

          <Dialog.Close asChild>
            <button
              className="absolute right-[20px] top-[15px] z-[4000] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none lg:right-[50px] lg:top-[15px]"
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
