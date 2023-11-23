"use client";
import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  color?: "primary" | "accent" | "white" | "gradient";
  borderColor?: string;
  isIconOnly?: boolean;
  disabled?: boolean;
  onClick?: () => void;
};

const Button = ({
  className,
  children,
  borderColor,
  variant,
  color,
  isIconOnly,
  disabled,
  onClick,
}: Props) => {
  if (variant === "outline") {
    return (
      <NextUIButton
        disabled={disabled}
        isIconOnly={isIconOnly}
        className={`whitespace-normal font-[600] rounded-md bg-transparent max-w-sm px-3 py-3 border ${
          color === "primary"
            ? "border-primary-500 text-primary-500"
            : color === "accent"
            ? "border-accent-50 text-accent-50"
            : color === "white"
            ? "border-white text-neutral-800"
            : color === "gradient"
            ? "border-[#21A19F] text-[#21A19F]"
            : null
        } ${disabled && "cursor-not-allowed text-neutral-600"} ${className}`}
        style={{ borderColor: borderColor ? borderColor : "" }}
        onPress={onClick}
      >
        {children}
      </NextUIButton>
    );
  } else if (variant === "ghost") {
    return (
      <NextUIButton
        disabled={disabled}
        isIconOnly={isIconOnly}
        className={`bg-transparent ${
          color === "primary"
            ? "text-primary-500"
            : color === "accent"
            ? "text-accent-50"
            : color === "white"
            ? "text-neutral-800"
            : null
        }  ${disabled && "cursor-not-allowed text-neutral-600"} ${className}`}
        onPress={onClick}
      >
        {children}
      </NextUIButton>
    );
  }
  return (
    <NextUIButton
      disabled={disabled}
      isIconOnly={isIconOnly}
      className={`whitespace-normal font-[600] rounded-md max-w-sm px-3 py-3 ${
        color === "primary"
          ? "bg-primary-500 text-white"
          : color === "accent"
          ? "bg-accent-50 text-white"
          : color === "white"
          ? "bg-white text-neutral-800"
          : color === "gradient"
          ? "bg-gradient-to-r  from-[#21A19F] to-[#1EA9A6A1] text-white"
          : null
      } ${
        disabled && "cursor-not-allowed bg-gray-300 text-neutral-600"
      } ${className}`}
      onPress={onClick}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
