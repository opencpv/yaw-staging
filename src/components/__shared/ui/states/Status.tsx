"use client";
import React from "react";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/__shared/ui/Tooltip";

type Props = {
  variant:
    | "warning"
    | "success"
    | "danger"
    | "neutral"
    | "neutral-light"
    | "review"
    | undefined;
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
              "bg-shade-50 text-shade-300": variant === "neutral",
              "bg-neutral-100 text-shade-300": variant === "neutral-light",
              "pointer-event-none": !tooltipContent,
            },
          )}
        >
          <BsInfoCircle className={cn({ hidden: !tooltipContent })} />
          <small className="text-xs">{text}</small>
        </div>
      </Tooltip>
    </>
  );
};

export default Status;
