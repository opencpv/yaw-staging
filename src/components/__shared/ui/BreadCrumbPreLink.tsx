import Link from "next/link";
import React from "react";
import Button from "./button/Button";
import { cn } from "@/lib/utils";

type Props = {
  label: React.ReactNode;
  href?: string;
  className?: string;
  onClick?: () => void;
};

const BreadCrumbPreLink = ({ className, label, href, onClick }: Props) => {
  return (
    <Button
      variant="ghost"
      href={href}
      onClick={onClick}
      className={cn(
        "border-b border-warning-400 font-normal text-shade-200",
        className,
      )}
    >
      {label}
    </Button>
  );
};

export default BreadCrumbPreLink;
