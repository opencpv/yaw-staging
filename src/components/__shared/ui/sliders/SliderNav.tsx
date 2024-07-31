import { cn } from "@/lib/utils";
import React from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

type Props = {
  position: "left" | "right";
  size?: "sm" | "md" | "lg";
  hidden?: boolean;
  className?: string;
  classNames?: {
    icon?: string;
  };
};

const SliderNav = ({
  position,
  hidden,
  className,
  classNames,
  size = "md",
}: Props) => {
  return (
    <button
      className={cn(
        "absolute bottom-[40%] z-20 flex shrink-0 cursor-default items-center justify-center rounded-full bg-white",
        {
          "left-[5%]": position === "left",
          "right-[5%]": position === "right",
          "size-9": size === "sm",
          "size-9 sm:size-12": size === "md",
          "size-12 md:size-16": size === "lg",
          hidden: hidden,
        },
        className,
      )}
    >
      {position === "right" ? (
        <MdChevronRight
          className={cn("text-lg text-neutral-700", classNames?.icon)}
        />
      ) : (
        <MdChevronLeft
          className={cn("text-lg text-neutral-700", classNames?.icon)}
        />
      )}
    </button>
  );
};

export default SliderNav;
