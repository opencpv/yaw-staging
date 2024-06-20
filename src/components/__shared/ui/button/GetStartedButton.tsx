import { cn } from "@/lib/utils";
import React from "react";
import Button from "./Button";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

type Props = {
  className?: string;
};

const GetStartedButton = ({ className }: Props) => {
  const setToggle = useMenuStore((state) => state.setToggle);

  return (
    <Button
      href="/login"
      onClick={() => setToggle(false)}
      color="primary"
      className={cn(
        `hidden h-12 items-center justify-center rounded-lg border border-white px-[initial] text-lg font-[600] capitalize  hover:bg-neutral-300 hover:text-neutral-600 md:flex lg:inline-flex`,
        className,
      )}
    >
      Get started
    </Button>
  );
};

export default GetStartedButton;
