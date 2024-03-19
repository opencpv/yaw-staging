import React, { useEffect, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { BiDotsVerticalRounded } from "react-icons/bi";
import useNotifications from "@/app/dashboard/renter/notifications/useNotifications";
import DeleteModal from "./DeleteModal";

type Props = {
  read: boolean;
  containerRef?: React.RefObject<HTMLElement>; // Reference to the container

};

const MarkAndDeletePopup = ({ read, containerRef }: Props) => {
  const [open, setOpen] = useState<boolean>();

  useEffect(() => {
    const handleScroll = () => {
      setOpen(false); // Close the popover when scrolling
    };

    window.addEventListener("scroll", handleScroll); // Listen for scroll events on window

    if (containerRef?.current) {
      containerRef?.current.addEventListener("scroll", handleScroll); // Listen for scroll events on container
    }

    return () => {
      window.removeEventListener("scroll", handleScroll); // Cleanup window event listener
      if (containerRef?.current) {
        containerRef.current.removeEventListener("scroll", handleScroll); // Cleanup container event listener
      }
    };
  }, [containerRef]); // This effect runs when containerRef changes
  return (
    <Popover.Root onOpenChange={setOpen} open={open}>
      <Popover.Trigger asChild>
        <button
          className="utline-none inline-flex cursor-pointer items-center justify-center focus:shadow-black"
          aria-label="Update dimensions"
        >
          <BiDotsVerticalRounded size={24} color="black" />
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <Popover.Content
          className="data-[state=open]:data-[side=top]:animate-slideDownAndFade  data-[state=open]:data-[side=right]:animate-slideLeftAndFade  data-[state=open]:data-[side=bottom]:animate-slideUpAndFade data-[state=open]:data-[side=left]:animate-slideRightAndFade flex flex-col items-center overflow-hidden rounded-[8px] 
        bg-white text-[13px] shadow-[0_24px_48px_-12px_rgba(0,0,0,0.18),0_10px_20px_-15px_hsla(206,22%,7%,.2)] will-change-[transform,opacity]
        "
          sideOffset={5}
        >
          {!read && (
            <button
              onClick={() => {
                setOpen(false);
              }}
              className="w-full border-b-[1px]
            border-[#0000001A] px-8 pb-2 pt-2 hover:bg-primary-300
            "
            >
              Mark as read
            </button>
          )}

          <DeleteModal />

          <Popover.Arrow className="fill-white" />
        </Popover.Content>
      </Popover.Portal>
    </Popover.Root>
  );
};

export default MarkAndDeletePopup;
