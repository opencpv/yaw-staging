"use client";
import { useContactStore } from "@/store/contact/useContactStore";
import Link from "next/link";
import React from "react";

type Props = {
  className?: string;
};

const ReportIssue = ({ className }: Props) => {
  const setContactTabActiveKey = useContactStore((state) => state.setActiveKey);

  return (
    <Link
      href="/contact#c_ta#rea"
      className={`text-red-500 font-[600] inline-block ${className}`}
      onClick={() => setContactTabActiveKey("report")}
    >
      Report issue
    </Link>
  );
};

export default ReportIssue;
