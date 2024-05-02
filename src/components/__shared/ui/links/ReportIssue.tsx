"use client";
import { useContactStore } from "@/store/contact/useContactStore";
import { useLocalStorage } from "@uidotdev/usehooks";
import Link from "next/link";
import React, { useEffect } from "react";

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
      className={`inline-block font-[600] text-red-500 ${className}`}
      onClick={handleClick}
    >
      Report issue
    </Link>
  );
};

export default ReportIssue;
