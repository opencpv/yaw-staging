"use client";
import React, { useState } from "react";
import { Select } from "@/components/__shared/ui/form/select";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";

const LsApplicationStatus = () => {
  const [value, setValue] = useState("Accept");

  return (
    <>
      <Select
        // color="primary"
        options={["Accept", "Decline"]}
        value={value}
        // selectorIconClassName="text-neutral-800"
        onValueChange={setValue}
        // className="lg:max-xl:w-40"
      />
    </>
  );
};

export default LsApplicationStatus;
