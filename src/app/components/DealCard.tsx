"use client";
import React from "react";
import ArrowLink from "./link/ArrowLink";

type Props = {
  title: string;
  href: string;
  body: string;
  icon: React.ReactNode;
  className?: string;
};

const DealCard = ({ title, body, href, icon, className }: Props) => {
  return (
    <div
      className={`w-full space-y-4 rounded-xl bg-white/30 px-8 pb-12 pt-6 shadow-lg ${className}`}
    >
      <div className="grid h-16 w-16 place-items-center rounded-full bg-white shadow-lg">
        {icon}
      </div>
      <div className="w-full space-y-4 sm:w-10/12">
        <div className="flex gap-3">
          <div className="h-7 border-4 border-[#D7D12D]"></div>
          <h4 className="text-base leading-[-0.75rem] text-neutral-900">
            {title}
          </h4>
        </div>
        <p className="text-sm font-[600] text-primary-600">{body}</p>
        <ArrowLink href={`${href}`} text="Explore" color="#202457" />
      </div>
    </div>
  );
};

export default DealCard;
