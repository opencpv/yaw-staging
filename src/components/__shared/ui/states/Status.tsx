"use client";
import React from "react";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/__shared/ui/Tooltip";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdHourglassTop } from "react-icons/md";

type Props = {
  variant: "warning" | "success" | "danger";
  tooltipContent: string;
  text: string;
};

const Status = ({ variant, tooltipContent, text }: Props) => {
  return (
    <>
      <Tooltip content={tooltipContent}>
        <div
          className={cn(
            "flex shrink-0 items-center justify-center gap-2 rounded-full p-1.5 px-2.5 shadow-sm sm:min-w-40",
            {
              "bg-success-bg text-success": variant === "success",
              "bg-warning-bg text-warning": variant === "warning",
              "bg-error-bg text-error": variant === "danger",
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
        </div>
      </Tooltip>
    </>
  );
};

export default Status;
