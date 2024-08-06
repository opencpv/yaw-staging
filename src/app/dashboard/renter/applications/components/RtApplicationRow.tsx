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
import TbUserImage from "@/app/dashboard/components/shared/TbUserImage";
import MessageButton from "@/components/__shared/ui/button/MessageButton";
import { PiChatCenteredDots } from "react-icons/pi";
import Rating from "@/components/__shared/ui/ratings-form";
import { Button } from "@/components/__shared/ui/button";
import CaMessageIcon from "@/app/components/icons/CaMessageIcon";
import NoProfileUpload from "@/app/dashboard/components/shared/settings/NoProfileUpload";
import Loader from "@/components/__shared/ui/loader/Loader";

const RtApplicationRow = ({
  propertyImage,
  listerImage,
  propertyTitle,
  date,
  propertyPrice,
  listerName,
  status,
  submitted,
  applicationId,
  refetch,
}: RenterApplicationsInterface) => {
  const { images } = useAssets();

  const daysDifference = useDaysDifference(date);

  return (
    <>
      <TableBodyRow className="grid-cols-5">
        {/* Property */}
        <TableBody
          href="/properties/1"
          className="col-span-1 flex items-start gap-[0.62rem] truncate p-2.5 text-left"
        >
          <div className="relative aspect-square  w-[80px] shrink-0 rounded-lg">
            <Image
              src={propertyImage}
              fill
              alt={propertyTitle}
              objectFit="cover"
              className="rounded-[inherit]"
            />
          </div>

          <div className="truncate">
            <h3 className="truncate text-[16px] font-semibold">
              {propertyTitle}
            </h3>
            <p className="text-[13px] font-bold text-gray-text">
              GHS {propertyPrice}
            </p>
          </div>
        </TableBody>
        {/* Property Owner */}
        <TableBody className="col-span-1 flex items-center gap-2">
          <div className="relative aspect-square  w-10 shrink-0 rounded-lg">
            <Image
              src={listerImage as string}
              placeholder="blur"
              objectFit="cover"
              loading="eager"
              blurDataURL="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/4gHYSUNDX1BST0ZJTEUAAQEAAAHIAAAAAAQwAABtbnRyUkdCIFhZWiAH4AABAAEAAAAAAABhY3NwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAQAA9tYAAQAAAADTLQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAlkZXNjAAAA8AAAACRyWFlaAAABFAAAABRnWFlaAAABKAAAABRiWFlaAAABPAAAABR3dHB0AAABUAAAABRyVFJDAAABZAAAAChnVFJDAAABZAAAAChiVFJDAAABZAAAAChjcHJ0AAABjAAAADxtbHVjAAAAAAAAAAEAAAAMZW5VUwAAAAgAAAAcAHMAUgBHAEJYWVogAAAAAAAAb6IAADj1AAADkFhZWiAAAAAAAABimQAAt4UAABjaWFlaIAAAAAAAACSgAAAPhAAAts9YWVogAAAAAAAA9tYAAQAAAADTLXBhcmEAAAAAAAQAAAACZmYAAPKnAAANWQAAE9AAAApbAAAAAAAAAABtbHVjAAAAAAAAAAEAAAAMZW5VUwAAACAAAAAcAEcAbwBvAGcAbABlACAASQBuAGMALgAgADIAMAAxADb/2wBDABQODxIPDRQSEBIXFRQYHjIhHhwcHj0sLiQySUBMS0dARkVQWnNiUFVtVkVGZIhlbXd7gYKBTmCNl4x9lnN+gXz/2wBDARUXFx4aHjshITt8U0ZTfHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHx8fHz/wAARCAHPAzcDASIAAhEBAxEB/8QAGAABAQEBAQAAAAAAAAAAAAAAAAECAwb/xAAUEAEAAAAAAAAAAAAAAAAAAAAA/8QAFAEBAAAAAAAAAAAAAAAAAAAAAP/EABQRAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhEDEQA/APJAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAACAAAAIqAAAIqAAAAAIqAAAAAAAIqAAAAAAAoAAAAAAACooAAAAAAAAAAKAAAAAAADQAAAAAAACoAoAAAAAAAAAAAAAAAAAAAAAAAAAAACKgAAAACKgAAAACKgAACKgAAAACKgAAAAAACAAAAAAACiKAAAAAAAACgAAAAAAAAAKgCgAAAAA0AAAAAAAAAAqAKIoAAAAAAAAAAAAAAAAAAAAAICoAAAAAAIAAAAAACAAAAgAAAAAIAAAAAAACAAAAAAAAKgCgAAAAAAAKigAAAAAAAAAAAAAAogDYAAAAAAAAAAAAAAAKIAogCiAKIoAICiAKIAogCoAAAAAAAAgAAAAAAAgAAAIqAAAAAAgAAAAAACKgAAAAAAAAAAKIoAAAAAAAAKIAoAAAAAAAAAAAAANgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAIAAAAAIAAAAAAgAAAAAAAIAAAAAAAAAAAAAACiAKAAAAAAAAqAKIAoAAAAAAAAANiAKIAogCiAKIAogCiAKAAAAAAAACAogCiAKIAogAAAAAAAAAIAqAAAACAqAAAAAACAAAAAAAAgAAAAAAAAAAAAAAAAAACoAoigAAAAAAAAAAAAKgCiAKIA2AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAogCoAAAAAAICoAAAAAAAAgAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAKgCiAKAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAAAAAAAgCiAKIAAAAAAAAACAKIAAAAAAAAACAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAogCiAOgAAAAAAAAgCiAKIAqAAAAAAAAAAAAAAIAogAAAAAAAAAAAIAqAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA2AAAAAAAAAAAAAAAAAACAogCiAAAAAAAAAAAAICiAAAAAAAAAAAAgCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAgKIAogAAAAAAAAAAAAACAogAAAAAAAAAAAIAqAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYgCiAKIAAAAAAAAAAAAAAAAAAACAKgAAAAAAAAAAgKIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAKIAogCiAKIAogCiANgAAAAAAAAAAAAAAAAAAAAgKgAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICiAKIAqAAAAAAAAAAAAAAAAAAAAADYAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAogCoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAANgAAAAAAAAAAAAACAAAAAAAAAAAAAAAAACKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADYgCiAKIAogCiAKgAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoCCgIKAgoCgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgqAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAACooAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAigIAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAACgAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAKIoAAAAAAAAAAAAAAAAKAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAIqAAAAAAAAAAAAAAAAAAAAAAAAAAAKgCgAAAAAAAAAAAAAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAICoAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKAAAAAAAAAAACgAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACiAKIAogCgAAAoAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAioAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADQAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAACAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA//2Q=="
              alt={listerName as string}
              fill
              className="rounded-[inherit]"
            />
          </div>
          <div>
            <div className="flex flex-col gap-2">
              <h4>{listerName}</h4>
              <Button className=" items-center gap-2 bg-[#EEE]">
                <CaMessageIcon />
                <p className="text-gray-text">Message</p>
              </Button>
            </div>
          </div>
        </TableBody>
        {/* Posted On */}
        <TableBody className="col-span-1 text-center">
          <h4 className="text-base font-semibold">{formatDate(date)}</h4>
        </TableBody>

        {/* Status */}
        <TableBody className="col-span-1 mx-auto">
          <RtApplicationStatus status={status} />
        </TableBody>
        {/* Actions */}
        <TableBody className="col-span-1 mx-auto">
          <RtApplicationAction
            status={status}
            id={applicationId}
            table="application_autosave"
          />
        </TableBody>
      </TableBodyRow>
    </>
  );
};

export default RtApplicationRow;
