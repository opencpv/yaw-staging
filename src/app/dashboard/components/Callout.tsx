import { cn } from "@/lib/utils";
import React from "react";

type Props = {
  children: React.ReactNode;
  className?: string;
};

const Callout = ({ children, className }: Props) => {
  return (
    <div
      className={cn(
        `rounded-xl bg-[#FEF8ED] px-5 py-3 text-sm text-[#45808B]`,
        className,
      )}
    >
      {children}
    </div>
  );
};

export default Callout;
