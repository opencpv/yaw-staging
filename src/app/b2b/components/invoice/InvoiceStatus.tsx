"use client";
import React from "react";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/__shared/ui/Tooltip";
import { HiOutlineBadgeCheck } from "react-icons/hi";
import { MdHourglassTop } from "react-icons/md";

export type RenterApplicationStatus = "paid" | "pending";

type Props = {
  status: RenterApplicationStatus;
};

const InvoiceStatus = ({ status }: Props) => {
  return (
    <>
      <Tooltip
        content={
          status === "paid"
            ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
            : "The lister has received your application and should respond shortly. Contact them directly if a response is delayed."
        }
      >
        <div
          className={cn(
            "flex min-w-40 shrink-0 items-center justify-center gap-2 rounded-full p-1.5 px-2.5 shadow-sm",
            {
              "bg-success-bg text-success": status === "paid",
              "bg-warning-bg text-warning": status === "pending",
            },
          )}
        >
          {status === "paid" ? (
            <HiOutlineBadgeCheck />
          ) : status === "pending" ? (
            <MdHourglassTop />
          ) : (
            <BsInfoCircle />
          )}
          <small className="text-xs">
            {status === "paid" && "Paid"}
            {status === "pending" && "pending"}
          </small>
        </div>
      </Tooltip>
    </>
  );
};

export default InvoiceStatus;
