import React from "react";
import Link from "next/link";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";

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
    >
      <h2 className={`${className}`}>How To</h2>
    </Link>
  );
};

export default HowToLink;
