"use client";
import React from "react";
import Status from "@/components/__shared/ui/states/Status";
import ApplicationStatus from "./ApplicationStatus";

export type RenterApplicationStatus =
  | "ACCEPTED"
  | "DECLINED"
  | "UNDER REVIEW"
  | "INCOMPLETE";

type Props = {
  status: RenterApplicationStatus;
};

const RtApplicationStatus = ({ status }: Props) => {
  return (
    <ApplicationStatus
      tooltipContent={
        status === "ACCEPTED"
          ? "The lister has reviewed your application and should be in touch with you shortly. Check your messages or contact them directly if a response is delayed."
          : status === "DECLINED"
            ? "The lister has declined your application. Continue your search or contact them directly with more questions."
            : status === "UNDER REVIEW"
              ? "The lister has received your application and should respond shortly. Contact them directly if a response is delayed."
              : "Please submit form for review."
      }
      text={
        status === "ACCEPTED"
          ? "Accepted"
          : status === "DECLINED"
            ? "Declined"
            : status === "UNDER REVIEW"
              ? "Under review"
              : "Incomplete"
      }
      variant={status}
    />
  );
};

export default RtApplicationStatus;
