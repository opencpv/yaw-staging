"use client";
import React from "react";
import { FaHouseUser } from "react-icons/fa";
import { HiArrowLongRight } from "react-icons/hi2";
import Link from "next/link";
import { useTruncateNumber } from "@/lib/custom-hooks/useTruncateNumber";
import Image from "next/image";
import { CgArrowLongRight } from "react-icons/cg";

type Props = {
  location: string;
  description: string;
  propertyNumber: number;
  href: string;
  className?: string;
};

const PopularCitiesCard = ({
  location,
  description,
  propertyNumber,
  href,
  className
}: Props) => {
  const propertyNumTruncated = useTruncateNumber(propertyNumber);

  return (
    <div className={`relative flex min-h-[10rem] w-full items-center justify-center rounded-lg p-5 text-white sm:p-20 ${className}`}>
      <Image
        src="/assets/images/Stock.jpg"
        alt={location}
        fill
        style={{ objectFit: "cover" }}
        className="rounded-lg"
      />
      <div className="absolute left-0 top-0 h-full w-full rounded-lg bg-gradient-to-tl from-[#21A19F] to-[#131B1A] opacity-60"></div>

      <div className="relative z-10 space-y-3">
        <div className="space-y-3">
          <h2 className="font-[700]">{location}</h2>
          <small className="inline-block font-[700]">{description}</small>
        </div>
        <Link
          href={href}
          className="flex items-center gap-2 visited:no-underline hover:no-underline active:no-underline"
        >
          <div className="flex items-center gap-1 text-accent-50">
            <FaHouseUser />
            <span className="text-accent font-[700]">
              {propertyNumTruncated}
            </span>
          </div>
          <CgArrowLongRight className="text-white" />
        </Link>
      </div>
    </div>
  );
};

export default PopularCitiesCard;
