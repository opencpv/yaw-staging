"use client";
import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import PropertyFormSimple from "./components/PropertyFormSimple";
import PropertyFormComplex from "./components/PropertyFormComplex";
import { SaveAndExit } from "./components/PropertyFormComplex/SaveAndExit";
import { GreyAnimation } from "./components/GreyAnimation";
import { openSans } from "@/styles/font";
import { ClientOnly } from "@/components/ui/ClientOnly";

type Type = {
  type: "simple" | "complex";
  variant?: string;
  green?: boolean;
  active?: boolean;
};

const ApplicationForm = ({
  type,
  variant = "rectangle",
  green,
  active,
}: Type) => {
  const [animation, setAnimation] = useState(false);
  const [open, setOpen] = useState(false);
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <div className="flex w-full items-center justify-center">
          {variant == "rectangle" && (
            <button className="green-gradient w-60 max-w-sm rounded-md p-4 text-xl font-[600] capitalize text-white">
              Apply Now
            </button>
          )}
          {variant == "circle" && (
            <button className="flex aspect-square w-full max-w-[150px] items-center  justify-center rounded-full border-2 border-primary-200 text-white transition-all hover:scale-105 2xl:max-w-[355px]">
              <div
                className="text-md m-5 flex 
              aspect-square w-full items-center justify-center whitespace-nowrap rounded-full bg-primary-200
            p-5 text-sm"
              >
                Apply Now
              </div>
            </button>
          )}
          {variant == "agent-form" && (
            <button
              className={`w-full  lg:max-w-[284px] 
            ${
              green
                ? "bg-[#ECF2F3] text-shade-200 hover:bg-primary-200"
                : "bg-[#ECF2F3] text-shade-200"
            } ${active && "bg-primary-200 text-white"}
            flex h-10 items-center justify-center rounded-2xl text-sm font-semibold lg:h-14 `}
            >
              Rent it
            </button>
          )}
        </div>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-blackA6 " />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed left-[50%] top-[50%] z-[1000] max-h-[85vh] w-[90vw] translate-x-[-50%]  ${
            animation ? " overflow-y-hidden" : "overflow-y-scroll"
          } translate-y-[-50%] rounded-[8px] bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}
        >
          <div className={`relative z-[1001] p-5`}>
            {type == "simple" ? (
              <ClientOnly>
                <PropertyFormSimple
                  animation={animation}
                  setAnimation={setAnimation}
                  setOpen={setOpen}
                />
              </ClientOnly>
            ) : (
              <ClientOnly>
                <PropertyFormComplex setOpen={setOpen} />
              </ClientOnly>
            )}

            <GreyAnimation animation={animation} />
          </div>

          <Dialog.Close asChild>
            <button
              className="absolute right-[25px] top-[15px] z-[1000] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] 
              focus:shadow-violet7 focus:outline-none"
              aria-label="Close"
            >
              <SaveAndExit />
            </button>
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
};

export default ApplicationForm;
