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
        color="primary"
        options={["Accept", "Decline"]}
        value={value}
        handleSelectionChange={handleSelectionChange}
        className="lg:max-xl:w-40"
      />
    </>
  );
};

export default ApplicationStatus;
