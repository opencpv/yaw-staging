import { cn } from "@/lib/utils";
import React from "react";
import { LinkButton } from ".";
import { useMenuStore } from "@/store/navmenu/useMenuStore";

type Props = {
  className?: string;
};

const GetStartedButton = ({ className }: Props) => {
  const setToggle = useMenuStore((state) => state.setToggle);

  return (
    <LinkButton
      href="/login"
      variant={"outline"}
      color="white"
      onClick={() => setToggle(false)}
      className={cn(
        `hidden items-center justify-center border-white px-[initial] text-lg font-[600] capitalize text-white hover:bg-neutral-300 hover:text-neutral-600 md:flex lg:inline-flex`,
        className,
      )}
    >
      Get started
    </LinkButton>
  );
};

export default GetStartedButton;
