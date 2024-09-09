import React, { useEffect, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import {
  PopoverContent,
  PopoverTrigger,
} from "@/components/__shared/ui/popover";
import dynamic from "next/dynamic";
import { PopoverArrow } from "@radix-ui/react-popover";
// import DeleteModal from "./DeleteModal";

const Popover = dynamic(() =>
  import("@/components/__shared/ui/popover").then((mod) => mod.Popover),
);

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
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <button
          className="utline-none inline-flex cursor-pointer items-center justify-center focus:shadow-accent"
          aria-label="Update dimensions"
        >
          <BiDotsVerticalRounded size={24} color="black" />
        </button>
      </PopoverTrigger>

      <PopoverContent sideOffset={5}>
        {!read && (
          <button
            onClick={() => {
              setOpen(false);
            }}
            className="w-full border-b-[1px] border-[#0000001A] px-8 pb-2 pt-2 hover:bg-primary-300"
          >
            Mark as read
          </button>
        )}

        {/* <DeleteModal /> */}

        <PopoverArrow className="fill-white" />
      </PopoverContent>
    </Popover>
  );
};

export default MarkAndDeletePopup;
