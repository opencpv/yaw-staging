"use client";
import React, { useState } from "react";
import Select from "../../../components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

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
        handleSelectionChange={handleSelectionChange}
        className="lg:max-xl:w-40"
      />
    </>
  );
};

export default RtApplicationStatus;
