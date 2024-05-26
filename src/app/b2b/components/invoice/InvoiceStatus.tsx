"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/Status";

export type RenterApplicationStatus = "paid" | "pending";

type Props = {
  status: RenterApplicationStatus;
};

const InvoiceStatus = ({ status }: Props) => {
  return (
    <>
      <Status
        variant={status === "paid" ? "success" : "warning"}
        tooltipContent={
          status === "paid"
            ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
            : "The lister has received your application and should respond shortly. Contact them directly"
        }
        text={status === "paid" ? "Paid" : "Pending"}
      />
    </>
  );
};

export default InvoiceStatus;
