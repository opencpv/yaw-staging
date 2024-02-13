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
import {
  ApplicationsInterface,
  ListerApplicationsInterface,
} from "../../../../../../interfaces";
import {
  TableBody,
  TableBodyRow,
} from "../../../components/shared/table/Table";
import TbPropertyImage from "../../../components/shared/TbPropertyImage";
import PaymentStructure from "../../../components/shared/PaymentStructure";
import ViewButton from "@/components/__shared/ui/button/ViewButton";
import Rating from "../../../components/shared/Rating";
import TbUserImage from "@/app/dashboard/components/shared/TbUserImage";

const LsApplicationRow = ({
  propertyImage,
  applicantImage,
  propertyTitle,
  date,
  propertyPrice,
  applicantName,
}: ListerApplicationsInterface) => {
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
      <TableBodyRow className="grid-cols-5">
        {/* Applicant */}
        <TableBody className="col-span-1">
          <div
            className="flex items-center gap-2 truncate"
            title={applicantName}
          >
            <TbUserImage image={applicantImage} name={applicantName} />
            <div className="flex flex-col justify-between gap-5 truncate">
              <p className="truncate text-sm text-[600]">
                {capitalizeName(applicantName, " ")}
              </p>
              <Rating rate={3.5} count={5} countClassName="lg:max-llg:hidden" />
            </div>
          </div>
        </TableBody>
        {/* Property */}
        <TableBody
          href="/properties/1"
          className="col-span-2 flex gap-[0.62rem] truncate p-2.5"
        >
          <TbPropertyImage title={propertyTitle} image={propertyImage} />
          <div className="flex flex-col justify-between gap-[0.62rem] truncate">
            <h4 className="truncate font-semibold" title="Single Room">
              Single Room
            </h4>
            <p
              className="-mt-2 truncate text-[0.8125rem] text-[#B0B0B0]"
              title="Assin Fosu"
            >
              Assin Fosu
            </p>
            <PaymentStructure monthlyPrice={3000} advancePayment="one year" />
          </div>
        </TableBody>
        {/* Posted On */}
        <TableBody className="col-span-1 text-center">
          <h4 className="text-sm font-[600]">{formatDate(date)}</h4>
          <small className="inline-block text-[0.6rem] text-neutral-400">
            {daysDifference < 1
              ? `Less Than A Day Ago`
              : `${daysDifference} Days Ago`}
          </small>
        </TableBody>
        {/* Status */}
        <TableBody className="col-span-1">
          <ApplicationStatus />
        </TableBody>
        {/* Actions */}
        {/* <TableBody className="col-span-1 flex items-center justify-center">
          <div className="flex gap-1.5">
            <ButtonDelete onOpen={onOpen} className="w-fit" />
          </div>
        </TableBody> */}
      </TableBodyRow>
    </>
  );
};

export default LsApplicationRow;
