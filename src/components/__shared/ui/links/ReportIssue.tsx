"use client";
import { useContactStore } from "@/store/contact/useContactStore";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const ReportIssue = ({ className }: Props) => {
  const href = location.href;
  const { setActiveKey, setReportIssueHref } = useContactStore();

  const handleClick = () => {
    setActiveKey("report");
    setReportIssueHref(href);
  };

  return (
    <Link
      href="/contact"
      className={`inline-block font-[600] text-sm text-red-500/80 ${className}`}
      onClick={handleClick}
    >
      Report issue
    </Link>
  );
};

export default ReportIssue;
