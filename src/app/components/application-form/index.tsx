"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import PropertyFormSimple from "./components/PropertyFormSimple";
import ProperyFormComplex from "./components/PropertyFormComplex";
import PropertyFormComplex from "./components/PropertyFormComplex";
import { SaveAndExit } from "./components/PropertyFormComplex/SaveAndExit";
import { styled } from "@stitches/react";
import { motion } from "framer-motion";
import { GreyAnimation } from "./components/GreyAnimation";
import { openSans } from "@/styles/font";

type Type = {
  type: "simple" | "complex";
  variant?: string;
  green? : boolean
};

const ApplicationForm = ({ type, variant = "rectangle", green }: Type) => {
  const [animation, setAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="flex w-full items-center justify-center">
          {variant == "rectangle" && (
            <button
              className="green-gradient p-4 font-[600] text-xl rounded-md text-white capitalize max-w-sm w-60">
              Apply Now
            </button>
          )}
          {variant == "circle" && (
            <button className="w-full max-w-[150px] 2xl:max-w-[355px] aspect-square rounded-full  border-2 border-[#45808B] text-white flex items-center justify-center hover:scale-105 transition-all">
              <div
                className="bg-[#45808B] flex w-full 
              aspect-square items-center justify-center rounded-full m-5 p-5 whitespace-nowrap
            text-sm text-md">
                Apply Now
              </div>
            </button>
          )}
          {variant == "agent-form" && (
            <button className={`w-full  lg:max-w-[284px] 
            ${green ? "bg-[#45808B] text-white" :"bg-[#ECF2F3] text-shade-200"}
            h-[38px] lg:h-[60px] rounded-2xl  flex items-center justify-center font-semibold `}>
              Rent it
            </button>
          )}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="bg-blackA6 data-[state=open]:animate-overlayShow fixed inset-0 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%] max-h-[85vh] w-[90vw] translate-x-[-50%] z-[1000]  ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-[8px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}>
          <div className={`relative p-5 z-[1001] ${openSans.className}`}>
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

export default ApplicationForm;
