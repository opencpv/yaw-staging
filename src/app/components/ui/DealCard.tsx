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
    <Link href={`/about?tag=${title}#t73yjgClfDUknQ==`}>
      <div
        className={cn(
          "border-y-5 flex w-full flex-col items-center gap-10 rounded-2xl border-shade-200/50 bg-shade-50 p-10 pb-12 pt-5 shadow-[0px_32px_64px_-12px_#00000024] transition-transform hover:translate-y-5",
          className,
        )}
      >
        <div className="grid h-20 w-20 place-items-center rounded-full border border-accent">
          <Image src={icon} width={32} height={32} alt={""} />
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
