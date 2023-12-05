import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { BiPencil } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import Button from "@/components/__shared/Button";
import PropertyStatus from "./PropertyStatus";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate, formatTime } from "@/lib/utils/stringManipulation";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import DeleteButton from "@/components/__shared/DeleteButton";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";
import { useDisclosure } from "@nextui-org/react";

const PropertyRow = ({
  isPaidFor,
  image,
  propertyTitle,
  posted_on,
  price,
  status,
}: ManagePropertiesInterface) => {
  const { images } = useAssets();
  const daysDifference = useDaysDifference(posted_on);

  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <DestructiveModal
        label="Are you sure you want to delete this property?"
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
      />
      <tr className="border-b h-fit">
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
            {daysDifference < 1 ? `Less Than A Day Ago` : `${daysDifference} Days Ago`}

          </small>
        </td>
        {/* Status */}
        <td className="pt-3 text-center align-middle">
          <PropertyStatus isPaidFor={isPaidFor} status={status} />
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
            <DeleteButton onOpen={onOpen} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default PropertyRow;
