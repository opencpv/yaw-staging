import Link from "next/link";
import React from "react";

type Props = {
  label: React.ReactNode;
  href: string;
  className?: string;
};

const BreadCrumbPreLink = ({ className, label, href }: Props) => {
  return (
    <Link href={`${href}`} className={`border-b border-blue-700 ${className}`}>
      {label}
    </Link>
  );
};

export default BreadCrumbPreLink;
