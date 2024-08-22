import React from "react";
import Link from "next/link";
import { useFaqHowToSwitchStore } from "@/store/faq/useFaqStore";

type Props = {
  className?: string;
  onClick?: () => void;
};

const FaqLink = ({ className, onClick }: Props) => {
  const setFaqActivePage = useFaqHowToSwitchStore(
    (state) => state.setActivePage,
  );

  return (
    <Link
      href="/faq"
      onClick={() => {
        onClick && onClick();
        setFaqActivePage("faq");
      }}
    >
      <h2 className={`${className}`}>FAQ</h2>
    </Link>
  );
};

export default FaqLink;
