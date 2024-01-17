"use client";
import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  color?: "primary" | "accent" | "white" | "gradient" | "black";
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
        `whitespace-normal font-[600] text-white rounded-md max-w-sm bg-transparent min-h-fit p-3 px-10 space-x-2 hover:scale-[1.02] ${
          borderColor && `border border-[${borderColor}]`
        }`,
        className,
        {
          "bg-primary-500": color === "primary" && variant === undefined,
          "bg-transparent border border-primary-500 text-primary-500":
            color === "primary" && variant === "outline",
          "bg-accent-50": color === "accent" && variant === undefined,
          "bg-transparent border border-accent-50 text-accent-50":
            color === "accent" && variant === "outline",
          "bg-gradient-to-r from-[#21Ai19F] to-[#1EA9A6A1]":
            color === "gradient" && variant === undefined,
          "bg-transparent border text-[#21A19F] border-[#21A19F]":
            color === "gradient" && variant === "outline",
          "bg-transparent text-primary-500 justify-normal w-fit max-w-none p-0":
            color === "primary" && variant === "ghost",
          "bg-transparent text-accent-50 justify-normal w-fit max-w-none p-0":
            color === "accent" && variant === "ghost",
          "bg-transparent text-[#21A19F] justify-normal w-fit max-w-none p-0":
            color === "gradient" && variant === "ghost",
          "cursor-not-allowed bg-gray-300 text-neutral-600": disabled,
          "bg-none": disabled && (variant === "outline" || variant === "ghost"),
        },
      )}
      onPress={onClick}
    >
      {children} {arrowIcon && <FaArrowRight />}
    </NextUIButton>
  );
};

export default Button;
