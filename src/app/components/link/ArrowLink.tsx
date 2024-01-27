import Button from "@/components/__shared/ui/button/Button";
import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

type Props = {
  text: string;
  href?: string;
  color?: string;
  className?: string;
  onClick?: () => void;
};

const ArrowLink = ({ color, href, text, className, onClick }: Props) => {
  return (
    <Link
      href={href}
      className={cn(
        "mt-5 inline-flex items-center gap-2.5 transition-all hover:scale-[1.02]",
        className,
      )}
      style={{ color: color ?? "#222" }}
      onClick={onClick}
    >
      {text}
      <svg
        width="40"
        height="7"
        viewBox="0 0 40 7"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M40 3.5L35 0.613249V6.38675L40 3.5ZM0 4H35.5V3H0L0 4Z"
          fill={color ?? "#222"}
        />
      </svg>
    </Link>
  );
};

export default ArrowLink;
