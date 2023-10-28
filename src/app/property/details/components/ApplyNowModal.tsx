"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import PropertyFormSimple from "./PropertyFormSimple";
import ProperyFormComplex from "./PropertyFormComplex";
import PropertyFormComplex from "./PropertyFormComplex";
import { SaveAndExit } from "./PropertyFormComplex/SaveAndExit";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";
import { GreyAnimation } from "./GreyAnimation";

type Type = {
  type: "simple" | "complex";
  variant?: string;
};

const ApplyNowModal = ({ type, variant = "rectangle" }: Type) => {
  const [animation, setAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div>
          {variant == "rectangle" && (
            <button
              className="capitalize text-white text-xl p-4 px-10 font-[600] bg-gradient-to-r from-[#21A19F] to-[#1EA9A6A1]
            max-w-[294px] max-h-[75px] flex items-center justify-center aspect-[294/75] rounded-2xl w-full hover:scale-[1.05] hover:
            ">
              Apply Now
            </button>
          )}
          {variant == "circle" && (
            <button className="w-full max-w-[150px] 2xl:max-w-[355px] aspect-square rounded-full  border-2 border-[#45808B] text-white flex items-center justify-center">
              <div
                className="bg-[#45808B] flex w-full 
              aspect-square items-center justify-center rounded-full m-5 p-5 whitespace-nowrap
            text-sm text-md">
                Apply Now
              </div>
            </button>
          )}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0" />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%]   ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-[8px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}>
          <div className={`relative p-5 `}>
            {type == "simple" ? (
              <PropertyFormSimple
                animation={animation}
                setAnimation={setAnimation}
                setOpen={setOpen}
              />
            ) : (
              <PropertyFormComplex setOpen={setOpen} />
            )}

            <GreyAnimation animation={animation} />
          </div>

          <Dialog.Close asChild>
            <button
              className="focus:shadow-violet7 absolute top-[15px] right-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] 
              z-[1000] focus:outline-none"
              aria-label="Close">
              <SaveAndExit />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ApplyNowModal;
