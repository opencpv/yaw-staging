"use client";
import React, { useState } from "react";
import Select from "../../../components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/ui/Tooltip";

export type Status = "completed" | "declined" | "under review";

type Props = {
  status: Status;
};

const RtApplicationStatus = ({ status }: Props) => {
  const { value, handleSelectionChange } = useSelectDisclosure<Status>(status);

  return (
    <>
      {/* <Select
        color="primary"
        options={["Accepted", "Declined", "Pending"]}
        value={status}
        disabled
        handleSelectionChange={handleSelectionChange}
        className="lg:max-xl:w-40"
        selectorIconClassName="text-neutral-800"
        triggerClassName={cn({
          "bg-red-300": status === "declined",
          "bg-[#B0E3C9]": status === "accepted",
        })}
      /> */}
      <div
        className={cn(
          "flex w-44 items-center justify-center rounded-full p-2 py-2.5 text-neutral-800 shadow-sm",
          {
            "bg-red-300": status === "declined",
            "bg-[#B0E3C9]": status === "completed",
            "bg-accent-500": status === "under review",
          },
        )}
      >
        <div className="flex items-center gap-5">
          <small className="text-xs">
            {status === "completed" && "Completed"}
            {status === "declined" && "Declined"}
            {status === "under review" && "Under review"}
          </small>
          <Tooltip
            content={
              status === "completed"
                ? "The lister has finished reviewing your report and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
                : status === "declined"
                  ? "The lister has declined your application. You can continue your search or contact them directly with more questions."
                  : "The lister has received your application and should respond shortly. You can contact them directly if a response is delayed."
            }
          >
            <BsInfoCircle />
          </Tooltip>
        </div>
      </div>
    </>
  );
};

export default RtApplicationStatus;
