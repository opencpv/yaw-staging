"use client";
import React, { useState } from "react";
import Select from "../../../components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@nextui-org/react";

export type Status = "accepted" | "declined" | "pending";

type Props = {
  status: Status;
};

const RtApplicationStatus = ({ status }: Props) => {
  const { value, handleSelectionChange } = useSelectDisclosure<Status>(status);

  return (
    <>
      <Select
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
      />
    </>
  );
};

export default RtApplicationStatus;
