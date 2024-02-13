import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { FiTrash2 } from "react-icons/fi";
import Button from "@/components/__shared/ui/button/Button";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate, formatTime } from "@/lib/utils/stringManipulation";
import ApplicationStatus from "./ApplicationStatus";
import { AiOutlineEye } from "react-icons/ai";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useDisclosure } from "@nextui-org/react";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";
import ButtonDelete from "@/components/__shared/ui/button/ButtonDelete";
import { ApplicationsInterface } from "../../../../../../interfaces";
import {
  TableBodySm,
  TableRowSm,
} from "../../../components/shared/table/Table";
import TbPropertyImageSm from "../../../components/shared/TbPropertyImageSm";
import PaymentStructure from "../../../components/shared/PaymentStructure";
import ViewButton from "@/components/__shared/ui/button/ViewButton";
import Rating from "../../../components/shared/Rating";

const LsApplicationRowSm = ({
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
      <TableRowSm>
        {/* Applicant */}
        <TableBodySm className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
          <div className="space-y-2">
            <h4 className="mb-3">Applicant</h4>
            <div className="relative h-16 w-16 shrink-0 rounded-full">
              <Image
                src={applicantImage}
                alt={applicantName}
                fill
                style={{ objectFit: "cover" }}
                className="shrink-0 rounded-full"
              />
            </div>
            <div className="flex flex-col justify-between gap-5 truncate">
              <p className="truncate text-sm text-[600]">
                {capitalizeName(applicantName, " ")}
              </p>
              <Rating rate={3.5} count={5} />
            </div>
          </div>
          {/* Status */}
          <div className="">
            <ApplicationStatus />
          </div>
        </TableBodySm>
        {/* Property */}
        <TableBodySm href="/properties/1" className="pt-3">
          <h4 className="mb-3">Property</h4>
          <div className="flex flex-wrap items-center gap-3">
            <TbPropertyImageSm image={propertyImage} title={propertyTitle} />
            <div className="">
              <h4 className="mb-1.5 text-sm font-[600] capitalize">
                {propertyTitle}
              </h4>
              <p className="mb-3 text-sm text-neutral-400">Assin Fosu</p>
              <PaymentStructure
                monthlyPrice={3000}
                advancePayment="two years"
              />
            </div>
          </div>
        </TableBodySm>
        {/* Date */}
        <TableBodySm className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 py-3.5">
          <h4>Date</h4>
          <div className="flex flex-col items-center justify-center gap-y-1">
            <h4 className="text-sm font-[600]">{formatDate(date)}</h4>
            <small className="inline-block text-[0.6rem] text-neutral-400">
              {daysDifference < 1
                ? `Less Than A Day Ago`
                : `${daysDifference} Days Ago`}
            </small>
          </div>
        </TableBodySm>
        {/* Actions */}
        {/* <TableBodySm className="flex justify-center gap-1.5 pt-3">
          <ButtonDelete onOpen={onOpen} />
        </TableBodySm> */}
      </TableRowSm>
    </>
  );
};

export default LsApplicationRowSm;
