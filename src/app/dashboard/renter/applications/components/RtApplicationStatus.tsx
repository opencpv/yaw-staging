"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/status";

export type RenterApplicationStatus =
  | "accepted"
  | "declined"
  | "under review"
  | "incomplete";

type Props = {
  status: RenterApplicationStatus;
};

const RtApplicationStatus = ({ status }: Props) => {
  return (
    <Status
      tooltipContent={
        status === "accepted"
          ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
          : status === "declined"
            ? "The lister has declined your application. Continue your search or contact them directly with more questions."
            : status === "under review"
              ? "The lister has received your application and should respond shortly. Contact them directly if a response is delayed."
              : "Please submit form for review."
      }
      text={
        status === "accepted"
          ? "Accepted"
          : status === "declined"
            ? "Declined"
            : status === "under review"
              ? "Under review"
              : "Incomplete"
      }
      variant={
        status === "accepted"
          ? "success"
          : status === "declined"
            ? "danger"
            : status === "under review"
              ? "warning"
              : "danger"
      }
    />
  );
};

export default RtApplicationStatus;
