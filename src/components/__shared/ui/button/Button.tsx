"use client";
import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  color?: "primary" | "accent" | "white" | "gradient";
  borderColor?: string;
  isIconOnly?: boolean;
  disabled?: boolean;
  arrowIcon?: boolean;
  onClick?: (e?: any) => void;
};

const Button = ({
  className,
  children,
  borderColor,
  variant,
  color,
  isIconOnly,
  disabled,
  arrowIcon,
  onClick,
}: Props) => {
  return (
    <NextUIButton
      isDisabled={disabled}
      isIconOnly={isIconOnly}
      className={cn(
        "whitespace-normal text-white font-[600] rounded-md bg-primary-500 max-w-sm min-h-fit p-3 px-10 space-x-2 hover:scale-[1.02]",
        className,
        {
          // "bg-primary-500": color === "primary",
          "bg-accent-50": color === "accent",
          "bg-white text-neutral-800": color === "white",
          "bg-gradient-to-r  from-[#21A19F] to-[#1EA9A6A1]": color === "gradient",
          "border-primary-500 text-primary-500 bg-transparent": variant === "outline" && color === "primary",
          "border-accent-50 text-accent-50 bg-transparent": variant === "outline" && color === "accent",
          "text-neutral-800 bg-transparent": variant === "outline" && (color === "white" || !color),
          "border-[#21A19F] text-[#21A19F] bg-transparent": variant === "outline" && color === "gradient",
          "bg-transparent justify-normal w-fit max-w-none p-0": variant === "ghost",
          "cursor-not-allowed bg-gray-300 text-neutral-600": disabled,
          "bg-transparent": disabled && (variant === "outline" || variant === "ghost"),
        }
      )}
      style={{ borderColor: borderColor || "" }}
      onPress={onClick}
    >
      {children} {arrowIcon && <FaArrowRight />}
    </NextUIButton>

  );
  // else if (variant === "ghost") {
  //   return (
  //     <NextUIButton
  //       isDisabled={disabled}
  //       isIconOnly={isIconOnly}
  //       className={cn(`bg-transparent space-x-2 justify-normal w-fit px-0 ${
  //         color === "primary"
  //           ? "text-primary-500"
  //           : color === "accent"
  //           ? "text-accent-50"
  //           : color === "white"
  //           ? "text-neutral-800"
  //           : null
  //       }  ${disabled && ""} hover:scale-[1.02]`, className)}
  //       onPress={onClick}
  //     >
  //       {children} {arrowIcon && <FaArrowRight />}
  //     </NextUIButton>
  //   );
  // }
  // return (
  //   <NextUIButton
  //     isDisabled={disabled}
  //     isIconOnly={isIconOnly}
  //     className={cn(`whitespace-normal font-[600] rounded-md max-w-sm min-h-fit p-3 px-10 space-x-2 ${
  //       color === "primary"
  //         ? ""
  //         : color === "accent"
  //         ? ""
  //         : color === "white"
  //         ? ""
  //         : color === "gradient"
  //         ? ""
  //         : null
  //     } ${
  //       disabled && "cursor-not-allowed bg-gray-300 text-neutral-600"
  //     } hover:scale-[1.02]`, className)}
  //     onPress={onClick}
  //   >
  //     {children} {arrowIcon && <FaArrowRight />}
  //   </NextUIButton>
  // );
};

export default Button;
