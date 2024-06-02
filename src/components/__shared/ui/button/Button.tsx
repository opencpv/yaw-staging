"use client";
import React, { HTMLAttributeAnchorTarget } from "react";
import { Button as NextUIButton } from "@nextui-org/react";
import { cn } from "@nextui-org/react";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  className?: string;
  children?: React.ReactNode;
  variant?: "default" | "outline" | "ghost";
  padding?: "sm" | "default";
  color?: "primary" | "accent" | "white" | "gradient" | "black";
  borderColor?: string;
  isIconOnly?: boolean;
  isLoading?: boolean;
  disabled?: boolean;
  arrowIcon?: boolean;
  radius?: "sm" | "full";
  href?: string;
  scroll?: boolean;
  type?: "button" | "submit" | "reset";
  replace?: boolean;
  title?: string;
  greenHover?: boolean;
  target?: HTMLAttributeAnchorTarget;
  onClick?: (e?: any) => void;
}

const Button: React.FC<Props> = ({
  className,
  children,
  borderColor,
  variant,
  color,
  isIconOnly,
  isLoading,
  disabled,
  arrowIcon,
  radius,
  href,
  scroll,
  padding,
  onClick,
  title,
  replace,
  greenHover,
  type,
  target,
  ...props
}: Props) => {
  if (href)
    return (
      <NextUIButton
        as={Link}
        replace={replace}
        target={target}
        href={href}
        scroll={scroll}
        isDisabled={disabled}
        title={title}
        isIconOnly={isIconOnly}
        isLoading={isLoading}
        type={type}
        className={cn(
          `min-h-fit max-w-sm space-x-2 whitespace-normal rounded-md bg-transparent px-10 py-3 text-base font-[600] ${
            borderColor && `border border-[${borderColor}]`
          }`,
          {
            "bg-primary-500 focus:outline-primary":
              color === "primary" && variant !== "outline",
            "bg-accent-50": color === "accent" && variant !== "outline",
            "bg-white text-neutral-800":
              color === "white" && variant !== "outline",
            "bg-gradient-to-r  from-[#21A19F] to-[#1EA9A6A1]":
              color === "gradient" && variant !== "outline",
            "bg-transparent": variant === "outline" && color === undefined,
            "border border-primary-500 bg-transparent text-primary-500":
              variant === "outline" && color === "primary",
            "border border-accent-50 bg-transparent text-accent-50":
              variant === "outline" && color === "accent",
            "border border-white bg-transparent text-white":
              variant === "outline" && color === "white",
            "border border-neutral-500 bg-transparent text-neutral-500":
              variant === "outline" && color === "black",
            "border border-[#21A19F] bg-transparent text-[#21A19F]":
              variant === "outline" && color === "gradient",
            "h-fit w-fit min-w-unit-5 max-w-none justify-normal rounded-none bg-transparent p-0 text-neutral-800 hover:scale-100":
              variant === "ghost",
            "h-fit w-fit min-w-unit-5 max-w-none justify-normal rounded-none bg-transparent p-0 text-primary hover:scale-100":
              variant === "ghost" && color === "primary",
            "h-fit w-fit min-w-unit-5 max-w-none justify-normal rounded-none bg-transparent p-0 text-accent hover:scale-100":
              variant === "ghost" && color === "accent",
            "rounded-full": radius === "full",
            "h-unit-6 min-w-unit-5 px-2.5 py-1.5": padding === "sm",
            "cursor-not-allowed bg-gray-300 text-neutral-600": disabled,
            "bg-none":
              disabled && (variant === "outline" || variant === "ghost"),
            "deep-green-hover hover:scale-100": greenHover,
            " hover:scale-[1.02]":
              greenHover === false || greenHover === undefined,
            "h-fit w-fit p-0": isIconOnly,
          },
          className,
        )}
        onPress={onClick}
      >
        {children} {arrowIcon && <FaArrowRight />}
      </NextUIButton>
    );
  else
    return (
      <NextUIButton
        isDisabled={disabled}
        title={title}
        isIconOnly={isIconOnly}
        isLoading={isLoading}
        type={type}
        className={cn(
          `min-h-fit max-w-sm space-x-2 whitespace-normal rounded-md bg-transparent p-3 px-10 text-base font-[600] ${
            borderColor && `border border-[${borderColor}]`
          }`,
          {
            "bg-primary-500 focus:outline-primary":
              color === "primary" && variant !== "outline",
            "bg-accent-50": color === "accent" && variant !== "outline",
            "bg-white text-neutral-800":
              color === "white" && variant !== "outline",
            "bg-gradient-to-r  from-[#21A19F] to-[#1EA9A6A1]":
              color === "gradient" && variant !== "outline",
            "bg-transparent": variant === "outline" && color === undefined,
            "border border-primary-500 bg-transparent text-primary-500":
              variant === "outline" && color === "primary",
            "border border-accent-50 bg-transparent text-accent-50":
              variant === "outline" && color === "accent",
            "border border-white bg-transparent text-white":
              variant === "outline" && color === "white",
            "border border-neutral-500 bg-transparent text-neutral-500":
              variant === "outline" && color === "black",
            "border border-[#21A19F] bg-transparent text-[#21A19F]":
              variant === "outline" && color === "gradient",
            "h-fit w-fit min-w-unit-5 max-w-none justify-normal rounded-none bg-transparent p-0 text-neutral-800 hover:scale-100":
              variant === "ghost",
            "h-fit w-fit min-w-unit-5 max-w-none justify-normal rounded-none bg-transparent p-0 text-primary hover:scale-100":
              variant === "ghost" && color === "primary",
            "h-fit w-fit min-w-unit-5 max-w-none justify-normal rounded-none bg-transparent p-0 text-accent hover:scale-100":
              variant === "ghost" && color === "accent",
            "rounded-full": radius === "full",
            "h-unit-6 min-w-unit-5 px-2.5 py-1.5": padding === "sm",
            "cursor-not-allowed bg-gray-300 text-neutral-600": disabled,
            "bg-none":
              disabled && (variant === "outline" || variant === "ghost"),
            "deep-green-hover hover:scale-100": greenHover,
            " hover:scale-[1.02]":
              greenHover === false || greenHover === undefined,
            "h-fit w-fit p-0": isIconOnly,
          },
          className,
        )}
        onPress={onClick}
      >
        {children} {arrowIcon && <FaArrowRight />}
      </NextUIButton>
    );
};

export default Button;
