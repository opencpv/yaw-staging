"use client";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

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
      <div
        className={
          "rounded-md bg-primary px-2 py-3 text-center text-xl font-[600] text-white"
        }
      >
        {title}
      </div>
      <div
        className={cn("bg-white px-2 py-3 pt-4 shadow-lg", classNames?.body)}
      >
        {children}
      </div>
    </div>
  );
};

export default SideContent;
