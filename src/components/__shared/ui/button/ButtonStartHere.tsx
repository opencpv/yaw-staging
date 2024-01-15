import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Button from "./Button";

type Props = {
  className?: string;
};

const ButtonStartHere = ({ className }: Props) => {
  return (
    <Link href={"/login"}>
      <Button
        className={cn(
          `hidden w-64 px-8 py-4 border h-14 border-white rounded-lg bg-primary-400 text-lg font-[600] capitalize md:flex justify-center hover:bg-neutral-300 hover:text-neutral-600 lg:inline-flex`,
          className
        )}
      >
        Start Here
      </Button>
    </Link>
  );
};

export default ButtonStartHere;
