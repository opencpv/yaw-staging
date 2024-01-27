"use client";
import React from "react";
import Link from "next/link";
import { IoIosArrowRoundForward } from "react-icons/io";
import { CgArrowLongRight } from "react-icons/cg";
import ArrowLink from "./link/ArrowLink";
import AOSWrapper from "@/components/__shared/AOSWrapper";

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
          <AOSWrapper
            animation="fade-right"
            duration="1000"
            className="h-7 border-4 border-[#D7D12D]"
          ></AOSWrapper>
          <AOSWrapper animation="fade-left" duration="1000">
            <h4 className="text-base leading-[-0.75rem] text-neutral-900">
              {title}
            </h4>
          </AOSWrapper>
        </div>
        <AOSWrapper animation="fade-up" duration="1000" delay="500">
          <p className="text-sm font-[600] text-primary-600">{body}</p>
        </AOSWrapper>
        <ArrowLink href={`${href}`} text="Explore" color="#202457" />
      </div>
    </div>
  );
};

export default DealCard;
