"use client";
import React, { useState } from "react";
import PaymentWarning from "./PaymentWarning";
import Button from "../../components/Button";
import {
  FaRegCheckCircle,
  FaRegTimesCircle,
} from "react-icons/fa";
import Select from "../../components/Select";

type Props = {
  status: "Paid" | "Not paid";
};

const PropertyStatus = ({ status }: Props) => {
  const [value, setValue] = useState<
    "available" | "contract pending" | "leased" | "dormant"
  >("available");

  const handleSelectionChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(e.target.value as "available" | "contract pending" | "leased" | "dormant");
  };

  if (status === "Not paid") return <PaymentWarning />;
  else if (status === "Paid")
    return (
      <>
        <Select
          options={["Available", "Contract Pending", "Leased", "Dormant"]}
          value={value}
          handleSelectionChange={handleSelectionChange}
        />
        {(value === "available" || value === "contract pending") && (
          <div className="flex items-center justify-center gap-2 text-xs font-[600] mt-3">
            Still Available?
            <Button
              isIconOnly
              className="bg-white rounded-md p-1 shadow-large border-0"
            >
              <FaRegCheckCircle className="text-green-500 text-xl" />
            </Button>
            <Button
              isIconOnly
              className="bg-white rounded-md p-1 shadow-large border-0"
            >
              <FaRegTimesCircle className="text-red-500 text-xl" />
            </Button>
          </div>
        )}
      </>
    );
};

export default PropertyStatus;
