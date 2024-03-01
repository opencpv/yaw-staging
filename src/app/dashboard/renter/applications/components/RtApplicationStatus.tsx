"use client";
import React, { useState } from "react";
import Select from "../../../components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/ui/Tooltip";

export type Status =
  | "completed"
  | "declined"
  | "under review"
  | "not submitted";

type Props = {
  status: Status;
};

const RtApplicationStatus = ({ status }: Props) => {
  const { value, handleSelectionChange } = useSelectDisclosure<Status>(status);

  return (
    <>
      <Tooltip
        content={
          status === "completed"
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
            "flex w-44 items-center justify-center rounded-full p-2 py-2.5 text-neutral-800 shadow-sm",
            {
              "bg-red-300": status === "declined",
              "bg-[#B0E3C9]": status === "completed",
              "bg-accent-500": status === "under review",
              "bg-primary-200/20": status === "not submitted",
            },
          )}
        >
          <div className="flex items-center gap-5">
            <small className="text-xs">
              {status === "completed" && "Completed"}
              {status === "declined" && "Declined"}
              {status === "under review" && "Under review"}
              {status === "not submitted" && "Not submitted"}
            </small>
            <BsInfoCircle />
          </div>
        </div>
      </Tooltip>
    </>
  );
};

export default RtApplicationStatus;
