import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { formatDate } from "@/lib/utils/stringManipulation";
import RtApplicationStatus from "./RtApplicationStatus";
import { useDaysDifference } from "@/lib/custom-hooks/useDaysDifference";
import capitalizeName from "@/lib/utils/stringManipulation";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import { RenterApplicationsInterface } from "../../../../../../interfaces";
import {
  TableBody,
  TableBodyRow,
} from "../../../components/shared/table/Table";
import TbPropertyImage from "../../../components/shared/TbPropertyImage";
import PaymentStructure from "../../../components/shared/PaymentStructure";
import Rating from "../../../components/shared/Rating";
import ButtonDelete from "@/components/__shared/ui/button/ButtonDelete";
import TbUserImage from "@/app/dashboard/components/shared/TbUserImage";
import ButtonMessage from "@/components/__shared/ui/button/ButtonMessage";
import { FaChartBar } from "react-icons/fa";
import { PiChatCenteredDots } from "react-icons/pi";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";

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
                <ButtonMessage
                  id=""
                  className="rounded-full bg-secondary-400 text-white"
                >
                  Message <PiChatCenteredDots />
                </ButtonMessage>
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
          <h4 className="text-sm font-[600]">{formatDate(date)}</h4>
          <small className="inline-block text-[0.6rem] text-neutral-400">
            {daysDifference < 1
              ? `Less Than A Day Ago`
              : `${daysDifference} Days Ago`}
          </small>
        </TableBody>
        {/* Status */}
        <TableBody className="col-span-1">
          <RtApplicationStatus status={status} />
        </TableBody>
        {/* Actions */}
        <TableBody className="col-span-1 mx-auto">
          <Popover style={{ zIndex: "99999" }} placement="left">
            <PopoverTrigger className="h-fit w-fit">
              <button className="col-span-1 ml-auto h-fit w-fit p-2">
                <BiDotsVerticalRounded />
              </button>
            </PopoverTrigger>
            <PopoverContent className="rounded-md">
              <div className="flex flex-col gap-2 divide-y rounded-md p-2 px-0">
                <button
                  className="flex w-full items-center gap-2 transition-all hover:scale-[1.02]"
                  onClick={() => ""}
                >
                  <span className="mr-auto">Edit</span>
                  <MdOutlineEdit />
                </button>
                <button
                  className="flex w-full items-center gap-2 pt-1  transition-all hover:scale-[1.02]"
                  onClick={onOpen}
                >
                  <span className="mr-auto">Delete</span>

                  <FiTrash2 />
                </button>
                <button
                  className="flex w-full items-center gap-2 transition-all hover:scale-[1.02]"
                  onClick={() => ""}
                >
                  <span className="mr-auto">Message</span>

                  <PiChatCenteredDots />
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </TableBody>
      </TableBodyRow>
    </>
  );
};

export default RtApplicationRow;
