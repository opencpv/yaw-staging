import Image from "next/image";
import CaAgentNoMatches from "./icons/CaAgentNoMatches";
import ScheduleVirtualTourModal from "./ScheduleVirtualTourModal";
import SchedulePhysicalTourModal from "./SchedulePhysicalTourModal";
import ApplicationForm from "@/app/components/application-form";
import styles from "../index.module.css";
import ViewModal from "./ViewModal";
import DeleteModal from "./DeleteModal";
import InfoText from "@/app/components/listing-form/components/InfoText";
import { useState } from "react";
import { formatPrice } from "@/lib/utils/numberManipulation";
import {
  Table,
  TableBody,
  TableBodyRow,
  TableBodyRowGroup,
  TableBodySm,
  TableHeader,
  TableHeaderRow,
  TableRowSm,
  TableSm,
} from "../../components/shared/table/Table";
import TbPropertyImageSm from "../../components/shared/TbPropertyImageSm";
import TbPropertyImage from "../../components/shared/TbPropertyImage";

export default function MatchesYet() {
  return (
    <section className="flex w-full flex-col gap-8 pt-28">
      <p className="text-[1.25rem] font-semibold lg:text-[1.5625rem]">
        Your Matches
      </p>

      <div>
        <InfoText content="Lorem ipsum dolor sit amet consectetur. Consequat elementum consequat interdum integer imperdiet nisl. Ipsum eu eu tortor enim est mauris in sem. Eget dignissim risus diam consectetur magna. Non." />
      </div>
      {/* table */}
      <Table>
        <TableHeaderRow className="grid-cols-6">
          <TableHeader className="col-span-2">Property</TableHeader>
          <TableHeader className="col-span-1">Completed</TableHeader>
          <TableHeader className="col-span-3">Actions</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          {Array.from({ length: 5 }).map((r, index) => (
            <PropertyRow key={index} />
          ))}
        </TableBodyRowGroup>
      </Table>

      <TableSm>
        {Array.from({ length: 5 }).map((r, index) => (
          <PropertyRowSm key={index} />
        ))}
      </TableSm>
    </section>
  );
}

const PropertyRowSm = () => {
  const [active, setActive] = useState<
    "rent" | "virtual" | "in-person" | undefined
  >(undefined);

  return (
    <TableRowSm>
      {/* Property */}
      <TableBodySm className="space-y-4">
        <h4>Property</h4>
        <div className="flex flex-wrap justify-between gap-5 truncate">
          <TbPropertyImageSm
            title="Single Room at Assin Fosu"
            image="/assets/images/niceHome.png"
          />
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-1 truncate lg:gap-[0.62rem]">
              <h4>Single Room</h4>
              <p className="text-[0.8125rem] text-[#B0B0B0]">Assin Fosu</p>
            </div>
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <div className="w-fit">
                <p className="text-sm font-[700]">
                  GHS&nbsp;
                  <span className="font-[500]">
                    {formatPrice(3000)} / Month
                  </span>
                </p>
              </div>
              <div className="flex w-full flex-1 items-center justify-between gap-x-2 gap-y-3">
                <small className="w-max rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs text-neutral-800">
                  One Year Advance
                </small>
              </div>
            </div>
          </div>
        </div>
      </TableBodySm>
      {/* Completed */}
      <TableBodySm className="flex items-center justify-between gap-5 pt-3">
        <h4 className="font-normal">Completed</h4>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold">15 Aug. 2023 13:55pm</p>
          <p className="text-[0.625rem] text-shade-200">20 days ago</p>
        </div>
      </TableBodySm>
      {/* Actions */}
      <TableBodySm className="space-y-4 py-3">
        <h4>Actions</h4>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-2">
          <div
            className="flex w-full items-center justify-center"
            onClick={() => setActive("rent")}
          >
            {" "}
            <ApplicationForm
              type="simple"
              green={active === "rent"}
              variant="agent-form"
              active={active === "rent"}
            />
          </div>
          <div onClick={() => setActive("virtual")} className="w-full">
            <ScheduleVirtualTourModal active={active == "virtual"} />
          </div>{" "}
          <div onClick={() => setActive("in-person")} className="w-full">
            {" "}
            <SchedulePhysicalTourModal active={active == "in-person"} />
          </div>{" "}
        </div>
      </TableBodySm>
    </TableRowSm>
  );
};

const PropertyRow = () => {
  const [active, setActive] = useState<
    "rent" | "virtual" | "in-person" | undefined
  >(undefined);

  return (
    <TableBodyRow className="grid-cols-6">
      {/* Property */}
      <TableBody className="col-span-2 flex gap-[0.62rem] truncate p-2.5">
        <TbPropertyImage
          title="Single Room at Assin Fosu"
          image="/assets/images/niceHome.png"
        />
        <div className="flex flex-col justify-between gap-[0.62rem]">
          <h4 className="truncate font-semibold">Single Room</h4>
          <p className="-mt-2 truncate text-[0.8125rem] text-[#B0B0B0]">
            Assin Fosu
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="w-fit">
              <p className="text-sm font-[700]">
                GHS&nbsp;
                <span className="font-[500]">{formatPrice(3000)} / Month</span>
              </p>
            </div>
            <div className="flex w-full flex-1 items-center justify-between gap-x-2 gap-y-3">
              <small className="w-max rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs text-neutral-800">
                One Year Advance
              </small>
            </div>
          </div>
        </div>
      </TableBody>
      {/* Completed */}
      <TableBody className="col-span-1 text-center">
        <p className="font-semibold">15 Aug. 2023 13:55pm</p>
        <p className="text-[0.625rem] text-shade-200">20 days ago</p>
      </TableBody>
      {/* Actions */}
      <TableBody className="col-span-3">
        <div className="grid w-full grid-cols-3 items-center justify-center lg:gap-x-5">
          <div onClick={() => setActive("rent")}>
            {" "}
            <ApplicationForm
              type="simple"
              green={active === "rent"}
              variant="agent-form"
              active={active === "rent"}
            />
          </div>
          <div onClick={() => setActive("virtual")}>
            <ScheduleVirtualTourModal active={active === "virtual"} />
          </div>{" "}
          <div onClick={() => setActive("in-person")}>
            {" "}
            <SchedulePhysicalTourModal active={active === "in-person"} />
          </div>{" "}
        </div>

        {/* i have not done the component that shows that that a live tour has been scheduled and displays the time */}
      </TableBody>
    </TableBodyRow>
  );
};
