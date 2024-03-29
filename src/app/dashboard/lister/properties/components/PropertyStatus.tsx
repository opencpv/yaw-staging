"use client";
import React from "react";
import PaymentWarning from "./PaymentWarning";
import Button from "@/components/__shared/ui/button/Button";
import { FaRegCheckCircle, FaRegTimesCircle } from "react-icons/fa";
import Select from "../../../components/Select";
import Schedule from "node-schedule";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { PropertyStatusInterface } from "../../../../../../interfaces";

type Props = {
  isPaidFor: boolean;
  status: PropertyStatusInterface;
};

const PropertyStatus = ({ isPaidFor, status }: Props) => {
  const { setValue, handleSelectionChange } =
    useSelectDisclosure<PropertyStatusInterface>("available");

  if (isPaidFor === false) return <PaymentWarning />;
  else if (isPaidFor)
    return (
      <>
        <Select
          options={["Available", "Contract Pending", "Leased", "Dormant"]}
          value={status}
          handleSelectionChange={handleSelectionChange}
        />
        {((status as unknown) === "available" ||
          (status as unknown) === "contract pending") && (
          <div className="mt-3 flex items-center justify-center gap-2 text-xs font-[600]">
            Still Available?
            <Button
              isIconOnly
              className="rounded-md border-0 bg-white p-1 shadow-large"
            >
              <FaRegCheckCircle className="text-xl text-green-500" />
            </Button>
            <Button
              isIconOnly
              className="rounded-md border-0 bg-white p-1 shadow-large"
            >
              <FaRegTimesCircle
                className="text-xl text-red-500"
                onClick={() => setValue("leased")}
              />
            </Button>
          </div>
        )}
      </>
    );
};

export default PropertyStatus;
