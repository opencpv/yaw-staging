"use client";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  className?: string;
  children: React.ReactNode;
};

const AdditionalInfo = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        "mt-2 w-full rounded-xl border p-5 font-[500] text-neutral-800",
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AdditionalInfo;
