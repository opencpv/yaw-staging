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
import ButtonDelete from "@/components/__shared/ui/button/ButtonDelete";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";
import { useDisclosure } from "@nextui-org/react";
import { ManagePropertiesInterface } from "../../../../../../interfaces";

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
      <tr className="h-fit border-b">
        {/* Property */}
        <td className="p-2 pt-3 ">
          <div className="flex gap-2">
            <div className="relative h-24 w-32">
              <Image
                src={image}
                alt={propertyTitle}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-lg"
              />
            </div>
            <div className="flex flex-col justify-between">
              <h4 className="text-sm font-[600] capitalize">{propertyTitle}</h4>
              <p className="mt-2 text-sm text-neutral-400">{propertyTitle}</p>
              <p className="mt-auto text-sm font-[700] text-neutral-500">
                GHS {formatPrice(price)}
              </p>
            </div>
          </div>
        </td>
        {/* Posted On */}
        <td className="p-2 pt-3 text-center align-middle">
          <h4 className="text-sm font-[600]">
            {formatDate(posted_on)} {formatTime(posted_on)}
          </h4>
          <small className="inline-block text-[0.6rem] text-neutral-400">
            {daysDifference < 1
              ? `Less Than A Day Ago`
              : `${daysDifference} Days Ago`}
          </small>
        </td>
        {/* Status */}
        <td className="pt-3 text-center align-middle">
          <PropertyStatus isPaidFor={isPaidFor} status={status} />
        </td>
        {/* Actions */}
        <td className="flex h-full items-center justify-center pt-3">
          <div className="mt-10 flex gap-1.5">
            <Button
              isIconOnly
              className="flex w-6 items-center justify-center rounded-md bg-secondary-50 py-3 text-neutral-800"
            >
              <BiPencil className="text-xl" />
            </Button>
            <ButtonDelete onOpen={onOpen} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default PropertyRow;
