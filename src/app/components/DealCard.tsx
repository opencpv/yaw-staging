"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
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
      className={`space-y-4 rounded-xl bg-white/30 px-8 pb-12 pt-6 shadow-lg w-full ${className}`}
    >
      <div className="grid w-16 h-16 bg-white rounded-full shadow-lg place-items-center">
        {icon}
      </div>
      <div className="w-full space-y-4 sm:w-10/12">
        <div className="flex gap-3">
          <div className="h-7 border-4 border-[#D7D12D]"></div>
          <h4 className="leading-[-0.75rem] text-neutral-900 text-base">{title}</h4>
        </div>
        <p className="font-[600] text-primary-600 text-sm">
          {body}
        </p>
        <ArrowLink href={`${href}`} text="Explore" color="#202457" />
      </div>
    </div>
  );
};

export default DealCard;
