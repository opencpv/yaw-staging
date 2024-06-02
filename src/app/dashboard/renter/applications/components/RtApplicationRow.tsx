import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate } from "@/lib/utils/stringManipulation";
import RtApplicationStatus from "./RtApplicationStatus";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import capitalizeName from "@/lib/utils/stringManipulation";
import { RenterApplicationsInterface } from "../../../../../../interfaces";
import {
  TableBody,
  TableBodyRow,
} from "../../../components/shared/table/Table";
import TbPropertyImage from "../../../components/shared/TbPropertyImage";
import PaymentStructure from "../../../components/shared/PaymentStructure";
import RtApplicationAction from "./RtApplicationAction";

const RtApplicationRow = ({
  propertyImage,
  listerImage,
  propertyTitle,
  date,
  propertyPrice,
  listerName,
  status,
}: RenterApplicationsInterface) => {
  const { images } = useAssets();

  const daysDifference = useDaysDifference(date);

  return (
    <>
      <TableBodyRow className="grid-cols-5">
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
        {/* Property Owner */}
        {/* <TableBody className="col-span-1">
          <div className="flex items-center w-full gap-2 truncate" title={listerName}>
            <TbUserImage image={listerImage} name={listerName} />
            <div className="flex flex-col justify-between gap-5 truncate">
              <p className="truncate text-sm text-[600]">
                {capitalizeName(listerName, " ")}
              </p>
              <div className="flex items-center w-full gap-2">
                <MessageButton
                  id=""
                  className="rounded-full bg-secondary-400 text-white"
                >
                  Message <PiChatCenteredDots />
                </MessageButton>
                <Rating
                  rate={3.5}
                  count={5}
                  countClassName="lg:max-llg:hidden"
                />
              </div>
            </div>
          </div>
        </TableBody> */}
        {/* Posted On */}
        <TableBody className="col-span-1 text-center">
          <h4 className="text-sm">{formatDate(date)}</h4>
          <small className="inline-block text-[0.6rem] text-neutral-400">
            {daysDifference < 1
              ? `Less Than A Day Ago`
              : `${daysDifference} Days Ago`}
          </small>
        </TableBody>
        {/* Status */}
        <TableBody className="col-span-1 mx-auto">
          <RtApplicationStatus status={status} />
        </TableBody>
        {/* Actions */}
        <TableBody className="col-span-1 mx-auto">
          <RtApplicationAction
            status={status}
            id=""
            table="application_autosave"
          />
        </TableBody>
      </TableBodyRow>
    </>
  );
};

export default RtApplicationRow;
