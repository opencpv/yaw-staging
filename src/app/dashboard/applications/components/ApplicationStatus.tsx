"use client";
import React, { useState } from "react";
import Select from "../../components/Select";

const ApplicationStatus = () => {
  const [value, setValue] = useState<"accept" | "decline">("accept");

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as "accept" | "decline");
  };

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
