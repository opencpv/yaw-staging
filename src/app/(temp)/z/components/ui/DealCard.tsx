"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { cn } from "@/lib/utils";
type Props = {
  title: string;
  body: string;
  icon: string;
  className?: string;
};

const DealCard = ({ title, body, icon, className }: Props) => {
  return (
    <Link href="/about#t73yjgClfDUknQ==">
      <div
        className={cn(
          "flex w-full flex-col items-center gap-10 rounded-2xl border-t-5 border-shade-200/50 bg-shade-50 p-10 pb-12 pt-5 shadow-[0px_32px_64px_-12px_#00000024] transition-transform hover:translate-y-5",
          className,
        )}
      >
        <div className="group grid h-20 w-20 place-items-center rounded-md border border-shade-200/50">
          <Image
            src={icon}
            width={32}
            height={32}
            alt={"icon"}
            className="group-hover:animate-bounce"
          />
        </div>
        <div className="flex w-full max-w-sm flex-col items-center gap-2 text-center">
          <h4 className="font-bold leading-[-0.75rem] text-neutral-900">
            {title}
          </h4>
          <p className="text-base font-[600] text-shade-300">{body}</p>
        </div>
      </div>
    </Link>
  );
};

export default DealCard;
