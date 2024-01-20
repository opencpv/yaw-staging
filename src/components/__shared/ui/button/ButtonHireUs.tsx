import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import Button from "./Button";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

type Props = {
  className?: string;
};

const ButtonHireUs = ({ className }: Props) => {
  const setToggle = useMenuStore((state) => state.setToggle);

  return (
    <Link href="/login">
      <button
        onClick={() => setToggle(false)}
        className={cn(
          `hidden h-14 w-64 items-center justify-center rounded-lg border border-white bg-primary-400 px-8 py-4 text-lg font-[600] capitalize text-white hover:bg-neutral-300 hover:text-neutral-600 md:flex lg:inline-flex`,
          className,
        )}
      >
        Hire Us
      </button>
    </Link>
  );
};

export default ButtonHireUs;
