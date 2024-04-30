"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
type Props = {
  title: string;
  href: string;
  body: string;
  icon: string;
  className?: string;
};

const DealCard = ({ title, body, href, icon, className }: Props) => {
  return (
    <Link href={href}>
      <div
        className={cn(
          "flex w-full flex-col items-center gap-10 rounded-2xl border-t-3 border-gray-500/5 bg-white/60 p-10 pb-12 pt-5 shadow-[0px_32px_64px_-12px_#00000024]",
          className,
        )}
      >
        <div className="grid h-20 w-20 place-items-center bg-white">
          <Image src={icon} width={32} height={32} alt={"icon"} />
        </div>
        <div className="flex w-full max-w-sm flex-col items-center gap-2 text-center">
          <h4 className="text-base leading-[-0.75rem] text-neutral-900">
            {title}
          </h4>
          <p className="text-sm font-[600] text-shade-300">{body}</p>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
