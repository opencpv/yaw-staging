"use client";
import React, { useState } from "react";
import Select from "../../../components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/ui/Tooltip";

export type Status = "accepted" | "declined" | "pending";

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
            "bg-[#B0E3C9]": status === "accepted",
            "bg-neutral-100": status === "pending",
          },
        )}
      >
        <div className="flex items-center gap-5">
          <small className="text-xs">
            {status === "accepted" && "Accepted"}
            {status === "declined" && "Declined"}
            {status === "pending" && "Pending"}
          </small>
          <Tooltip
            content={
              status === "accepted"
                ? "Property owner has accepted your application and will review shortly"
                : status === "declined"
                  ? "Property owner has declined your application. Please reach out to them if you have any questions"
                  : "Your application is under review"
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
