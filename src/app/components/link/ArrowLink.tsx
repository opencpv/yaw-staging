import Link from "next/link";
import React from "react";

type Props = {
  href: string;
  text: string;
  color?: string;
  tailwindColor?: string;
  className?: string;
};

const ArrowLink = ({ color, href, text, tailwindColor, className }: Props) => {
  return (
    <Link
      href={`${href}`}
      className={`inline-flex items-center gap-2.5 transition-all mt-5 ${
        tailwindColor && `text-${tailwindColor}`
      } hover:scale-105 ${className}`}
      style={{ color: color ? color : "#222" }}
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
          fill={color ? color : "#222"}
        />
      </svg>
    </Link>
  );
};

export default ArrowLink;
