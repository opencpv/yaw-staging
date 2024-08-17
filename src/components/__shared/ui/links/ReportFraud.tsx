import React from "react";
import Link from "next/link";
import { useContactStore } from "@/store/contact/useContactStore";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  onClick?: () => void;
};

const ReportFraud = ({ className, onClick }: Props) => {
  const href = location.href;
  const { setActiveKey: setContactTabActiveKey, setReportIssueHref } =
    useContactStore();

  return (
    <Link
      href="/contact"
      onClick={() => {
        onClick && onClick();
        setContactTabActiveKey("report");
        setReportIssueHref(href);
      }}
      className={cn("text-2xl", className)}
    >
      Report Fraud
    </Link>
  );
};

export default ReportFraud;
