import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {
  className?: string;
};

const ButtonStartHere = ({ className }: Props) => {
  return (
    <Link href="/login">
      <button
        className={cn(
          `hidden w-64 px-8 text-white items-center py-4 border h-14 border-white rounded-lg bg-primary-400 text-lg font-[600] capitalize md:flex justify-center hover:bg-neutral-300 hover:text-neutral-600 lg:inline-flex`,
          className
        )}
      >
        Hire Us
      </button>
    </Link>
  );
};

export default ButtonStartHere;
