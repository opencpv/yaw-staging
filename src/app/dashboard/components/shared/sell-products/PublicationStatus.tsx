"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/Status";

export type ItemPublicationStatus =
  | "Active"
  | "Inactive"
  | "Suspended"
  | "Archived";

type Props = {
  status: ItemPublicationStatus;
  isAvailable: boolean;
};

const PublicationStatus = ({ status, isAvailable }: Props) => {
  return (
    <>
      <Status
        variant={
          status === "Active" && isAvailable
            ? "success"
            : status === "Suspended"
              ? "warning"
              : status === "Archived"
                ? "neutral-light"
                : status === "Inactive" && !isAvailable
                  ? "neutral"
                  : undefined
        }
        tooltipContent={
          status === "Suspended"
            ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
            : ""
        }
        text={
          status === "Active" && isAvailable
            ? "Active"
            : status === "Suspended"
              ? "Suspended"
              : status === "Archived"
                ? "Archived"
                : status === "Inactive" && !isAvailable
                  ? "Inactive"
                  : ""
        }
      />
    </>
  );
};

export default PublicationStatus;
