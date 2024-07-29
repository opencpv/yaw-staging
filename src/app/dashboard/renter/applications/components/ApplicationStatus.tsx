"use client";
import React from "react";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/__shared/ui/Tooltip";
import CaBlueLoader from "./icons/CaBlueLoader";
import CaDeclinedIcon from "./icons/CaDeclinedIcon";
import CaAcceptedIcon from "./icons/CaAcceptedIcon";

type Props = {
  variant: "UNDER REVIEW" | "DECLINED" | "ACCEPTED" | "INCOMPLETE";
  tooltipContent: string;
  text: string;
};

const ApplicationStatus = ({ variant, tooltipContent, text }: Props) => {
  const icons = {
    "UNDER REVIEW": (
      <CaBlueLoader className={cn({ hidden: !tooltipContent })} />
    ),
    DECLINED: <CaDeclinedIcon className={cn({ hidden: !tooltipContent })} />,
    ACCEPTED: <CaAcceptedIcon className={cn({ hidden: !tooltipContent })} />,
    INCOMPLETE: <BsInfoCircle className={cn({ hidden: !tooltipContent })} />,
  };

  return (
    <>
      <Tooltip content={tooltipContent}>
        <div
          className={cn(
            "flex shrink-0 items-center justify-center gap-2 rounded-full p-1.5 px-2.5 shadow-sm sm:min-w-40",
            {
              "bg-info-bg  text-info": variant === "UNDER REVIEW",
              " bg-success-bg text-success": variant === "ACCEPTED",
              "bg-error-bg text-error": variant === "DECLINED",
              "bg-shade-50 text-info": variant === "INCOMPLETE",
              //   "bg-neutral-100 text-shade-300": variant === "neutral-light",
              "pointer-event-none": !tooltipContent,
            },
          )}
        >
          {icons[variant]}
          <small className="text-xs">{text}</small>
        </div>
      </Tooltip>
    </>
  );
};

export default ApplicationStatus;
