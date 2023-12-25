import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import Button from "@/components/__shared/ui/button/Button";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate, formatTime } from "@/lib/utils/stringManipulation";
import { AiOutlineEye } from "react-icons/ai";
import ApplicationStatus from "./ApplicationStatus";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import capitalizeName from "@/lib/utils/stringManipulation";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";
import { useDisclosure } from "@nextui-org/react";
import ButtonDelete from "@/components/__shared/ui/button/ButtonDelete";

const ApplicationRow = ({
  propertyImage,
  applicantImage,
  propertyTitle,
  date,
  propertyPrice,
  applicantName,
}: ApplicationsInterface) => {
  const { images } = useAssets();

  const daysDifference = useDaysDifference(date);

  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
      />
      <tr className="border-b h-fit">
        {/* Applicant */}
        <td className="p-2 py-5">
          <div className="flex items-center gap-2">
            <div className="relative w-16 h-16 rounded-full">
              <Image
                src={applicantImage}
                alt={applicantName}
                fill
                style={{ objectFit: "cover" }}
                className="rounded-full"
              />
            </div>
            <p className="text-[600] text-sm">
              {capitalizeName(applicantName, " ")}
            </p>
          </div>
        </td>
        {/* Property */}
        <td className="p-2 py-5 ">
          <div className="flex gap-2">
            <div className="relative w-16 h-16">
              <Image
                src={propertyImage}
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
                GHS {formatPrice(propertyPrice)}
              </p>
            </div>
          </div>
        </td>
        {/* Posted On */}
        <td className="p-2 py-5 text-center align-middle">
          <h4 className="font-[600] text-sm">
            {formatDate(date)} {formatTime(date)}
          </h4>
          <small className="inline-block text-neutral-400 text-[0.6rem]">
            {daysDifference < 1 ? `Less Than A Day Ago` : `${daysDifference} Days Ago`}

          </small>
        </td>
        {/* Status */}
        <td className="pt-3 text-center align-middle">
          <ApplicationStatus />
        </td>
        {/* Actions */}
        <td className="flex items-center justify-center h-full -translate-y-4">
          <div className="flex gap-1.5 mt-10">
            <Button
              isIconOnly
              className="flex items-center justify-center text-neutral-800 w-6 py-3 rounded-md bg-[#F1F1F1]"
            >
              <AiOutlineEye className="text-xl" />
            </Button>
            <ButtonDelete onOpen={onOpen} />
          </div>
        </td>
      </tr>
    </>
  );
};

export default ApplicationRow;
