import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React, { useMemo } from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../components/Button";
import { formatPrice } from "@/lib/utils/formatPrice";
import { formatDate, formatTime } from "@/lib/utils/formatDatetime";
import ApplicationStatus from "./ApplicationStatus";
import { AiOutlineEye } from "react-icons/ai";

const ApplicationRow2 = ({
  propertyImage,
  applicantImage,
  applicantName,
  propertyTitle,
  date,
  propertyPrice,
}: ApplicationsInterface) => {
  const { images } = useAssets();

  const daysDifference = useMemo(() => {
    let firstDate: Date = new Date(date);
    let secondDate: Date = new Date(); // today;

    // Calculate the difference in milliseconds
    let timeDifference = secondDate.getTime() - firstDate.getTime();

    // Convert milliseconds to days (1 day = 24 hours * 60 minutes * 60 seconds * 1000 milliseconds)
    let daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

    return daysDifference;
  }, [date]);

  return (
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
          <p className="text-[600] text-sm">{applicantName}</p>
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
            {daysDifference} Days Ago
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
          <Button
            isIconOnly
            className="flex items-center justify-center w-full py-4 rounded-md bg-[#F1F1F1]"
          >
            <FiTrash2 className="text-xl text-red-500" />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationRow2;
