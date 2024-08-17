"use client";
import React, { HTMLAttributeAnchorTarget } from "react";
import { cn } from "@/lib/utils";
import { FaArrowRight } from "react-icons/fa";
import Link from "next/link";

interface Props extends React.HTMLAttributes<HTMLButtonElement> {
  variant?: "default" | "outline" | "ghost";
  padding?: "sm" | "default";
  fit?: boolean;
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
  greenHover?: boolean;
  target?: HTMLAttributeAnchorTarget;
  onClick?: (e?: any) => void;
}

const Button: React.FC<Props> = ({
  className,
  children,
  borderColor,
  variant = "default",
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
  tabIndex,
  fit,
  ...props
}: Props) => {
  if (href)
  return (
    <button></button>
  );
  else
  return (
    <button></button>
  );
};

export default Button;
