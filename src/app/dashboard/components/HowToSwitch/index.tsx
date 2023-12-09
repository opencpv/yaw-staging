"use client";
import CustomSelect from "@/app/components/CustomSelect";
import { Button } from "@nextui-org/react";
import { useLocalStorage } from "@uidotdev/usehooks";
import * as Dialog from "@radix-ui/react-dialog";
import { useState } from "react";
import { IoMdInformationCircleOutline } from "react-icons/io";
import Image from "next/image";

type Props = {
  dashboard: boolean;
  open?: any;
  setOpen?: any;
};
function HowToSwitch({ dashboard, open, setOpen }: Props) {
  return (
    <Dialog.Root open={open} onOpenChange={setOpen}>
      <Dialog.Trigger asChild>
        <Button className="bg-white">
          {!dashboard && <p>How to</p>}
        </Button>
      </Dialog.Trigger>
      <Dialog.Portal>
        <Dialog.Overlay
          className={`bg-[#02020275] data-[state=open]:animate-overlayShow fixed inset-0 `}
        />
        <Dialog.Content
          className={`data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  w-[90vw] translate-x-[-50%] z-[1000] max-w-[666px] max-h-[584px]  hidden-scrollbar ${"overflow-y-scroll"} translate-y-[-50%] rounded-xl bg-white shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none `}>
          <div className={`relative z-[1001]`}>
            <div className="w-full  h-full px-5 lg:px-12 py-4 rounded-lg bg-white shadow-[0px_4px_6px_-2px_rgba(0, 0, 0, 0.03] flex flex-col gap-8 items-center justify-center">
              <div className="flex gap-3 lg:gap-5 items-center justify-start w-full">
                <IoMdInformationCircleOutline size={24} color="#DDB771" />
                <p>Notice</p>
              </div>
              <div className="w-full flex flex-col items-center justify-center gap-1">
                <p className="text-[1.25rem] font-bold">
                  You can switch between portals using the “Switch Dropdown” in
                  the navigation menu
                </p>
                <div className="w-full  relative h-[278px]">
                  <Image
                    src={"/assets/images/dasboard-switch.png"}
                    fill
                    alt="how to"
                    objectFit="cover"
                    objectPosition="right"
                  />
                </div>
              </div>
              <div className="flex justify-center w-full mt-20">
                <Button
                  className="bg-[#073B3A] flex items-center justify-center h-[52px] max-w-[151px] text-white font-semibold w-full rounded-lg"
                  onClick={() => {
                    setOpen(false);
                  }}>
                  Continue
                </Button>
              </div>
            </div>
          </div>

          <Dialog.Close asChild>
            {/* <button
              className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[20px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none z-[4000]"
              aria-label="Close">
              <ModalCloseIcon />
            </button> */}
          </Dialog.Close>
        </Dialog.Content>
      </Dialog.Portal>
    </Dialog.Root>
  );
}

export default HowToSwitch;
