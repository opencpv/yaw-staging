"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/Status";

export type ItemPublicationStatus =
  | "active"
  | "inactive"
  | "suspended"
  | "archived";

type Props = {
  status: ItemPublicationStatus;
  isAvailable: boolean;
};

const PublicationStatus = ({ status, isAvailable }: Props) => {
  return (
    <>
      <Status
        variant={
          status === "active" && isAvailable
            ? "success"
            : status === "suspended"
              ? "warning"
              : status === "archived"
                ? "neutral-light"
                : status === "inactive" && !isAvailable
                  ? "neutral"
                  : undefined
        }
        tooltipContent={
          status === "suspended"
            ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
            : ""
        }
        text={
          status === "active" && isAvailable
            ? "Active"
            : status === "suspended"
              ? "Suspended"
              : status === "archived"
                ? "Archived"
                : status === "inactive" && !isAvailable
                  ? "Inactive"
                  : ""
        }
      />
    </>
  );
};

export default PublicationStatus;
