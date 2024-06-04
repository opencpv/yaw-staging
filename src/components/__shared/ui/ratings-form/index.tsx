"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import ReviewFormForm from "./components/RatingsFormForm";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button } from "@nextui-org/react";
import ModalCloseIcon from "../modals/ModalCloseIcon";
import { FaStar } from "react-icons/fa";
import RatingsFormForm from "./components/RatingsFormForm";

type Props = {
  rated?: boolean;
  rating?: string;
  open1?: any;
  setOpen1?: any;
  setOpen2?: any;
  variant?: "property" | "person";
};
export default function RatingsForm({
  rated = false,
  rating,
  open1,
  setOpen1,
  setOpen2,
  variant,
}: Props) {
  const [animation, setAnimation] = useState(false);

  const { user } = useAppStore();
  const owner_id = user?.id as string;
  const [template_id, setTemplateId] = useState(25);

  return (
    <Dialog.Root open={open1} onOpenChange={setOpen1}>
      <Dialog.Trigger asChild>
        <Button className="bg-white">
          {!rated && <FaStar color="#FFB800" size="26" />}
          {rated && (
            <p className="border-b-1 border-primary-500 text-[1.25rem]">
              {rating}
            </p>
          )}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-modalOverlay " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow hidden-scrollbar fixed left-[50%] top-[50%] z-[1000] h-[85vh] max-h-[779px] w-[90vw] max-w-[799px] translate-x-[-50%] ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}
        >
          <div className={`relative z-[1001]`}>
            <RatingsFormForm
              setOpen={setOpen1}
              variant={variant}
              setOpen2={setOpen2}
            />
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-[20px] top-[10px] z-[4000] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-neutral-800 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-accent focus:outline-none"
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
