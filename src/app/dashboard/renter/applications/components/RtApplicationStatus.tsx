"use client";
import React, { useState } from "react";
import Select from "../../../components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@nextui-org/react";

const RtApplicationStatus = () => {
  const { value, handleSelectionChange } = useSelectDisclosure<
    "accepted" | "declined" | "pending"
  >("accepted");

  return (
    <>
      <Select
        color="primary"
        options={["Accepted", "Declined", "Pending"]}
        value={value}
        disabled
        handleSelectionChange={handleSelectionChange}
        className="bg-blue-400 lg:max-xl:w-40"
        selectorIconClassName="text-neutral-800"
        triggerClassName={cn({
          "bg-red-100": value === "declined",
          "bg-green-100": value === "accepted",
        })}
      />
    </>
  );
};

export default RtApplicationStatus;
