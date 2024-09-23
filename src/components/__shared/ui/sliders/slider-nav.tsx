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
  color?: "accent" | "white";
  onClick?: () => void;
  /**
   * Whether the button is absolute or relative
   */
  isAbsolute?: boolean;
};

/**
 * Rounded navigation button for the slider
 */
const SliderNav = ({
  position,
  hidden,
  className,
  classNames,
  size = "md",
  color = "white",
  onClick,
  isAbsolute = true,
}: Props) => {
  return ( 
    <button
      onClick={onClick}
      className={cn(
        "flex shrink-0 items-center justify-center rounded-full",
        {
          "absolute bottom-[50%] z-20 translate-y-1/2": isAbsolute,
          "left-[5%]": position === "left",
          "right-[5%]": position === "right",
          "size-10": size === "sm",
          "size-12": size === "md",
          "size-12 md:size-16": size === "lg",
          "bg-white text-shade-500": color === "white",
          "bg-accent text-white": color === "accent",
          hidden: hidden,
        },
        className,
      )}
    >
      {position === "right" ? (
        <MdChevronRight className={cn("text-lg", classNames?.icon)} />
      ) : (
        <MdChevronLeft className={cn("text-lg", classNames?.icon)} />
      )}
    </button>
  );
};

export default SliderNav;
