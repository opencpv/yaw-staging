import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaRegEyeSlash } from "react-icons/fa6";

type Props = {
  count: number;
  href: string;
  className?: string;
};

const MatchCount = ({ count, href, className }: Props) => {
  return (
    <div
      className={cn(
        "mb-2 grid place-items-center rounded-xl border px-5 py-3",
        className,
      )}
    >
      <div className="flex w-full flex-wrap items-center justify-between gap-5">
        <Link href={href} className="underline-offset-2 hover:underline">
          <h4 className="text-[#00763A]">
            {count} {`${count > 1 ? "matches" : "matches"}`} found
          </h4>
        </Link>
        <Link href={href}>
          <div className="flex" title="20+ results not viewed">
            <FaRegEyeSlash size={28} />
            <div className="relative right-1 grid h-7 w-7 place-items-center rounded-full bg-[#B71851] p-1.5 text-xs text-white shadow-lg">
              20+
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MatchCount;
