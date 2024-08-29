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
  const { setReportIssueHref } = useContactStore();

  return (
    <Link
      href="/contact/report"
      onClick={() => {
        onClick?.();
        setReportIssueHref(href);
      }}
      className={cn("text-2xl sm:text-[1.763rem]", className)}
    >
      Report Fraud
    </Link>
  );
};

export default ReportFraud;
