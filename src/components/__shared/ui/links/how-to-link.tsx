import React from "react";
import Link from "next/link";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  onClick?: () => void;
};

const HowToLink = ({ className, onClick }: Props) => {
  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage,
  );

  return (
    <Link
      href="/faq"
      onClick={() => {
        onClick && onClick();
        setFaqActivePage("how to");
      }}
      className={cn("text-2xl", className)}
    >
      How To
    </Link>
  );
};

export default HowToLink;
