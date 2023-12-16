import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import Button from "@/components/__shared/ui/button/Button";
import PropertyStatus from "./PropertyStatus";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate, formatTime } from "@/lib/utils/stringManipulation";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";

const PropertyRow2 = ({
  isPaidFor,
  status,
  image,
  propertyTitle,
  posted_on,
  price,
}: ManagePropertiesInterface) => {
  const { images } = useAssets();

  const daysDifference = useDaysDifference(posted_on)

  return (
    <>
      <div className="p-3 border border-neutral-600 rounded-xl xs:p-8">
        {/* Property */}
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
          <div className="">
            <h2 className="text-neutral-700 font-[600] mb-3">Property</h2>
            <div className="relative w-20 h-16 mb-2.5 sm:w-32 sm:h-24">
              <Image
                src={image}
                alt={propertyTitle}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <h4 className="capitalize font-[600] text-sm mb-1.5">
              {propertyTitle}
            </h4>
            <p className="mb-3 text-sm text-neutral-400">{propertyTitle}</p>
            <p className="text-sm text-neutral-500 font-[700]">
              GHS {formatPrice(price)}
            </p>
          </div>
          {/* Status */}
          <div className="">
            <PropertyStatus isPaidFor={isPaidFor} status={status} />
          </div>
        </div>
        <hr className="mt-2" />
        {/* Posted on */}
        <div className="flex flex-wrap justify-between items-center gap-x-5 gap-y-3 py-3.5">
          <h2 className="text-lg text-neutral-700 font-[700]">
            Posted on
          </h2>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h4 className="font-[600] text-sm">
              {formatDate(posted_on)} {formatTime(posted_on)}
            </h4>
            <small className="inline-block text-neutral-400 text-[0.6rem]">
              {daysDifference < 1 ? `Less Than A Day Ago` : `${daysDifference} Days Ago`}

            </small>
          </div>
        </div>
        <hr className="mt-2" />
        {/* Actions */}
        <div className="pt-3">
          <div className="flex gap-1.5">
            <Button
              isIconOnly
              className="flex items-center justify-center w-full py-4 rounded-md bg-[#F1F1F1]"
            >
              <BiPencil className="text-xl" />
            </Button>
            <Button
              isIconOnly
              className="flex items-center justify-center w-full py-4 rounded-md bg-[#F1F1F1]"
            >
              <FiTrash2 className="text-xl text-red-500" />
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default PropertyRow2;
