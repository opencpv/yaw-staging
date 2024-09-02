"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/status";

export type RenterApplicationStatus =
  | "Accepted"
  | "Declined"
  | "Under Review"
  | "Incomplete";

type Props = {
  status: RenterApplicationStatus;
};

const RtApplicationStatus = ({ status }: Props) => {
  return (
    <Status
      tooltipContent={
        status === "Accepted"
          ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
          : status === "Declined"
            ? "The lister has declined your application. Continue your search or contact them directly with more questions."
            : status === "Under Review"
              ? "The lister has received your application and should respond shortly. Contact them directly if a response is delayed."
              : "Please submit form for review."
      }
      text={
        status === "Accepted"
          ? "Accepted"
          : status === "Declined"
            ? "Declined"
            : status === "Under Review"
              ? "Under review"
              : "Incomplete"
      }
      variant={
        status === "Accepted"
          ? "success"
          : status === "Declined"
            ? "danger"
            : status === "Under Review"
              ? "warning"
              : "danger"
      }
    />
  );
};

export default RtApplicationStatus;
