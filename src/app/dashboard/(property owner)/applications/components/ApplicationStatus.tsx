"use client";
import React, { useState } from "react";
import Select from "../../../components/Select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const ApplicationStatus = () => {
  const { value, handleSelectionChange } = useSelectDisclosure<
    "accept" | "decline"
  >("accept");

  return (
    <>
      <Select
        options={["Accept", "Decline"]}
        value={value}
        handleSelectionChange={handleSelectionChange}
      />
    </>
  );
};

export default ApplicationStatus;
