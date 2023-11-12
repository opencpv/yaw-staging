import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "../../components/Button";
import { formatPrice } from "@/lib/utils/formatPrice";
import { formatDate, formatTime } from "@/lib/utils/formatDatetime";
import { AiOutlineEye } from "react-icons/ai";
import ApplicationStatus from "./ApplicationStatus";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";

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

  return (
    <tr className="border border-t-0 h-fit">
      {/* Applicant */}
      <td className="p-2 pt-3">
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
          <p className="text-[600] text-sm">{applicantName}</p>
        </div>
      </td>
      {/* Property */}
      <td className="p-2 pt-3 ">
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
      <td className="p-2 pt-3 text-center align-middle">
        <h4 className="font-[600] text-sm">
          {formatDate(date)} {formatTime(date)}
        </h4>
        <small className="inline-block text-neutral-400 text-[0.6rem]">
          {daysDifference} Days Ago
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
            className="flex items-center justify-center w-6 py-3 rounded-md bg-[#F1F1F1]"
          >
            <AiOutlineEye className="text-xl" />
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

export default ApplicationRow;
