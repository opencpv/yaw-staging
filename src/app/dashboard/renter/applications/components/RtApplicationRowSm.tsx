import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate } from "@/lib/utils/stringManipulation";
import RtApplicationStatus from "./RtApplicationStatus";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useDisclosure } from "@nextui-org/react";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";
import { RenterApplicationsInterface } from "../../../../../../interfaces";
import {
  TableBodySm,
  TableRowSm,
} from "../../../components/shared/table/Table";
import TbPropertyImageSm from "../../../components/shared/TbPropertyImageSm";
import PaymentStructure from "../../../components/shared/PaymentStructure";
import Rating from "../../../components/shared/Rating";
import ButtonDelete from "@/components/__shared/ui/button/ButtonDelete";
import EditButton from "@/components/__shared/ui/button/EditButton";
import ButtonMessage from "@/components/__shared/ui/button/ButtonMessage";

const RtApplicationRowSm = ({
  propertyImage,
  listerImage,
  listerName,
  propertyTitle,
  date,
  propertyPrice,
  status,
}: RenterApplicationsInterface) => {
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
        {/* Property */}
        <TableBodySm className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3">
          <div className="space-y-2">
            <h4 className="mb-3">Property</h4>
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
          {/* Status */}
          <div className="">
            <RtApplicationStatus status={status} />
          </div>
        </TableBodySm>
        {/* Property */}
        {/* <TableBodySm href="/properties/1" className="pt-3">
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
        </TableBodySm> */}
        {/* Date */}
        <TableBodySm className="flex flex-wrap items-center justify-between gap-x-5 gap-y-3 py-3.5">
          <h4>Received</h4>
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
        <TableBodySm className="flex justify-center gap-1.5 pt-3">
          <EditButton onOpen={() => ""} />
          <ButtonDelete onOpen={onOpen} />
          <ButtonMessage type={2} />
        </TableBodySm>
      </TableRowSm>
    </>
  );
};

export default RtApplicationRowSm;
