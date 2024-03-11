"use client";
import React, { useState } from "react";
import Select from "../../../components/shared/ui/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/ui/Tooltip";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdHourglassTop } from "react-icons/md";

export type RenterApplicationStatus =
  | "accepted"
  | "declined"
  | "under review"
  | "incomplete";

type Props = {
  status: RenterApplicationStatus;
};

const RtApplicationStatus = ({ status }: Props) => {
  return (
    <>
      <Tooltip
        content={
          status === "accepted"
            ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
            : status === "declined"
              ? "The lister has declined your application. Continue your search or contact them directly with more questions."
              : status === "under review"
                ? "The lister has received your application and should respond shortly. Contact them directly if a response is delayed."
                : "Please submit form for review."
        }
      >
        <div
          className={cn(
            "flex w-fit shrink-0 items-center justify-center gap-2 rounded-full p-1.5 px-2.5 shadow-sm",
            {
              "bg-[#FEEFEF] text-[#DA1414]": status === "declined",
              "bg-[#EDF9F0] text-[#287D3C]": status === "accepted",
              "bg-[#FFF4EC] text-[#B95000]": status === "under review",
              "bg-[#FEEFEF] text-[#DA1414] ": status === "incomplete",
            },
          )}
        >
          {status === "accepted" ? (
            <HiOutlineBadgeCheck />
          ) : status === "under review" ? (
            <MdHourglassTop />
          ) : (
            <BsInfoCircle />
          )}
          <small className="text-xs">
            {status === "accepted" && "Accepted"}
            {status === "declined" && "Declined"}
            {status === "under review" && "Under review"}
            {status === "incomplete" && "Incomplete"}
          </small>
        </div>
      </Tooltip>
    </>
  );
};

export default RtApplicationStatus;
