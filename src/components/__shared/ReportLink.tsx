import React from "react";
import Link from "next/link";
import { useContactStore } from "@/store/contact/useContactStore";

type Props = {
  className?: string;
  onClick?: () => void;
};

const ReportLink = ({ className, onClick }: Props) => {
  const setContactTabActiveKey = useContactStore((state) => state.setActiveKey);

  return (
    <Link
      href="/contact"
      onClick={() => {
        onClick && onClick();
        setContactTabActiveKey("report");
      }}
    >
      <h2 className={`${className}`}>Report Fraud</h2>
    </Link>
  );
};

export default ReportLink;
