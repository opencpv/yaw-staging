"use client";
import { cn } from "@/lib/utils";
import { useContactStore } from "@/store/contact/useContactStore";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

/**
 * Navigates to Report tab on contact us page and tries to get the current url
 */
const ReportIssue = ({ className }: Props) => {
  const href = location.href;
  const { setReportIssueHref } = useContactStore();

  const handleClick = () => {
    setReportIssueHref(href);
  };

  return (
    <Link
      href="/contact/report"
      className={cn(
        `inline-block w-fit text-sm font-[600] text-red-500/80`,
        className,
      )}
      onClick={handleClick}
    >
      Report issue
    </Link>
  );
};

export default ReportIssue;
