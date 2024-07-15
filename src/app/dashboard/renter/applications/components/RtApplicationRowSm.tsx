import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate } from "@/lib/utils/stringManipulation";
import RtApplicationStatus from "./RtApplicationStatus";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import capitalizeName from "@/lib/utils/stringManipulation";
import { useDisclosure } from "@nextui-org/react";
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";
import { RenterApplicationsInterface } from "../../../../../../interfaces";
import {
  TableBodySm,
  TableRowSm,
} from "../../../components/shared/table/Table";
import TbPropertyImageSm from "../../../components/shared/TbPropertyImageSm";
import PaymentStructure from "../../../components/shared/PaymentStructure";
import Rating from "../../../components/shared/Rating";
import DeleteButton from "@/components/__shared/ui/button/DeleteButton";
import EditButton from "@/components/__shared/ui/button/EditButton";
import MessageButton from "@/components/__shared/ui/button/MessageButton";
import { useAppStore } from "@/store/dashboard/AppStore";
import Avatar from "@/components/__shared/ui/avatar/Avatar";
import { cn } from "@/lib/utils";

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

  const { user } = useAppStore();

  return (
    <>
      <TableRowSm>
        {/* Property */}
        <TableBodySm href="/properties/2">
          <div className="flex flex-wrap gap-5 truncate xsm:flex-nowrap">
            <TbPropertyImageSm title={propertyTitle} image={propertyImage} />
            <div className="flex flex-col justify-between gap-2">
              <div className="flex flex-col gap-1 truncate lg:gap-[0.62rem]">
                <h4 className="truncate">Two Bed Room Apartment</h4>
                <p className="truncate text-[0.8125rem] text-[#B0B0B0]">
                  Assin Fosu
                </p>
              </div>
              <PaymentStructure
                monthlyPrice={3000}
                advancePayment="two years"
              />
            </div>
          </div>
        </TableBodySm>
        {/* Property owner */}
        <TableBodySm
          className={cn("grid grid-cols-2 items-center justify-between gap-5")}
        >
          <h4 className="text-shade-200">Contact</h4>
          <div className="ml-auto flex items-center gap-2">
            <Avatar
              image={user?.avatar_url as string}
              name={user?.firstname as string}
              size="sm"
            />
            <span className="min-w-max overflow-x-hidden font-semibold">
              Bernice
            </span>
          </div>
        </TableBodySm>
        {/* Status */}
        <TableBodySm
          className={cn("flex items-center justify-between gap-x-5 gap-y-3")}
        >
          <h4 className="text-shade-200">Status</h4>
          <RtApplicationStatus status={status} />
        </TableBodySm>
        {/* Date */}
        <TableBodySm className={cn("flex items-center justify-between")}>
          <h4 className="text-shade-200">Date</h4>
          <div className="flex flex-col items-center">
            <h4 className="text-sm">{formatDate(date)}</h4>
            <small className="inline-block text-[0.6rem] text-neutral-400">
              {daysDifference < 1
                ? `Less Than A Day Ago`
                : `${daysDifference} Days Ago`}
            </small>
          </div>
        </TableBodySm>
        {/* Actions */}
        <TableBodySm className={cn("flex items-center justify-end gap-1.5")}>
          {status === "incomplete" ? (
            <>
              <EditButton onOpen={() => ""} />
              <DeleteButton handleDestruction={() => {}} loading={false} />
            </>
          ) : (
            <MessageButton type={2} />
          )}
        </TableBodySm>
      </TableRowSm>
    </>
  );
};

export default RtApplicationRowSm;
