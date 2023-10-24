import React from "react";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { BiDotsVerticalRounded } from "react-icons/bi";

const MarkAndDeletePopup = () => (
  <Popover.Root>
    <Popover.Trigger asChild>
      <button
        className="inline-flex items-center justify-center text-violet11  focus:shadow-black cursor-pointer outline-none"
        aria-label="Update dimensions">
        <BiDotsVerticalRounded size={24} />
      </button>
    </Popover.Trigger>
    <Popover.Portal>
      <Popover.Content
        className="rounded-[8px]  px-8  bg-white shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18),0_10px_20px_-15px_hsla(206,22%,7%,.2)] focus:shadow-[0_10px_38px_-10px_hsla(206,22%,7%,.35),0_10px_20px_-15px_hsla(206,22%,7%,.2),0_0_0_2px_theme(colors.violet7)] will-change-[transform,opacity] data-[state=open]:data-[side=top]:animate-slideDownAndFade data-[state=open]:data-[side=right]:animate-slideLeftAndFade data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade 
        text-[13px] flex flex-col gap-4 items-center
        "
        sideOffset={5}>
            <button className="border-b-[1px] border-[#0000001A]
            py-2
            ">
                Mark as read
            </button>
            <button className="pb-2">
                Delete
            </button>
       
        {/* <Popover.Close
          className="rounded-full h-[25px] w-[25px] inline-flex items-center justify-center text-violet11 absolute top-[5px] right-[5px] hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 outline-none cursor-default"
          aria-label="Close">
          <Cross2Icon />
        </Popover.Close> */}
        <Popover.Arrow className="fill-white" />
      </Popover.Content>
    </Popover.Portal>
  </Popover.Root>
);

export default MarkAndDeletePopup;
