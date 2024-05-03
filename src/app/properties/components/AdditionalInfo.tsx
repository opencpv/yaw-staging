"use client";
import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
  hidden?: boolean;
};

const AdditionalInfo = ({ children, className, hidden }: Props) => {
  return (
    <div
      className={cn(
        "mt-2 w-full rounded-xl border p-5 font-[500] text-neutral-800",
        {
          hidden,
        },
        className,
      )}
    >
      {children}
    </div>
  );
};

export default AdditionalInfo;
