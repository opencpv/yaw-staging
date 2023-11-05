import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React, { useMemo } from "react";
import { BiPencil } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../components/Button";
import PropertyStatus from "./PropertyStatus";
import { formatPrice } from "@/lib/utils/formatPrice";
import { formatDate, formatTime } from "@/lib/utils/formatDatetime";

const PropertyRow = ({
  status,
  image,
  propertyTitle,
  posted_on,
  price,
}: ManagePropertiesInterface) => {
  const { images } = useAssets();

  const daysDifference = useMemo(() => {
    let firstDate: Date = new Date(posted_on);
    let secondDate: Date = new Date(); // today;

    // Calculate the difference in milliseconds
    let timeDifference = secondDate.getTime() - firstDate.getTime();

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  }, [posted_on]);

  return (
    <tr className="border border-t-0 h-fit">
      {/* Property */}
      <td className="p-2 pt-3 ">
        <div className="flex gap-2">
          <div className="relative w-32 h-24">
            <Image
              src={image}
              alt={propertyTitle}
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between">
            <h4 className="capitalize font-[600] text-sm">{propertyTitle}</h4>
            <p className="mt-2 text-sm text-neutral-400">{propertyTitle}</p>
            <p className="text-sm text-neutral-500 font-[700] mt-auto">
              GHS {formatPrice(price)}
            </p>
          </div>
        </div>
      </td>
      {/* Posted On */}
      <td className="p-2 pt-3 text-center align-middle">
        <h4 className="font-[600] text-sm">
          {formatDate(posted_on)} {formatTime(posted_on)}
        </h4>
        <small className="inline-block text-neutral-400 text-[0.6rem]">
          {daysDifference} Days Ago
        </small>
      </td>
      {/* Status */}
      <td className="pt-3 text-center align-middle">
        <PropertyStatus status={status} />
      </td>
      {/* Actions */}
      <td className="flex items-center justify-center h-full pt-3">
        <div className="flex gap-1.5 mt-10">
          <Button
            isIconOnly
            className="flex items-center justify-center w-6 py-3 rounded-md bg-[#F1F1F1]"
          >
            <BiPencil className="text-xl" />
          </Button>
          <Button
            isIconOnly
            className="flex items-center justify-center w-6 py-3 rounded-md bg-[#F1F1F1]"
          >
            <FiTrash2 className="text-xl text-red-500" />
          </Button>
        </div>
      </td>
    </tr>
  );
};

export default PropertyRow;
