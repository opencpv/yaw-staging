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
    <Button
      href="/login"
      onClick={() => setToggle(false)}
      color="primary"
      className={cn(
        `hidden h-14 w-64 items-center justify-center rounded-lg border border-white px-8 py-4 text-lg font-[600] capitalize hover:bg-neutral-300 hover:text-neutral-600 md:flex lg:inline-flex`,
        className,
      )}
    >
      Hire Us
    </Button>
  );
};

export default ButtonHireUs;
