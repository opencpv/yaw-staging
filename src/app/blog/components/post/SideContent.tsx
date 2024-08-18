"use client";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";
import React from "react";
import SideHeader from "../SideHeader";

const SideContent = ({
  title,
  className,
  children,
  classNames,
  link,
}: SideContentProps) => {
  const router = useRouter();
  return (
    <div
      className={cn(
        "no-print max-w-lg",
        className,
        `${link ? "cursor-pointer" : ""}`,
      )}
      onClick={() => link && router.push(link)}
    >
      <SideHeader>{title}</SideHeader>
      <div
        className={cn("bg-white px-2 py-3 pt-4 shadow-lg", classNames?.body)}
      >
        {children}
      </div>
    </div>
  );
};

export default SideContent;
