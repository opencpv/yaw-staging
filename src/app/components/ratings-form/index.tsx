"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";

import ReviewFormForm from "./components/ReviewFormForm";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Button } from "@nextui-org/react";
import ModalCloseIcon from "../ModalCloseIcon";
import { FaStar } from "react-icons/fa";
import RatingsFormForm from "./components/ReviewFormForm";

type Props = {
  rated?: boolean;
  rating?: string;
  open?: any;
  setOpen?: any;
  zindex: number;
  hide?: boolean;
};
export default function RatingsForm({
  rated = false,
  rating,

  zindex = 1001,
  hide,
}: Props) {
  const [animation, setAnimation] = useState(false);

  const { user } = useAppStore();
  const owner_id = user?.profileData?.id;
  const [template_id, setTemplateId] = useState(25);
  const [open, setOpen] = useState(false)

  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        {!hide && (
          <Button className="bg-white">
            {!rated && <FaStar color="#FFB800" size="26" />}
            { rated && (
              <p className="border-b-1 border-primary-500 text-[1.25rem]">
                {rating}
              </p>
            )}
          </Button>
        )}
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-modalOverlay data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] h-[85vh] w-[90vw] translate-x-[-50%] z-[1000] max-w-[799px] max-h-[779px] hidden-scrollbar ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}>
          <div className={`relative z-${zindex}`}>
            <RatingsFormForm setOpen={setOpen} preventDoubleModal={hide}/>
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
