"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { HiPrinter } from "react-icons/hi";
import { Button } from "../button";

/**
 * Prints the page
 */
const Print = ({ className }: { className?: string }) => {
  return (
    <Button asChild size={"fit"} variant={"ghost"}>
      <HiPrinter
        title="print"
        className={cn("cursor-pointer", className)}
        onClick={() => window.print()}
      />
    </Button>
  );
};

export default Print;
