"use client";
import React from "react";
import { useSelectDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { cn } from "@nextui-org/react";
import { BsInfoCircle } from "react-icons/bs";
import Tooltip from "@/components/__shared/ui/Tooltip";

export type ItemPublicationStatus =
  | "active"
  | "inactive"
  | "suspended"
  | "archived";

type Props = {
  status: ItemPublicationStatus;
  productStatus: "available" | "sold";
};

const PublicationStatus = ({ status, productStatus }: Props) => {
  return (
    <>
      <Tooltip
        content={
          status === "active"
            ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
            : status === "inactive"
              ? "The lister has declined your application. Continue your search or contact them directly with more questions."
              : status === "suspended"
                ? "The lister has received your application and should respond shortly. Contact them directly if a response is delayed."
                : "Please submit form for review."
        }
      >
        <div
          className={cn(
            "flex w-44 items-center justify-center rounded-full p-2 py-2.5 text-neutral-800 shadow-sm",
            {
              "bg-red-300": status === "inactive" && productStatus === "sold",
              "bg-primary-50":
                status === "active" && productStatus === "available",
              "bg-accent-500": status === "suspended",
              "bg-primary-200/20": status === "archived",
            },
          )}
        >
          <div className="flex items-center gap-5">
            <small className="text-xs">
              {status === "active" && productStatus === "available" && "Active"}
              {status === "inactive" && productStatus === "sold" && "Inactive"}
              {status === "suspended" && "Suspended"}
              {status === "archived" && "Archived"}
            </small>
            <BsInfoCircle />
          </div>
        </div>
      </Tooltip>
    </>
  );
};

export default PublicationStatus;
