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
import { ManagePropertiesInterface } from "../../../../../../interfaces";

const PropertyRow2 = ({
  isPaidFor,
  status,
  image,
  propertyTitle,
  posted_on,
  price,
}: ManagePropertiesInterface) => {
  const { images } = useAssets();

  const daysDifference = useDaysDifference(posted_on);

  return (
    <>
      <div className="rounded-xl border border-neutral-600 p-3 xs:p-8">
        {/* Property */}
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
          <div className="">
            <h2 className="mb-3 font-[600] text-neutral-700">Property</h2>
            <div className="relative mb-2.5 h-16 w-20 sm:h-24 sm:w-32">
              <Image
                src={image}
                alt={propertyTitle}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <h4 className="mb-1.5 text-sm font-[600] capitalize">
              {propertyTitle}
            </h4>
            <p className="mb-3 text-sm text-neutral-400">{propertyTitle}</p>
            <p className="text-sm font-[700] text-neutral-500">
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
        <div className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 py-3.5">
          <h2 className="text-lg font-[700] text-neutral-700">Posted on</h2>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h4 className="text-sm font-[600]">
              {formatDate(posted_on)} {formatTime(posted_on)}
            </h4>
            <small className="inline-block text-[0.6rem] text-neutral-400">
              {daysDifference < 1
                ? `Less Than A Day Ago`
                : `${daysDifference} Days Ago`}
            </small>
          </div>
        </div>
        <hr className="mt-2" />
        {/* Actions */}
        <div className="pt-3">
          <div className="flex gap-1.5">
            <Button
              isIconOnly
              className="flex w-full items-center justify-center rounded-md bg-[#F1F1F1] py-4"
            >
              <BiPencil className="text-xl" />
            </Button>
            <Button
              isIconOnly
              className="flex w-full items-center justify-center rounded-md bg-[#F1F1F1] py-4"
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
