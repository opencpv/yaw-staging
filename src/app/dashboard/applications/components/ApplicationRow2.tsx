import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "@/components/__shared/Button";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate, formatTime } from "@/lib/utils/stringManipulation";
import ApplicationStatus from "./ApplicationStatus";
import { AiOutlineEye } from "react-icons/ai";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useDisclosure } from "@nextui-org/react";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";
import DeleteButton from "@/components/__shared/DeleteButton";

const ApplicationRow2 = ({
  propertyImage,
  applicantImage,
  applicantName,
  propertyTitle,
  date,
  propertyPrice,
}: ApplicationsInterface) => {
  const { images } = useAssets();
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  const daysDifference = useDaysDifference(date);

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
      />
      <div className="p-3 border border-neutral-600 rounded-xl xs:p-8">
        {/* Applicant */}
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5">
          <div className="space-y-2">
            <h2 className="text-neutral-700 font-[600] mb-3">Applicant</h2>
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
          {/* Status */}
          <div className="">
            <ApplicationStatus />
          </div>
        </div>
        <hr className="mt-2" />
        {/* Property */}
        <div className="flex flex-wrap items-center justify-between gap-y-3 gap-x-5 py-3.5">
          <div className="">
            <h2 className="text-neutral-700 font-[600] mb-3">Property</h2>
            <div className="flex flex-wrap items-center gap-3">
              <div className="relative w-20 h-16 mb-2.5 sm:w-32 sm:h-24">
                <Image
                  src={propertyImage}
                  alt={propertyTitle}
                  fill
                  style={{ objectFit: "cover" }}
                  className="rounded-lg"
                />
              </div>
              <div className="">
                <h4 className="capitalize font-[600] text-sm mb-1.5">
                  {propertyTitle}
                </h4>
                <p className="mb-3 text-sm text-neutral-400">{propertyTitle}</p>
                <p className="text-sm text-neutral-500 font-[700]">
                  GHS {formatPrice(propertyPrice)}
                </p>
              </div>
            </div>
          </div>
        </div>
        <hr className="mt-2" />
        {/* Date */}
        <div className="flex flex-wrap justify-between items-center gap-x-5 gap-y-3 py-3.5">
          <h2 className="text-lg text-neutral-700 font-[700]">Date</h2>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h4 className="font-[600] text-sm">
              {formatDate(date)} {formatTime(date)}
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
              <AiOutlineEye className="text-xl" />
            </Button>
            <DeleteButton onOpen={onOpen} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ApplicationRow2;
