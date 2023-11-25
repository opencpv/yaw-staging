"use client";
import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
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
  isIconOnly,
  disabled,
  onClick,
}: Props) => {
  if (variant === "outline") {
    return (
      <NextUIButton
        disabled={disabled}
        isIconOnly={isIconOnly}
        className={`text-center font-[600] rounded-xl bg-transparent border ${
          disabled && "cursor-not-allowed text-neutral-600"
        } ${className} transition-all hover:scale-105`}
        style={{ borderColor: borderColor ? borderColor : "" }}
        onClick={onClick}
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
          disabled && "cursor-not-allowed text-neutral-600"
        } ${className} transition-all hover:scale-105`}
      >
        {children}
      </NextUIButton>
    );
  }
  return (
    <NextUIButton
      disabled={disabled}
      isIconOnly={isIconOnly}
      className={`text-center font-[600] rounded-xl ${
        disabled && "cursor-not-allowed bg-gray-300 text-neutral-600"
      } ${className} transition-all hover:scale-105`}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
