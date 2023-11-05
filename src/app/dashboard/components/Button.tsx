"use client";
import React from "react";
import { Button as NextUIButton } from "@nextui-org/react";

type Props = {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  borderColor?: string;
  isIconOnly?: boolean;
};

const Button = ({
  className,
  children,
  borderColor,
  variant,
  isIconOnly,
}: Props) => {
  if (variant === "outline") {
    return (
      <NextUIButton
        isIconOnly={isIconOnly}
        className={`text-center font-[600] rounded-xl bg-transparent border ${className}`}
        style={{ borderColor: borderColor ? borderColor : "" }}
      >
        {children}
      </NextUIButton>
    );
  } else if (variant === "ghost") {
    return (
      <NextUIButton
        isIconOnly={isIconOnly}
        className={`bg-transparent ${className}`}
      >
        {children}
      </NextUIButton>
    );
  }
  return (
    <NextUIButton
      isIconOnly={isIconOnly}
      className={`text-center font-[600] rounded-xl ${className}`}
    >
      {children}
    </NextUIButton>
  );
};

export default Button;
