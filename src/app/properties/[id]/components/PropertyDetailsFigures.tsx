"use client";
import Tooltip from "@/components/ui/Tooltip";
import { formatPrice } from "@/lib/utils/numberManipulation";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

type Props = {
  monthlyRent: number;
  bedroomTotal: number;
  bathroomTotal: number;
  squareMeter: { from: number; to: number };
};

const PropertyDetailsFigures = ({
  monthlyRent,
  bedroomTotal,
  bathroomTotal,
  squareMeter,
}: Props) => {
  return (
    <div className="grid grid-cols-1 justify-between px-10 py-8 divide-y-1 divide-x-0 divide-gray-400 text-sm bg-white border border-gray-500 shadow-xl text-primary-400 rounded-xl transition-all hover:scale-105 sm:divide-x-1 sm:divide-y-0 sm:grid-cols-4 sm:items-center sm:px-2">
      <div className="px-5 py-2 space-y-1 sm:py-0">
        <h4 className="items-center justify-between text-center gap-x-4 font-[400] text-sm sm:flex sm:text-start">
          Monthly Rent{" "}
          <Tooltip content="Lorem ipsum dolor sit amet.">
            <span className="">
              <HiOutlineExclamationCircle className="inline text-lg rotate-180 sm:inline-flex" />
            </span>
          </Tooltip>
        </h4>
        <p className="text-center sm:text-start">
          <span className="mr-2 font-[600]">GHS </span>
          {formatPrice(monthlyRent)}
        </p>
      </div>
      <div className="px-5 py-2 space-y-1 sm:py-0">
        <h4 className="text-center text-primary-400 font-[400] text-sm">
          Bedrooms
        </h4>
        <p className="text-center">{bedroomTotal}</p>
      </div>
      <div className="px-5 py-2 space-y-1 sm:py-0">
        <h4 className="text-center text-primary-400 font-[400] text-sm">
          Bathrooms
        </h4>
        <p className="text-center">{bathroomTotal}</p>
      </div>
      <div className="px-5 py-2 space-y-1 sm:py-0">
        <h4 className="text-center text-primary-400 font-[400] text-sm">
          Square Meter
        </h4>
        <p className="text-center">
          {squareMeter.from} - {squareMeter.to} M<sup>2</sup>
        </p>
      </div>
    </div>
  );
};

export default PropertyDetailsFigures;
