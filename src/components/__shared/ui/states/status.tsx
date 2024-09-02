"use client";
import React from "react";
import { cn } from "@/lib/utils";
import { BsInfoCircle } from "react-icons/bs";
import { MdHourglassTop } from "react-icons/md";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import Link from "next/link";
import dynamic from "next/dynamic";
const Tooltip = dynamic(() =>
  import("@/components/__shared/ui/tooltip").then((mod) => mod.Tooltip),
);

type Props = {
  variant:
    | "warning"
    | "success"
    | "danger"
    | "neutral"
    | "neutral-light"
    | undefined;
  tooltipContent: string;
  text: string;
  href?: string;
  onClick?: () => void;
};

const Status = ({ variant, tooltipContent, text, href, onClick }: Props) => {
  if (href)
    return (
      <Tooltip content={tooltipContent}>
        <Link
          href={href}
          className={cn(
            "flex shrink-0 items-center justify-center gap-2 rounded-full p-1.5 px-2.5 shadow-sm sm:min-w-40",
            {
              "bg-success-bg text-success": variant === "success",
              "bg-warning-bg text-warning": variant === "warning",
              "bg-error-bg text-error": variant === "danger",
              "bg-shade-50 text-shade-300": variant === "neutral",
              "bg-neutral-100 text-shade-300": variant === "neutral-light",
              "pointer-event-none": !tooltipContent,
            },
          )}
        >
          {variant === "success" ? (
            <HiOutlineBadgeCheck />
          ) : variant === "warning" ? (
            <MdHourglassTop />
          ) : (
            <BsInfoCircle />
          )}
          <small className="text-xs">{text}</small>
        </Link>
      </Tooltip>
    );
  else
    return (
      <Tooltip content={tooltipContent}>
        <div
          className={cn(
            "flex shrink-0 items-center justify-center gap-2 rounded-full p-1.5 px-2.5 shadow-sm sm:min-w-40",
            {
              "bg-success-bg text-success": variant === "success",
              "bg-warning-bg text-warning": variant === "warning",
              "bg-error-bg text-error": variant === "danger",
              "bg-shade-50 text-shade-300": variant === "neutral",
              "bg-neutral-100 text-shade-300": variant === "neutral-light",
              "pointer-event-none": !tooltipContent,
            },
          )}
          onClick={onClick}
        >
          {variant === "success" ? (
            <HiOutlineBadgeCheck />
          ) : variant === "warning" ? (
            <MdHourglassTop />
          ) : (
            <BsInfoCircle />
          )}
          <small className="text-xs">{text}</small>
        </div>
      </Tooltip>
    );
};

export default Status;
