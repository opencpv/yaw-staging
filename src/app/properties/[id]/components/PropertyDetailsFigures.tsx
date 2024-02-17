"use client";
import Tooltip from "@/components/ui/Tooltip";
import { formatPrice } from "@/lib/utils/numberManipulation";
import React from "react";
import { BsInfoCircle } from "react-icons/bs";

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
    <div className="grid grid-cols-1 justify-between divide-x-0 divide-y-1 divide-gray-400 rounded-xl border border-gray-500 bg-white px-10 py-8 text-sm text-primary-400 shadow-xl transition-all hover:scale-105 sm:grid-cols-4 sm:items-center sm:divide-x-1 sm:divide-y-0 sm:px-2">
      <div className="flex flex-col items-center gap-1 px-5 py-2 sm:py-0">
        <h4 className="flex items-center justify-center gap-x-4 text-center text-sm font-[400]">
          Monthly Rent{" "}
          <Tooltip content="Lorem ipsum dolor sit amet.">
            <BsInfoCircle size={16} className="inline" />
          </Tooltip>
        </h4>
        <p className="text-center sm:text-start">
          <span className="mr-2 font-[600]">GHS </span>
          {formatPrice(monthlyRent)}
        </p>
      </div>
      <div className="flex flex-col gap-1 px-5 py-2 sm:py-0">
        <h4 className="text-center text-sm font-[400] text-primary-400">
          Bedrooms
        </h4>
        <p className="text-center">{bedroomTotal}</p>
      </div>
      <div className="flex flex-col gap-1 px-5 py-2 sm:py-0">
        <h4 className="text-center text-sm font-[400] text-primary-400">
          Bathrooms
        </h4>
        <p className="text-center">{bathroomTotal}</p>
      </div>
      <div className="flex flex-col gap-1 px-5 py-2 sm:py-0">
        <h4 className="text-center text-sm font-[400] text-primary-400">
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
