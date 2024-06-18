import React from "react";
import Link from "next/link";
import { useContactStore } from "@/store/contact/useContactStore";

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
    >
      <h2 className={`${className}`}>Report Fraud</h2>
    </Link>
  );
};

export default ReportFraud;
