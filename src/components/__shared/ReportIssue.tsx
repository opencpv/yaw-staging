import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  className?: string;
};

const ReportIssue = ({ href, className }: Props) => {
  return (
    <Link href={`${href}`} className={`text-red-500 font-[600] inline-block ${className}`}>
      Report issue
    </Link>
  );
};

export default ReportIssue;
