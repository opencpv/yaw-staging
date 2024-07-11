import ScheduleVirtualTour from "./ScheduleVirtualTour";
import ApplicationForm from "@/components/__shared/ui/application-form";
import CallOut from "@/components/__shared/ui/CallOut";
import React, { useEffect } from "react";
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
} from "../../../components/shared/table/Table";
import TbPropertyImageSm from "../../../components/shared/TbPropertyImageSm";
import TbPropertyImage from "../../../components/shared/TbPropertyImage";
import PaymentStructure from "../../../components/shared/PaymentStructure";
import { formatDate } from "@/lib/utils/stringManipulation";
import { useSearchParams } from "next/navigation";
import SchedulePhysicalTour from "./SchedulePhysicalTour";
import NoMatchState from "./NoMatchState";

export default function MatchTable() {
  const searchParams = useSearchParams();
  const agentId = searchParams?.get("a");
  const matchesRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (matchesRef.current && (location.href.includes("sk=true") || agentId)) {
      matchesRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, [agentId]);

  return (
    <section className="flex w-full flex-col gap-8 pt-20" ref={matchesRef}>
      <h3>Agent One Matches</h3>

      <div>
        <CallOut content="Lorem ipsum dolor sit amet consectetur. Consequat elementum consequat interdum integer imperdiet nisl. Ipsum eu eu tortor enim est mauris in sem. Eget dignissim risus diam consectetur magna. Non." />
      </div>
      {/* table */}
      <Table>
        <TableHeaderRow
          className="grid-cols-7 gap-16 lg:max-llg:gap-8"
          gap="2rem"
        >
          <TableHeader className="col-span-2">Property</TableHeader>
          <TableHeader className="col-span-1">Completed</TableHeader>
          <TableHeader className="col-span-4">Actions</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          {/* <TableBodyRow className="grid-cols-7">
            <TableBody className="w-full col-span-full">
               <NoMatchState />
            </TableBody>
          </TableBodyRow> */}
          {Array.from({ length: 4 }).map((r, index) => (
            <MatchRow key={index} />
          ))}
        </TableBodyRowGroup>
      </Table>

      <TableSm className="mx-auto">
        {/*
          <TableRowSm>
            <TableBodySm>
              <NoMatchState />
            </TableBodySm>
          </TableRowSm>
        */}
        {Array.from({ length: 4 }).map((r, index) => (
          <MatchRowMobile key={index} />
        ))}
      </TableSm>
    </section>
  );
}

const MatchRowMobile = () => {
  return (
    <TableRowSm>
      {/* Property */}
      <TableBodySm href="/properties/2">
        <div className="flex flex-wrap justify-between gap-5 truncate xsm:flex-nowrap">
          <TbPropertyImageSm
            title="Single Room at Assin Fosu"
            image="/assets/images/niceHome.png"
          />
          <div className="flex flex-col justify-between gap-2">
            <h4 className="truncate">Single Room</h4>
            <span className="text-shade-200">{formatPrice(30000)}</span>
          </div>
        </div>
      </TableBodySm>
      {/* Completed */}
      <TableBodySm className="flex items-center justify-between gap-5 pt-3">
        <h4 className="font-bold">Completed</h4>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold">{formatDate("15 Aug 2023")}</p>
        </div>
      </TableBodySm>
      {/* Actions */}
      <TableBodySm className="space-y-4 py-3">
        <h4 className="font-bold">Actions</h4>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-2">
          <div className="flex w-full items-center justify-center">
            {" "}
            <ApplicationForm type="simple" variant="agent-form" />
          </div>
          <div className="w-full">
            <ScheduleVirtualTour />
          </div>{" "}
          <div className="w-full">
            {" "}
            <SchedulePhysicalTour />
          </div>{" "}
        </div>
      </TableBodySm>
    </TableRowSm>
  );
};

const MatchRow = () => {
  return (
    <TableBodyRow className="grid-cols-7 gap-16 lg:max-llg:gap-8" gap="2rem">
      {/* Property */}
      <TableBody
        href="/properties/2"
        className="col-span-2 mx-0 flex gap-2 truncate"
      >
        <TbPropertyImage
          title="Single Room at Assin Fosu"
          image="/assets/images/niceHome.png"
        />
        <div className="flex h-full flex-col justify-between gap-5">
          <h4 className="line-clamp-1 font-bold">Single Room</h4>
          {/* <p className="-mt-2 truncate text-[0.8125rem] text-[#B0B0B0]">
            Assin Fosu
          </p> */}
          {/* <PaymentStructure monthlyPrice={3000} advancePayment="one year" /> */}
          <span className="text-shade-200">{formatPrice(30000)}</span>
        </div>
      </TableBody>
      {/* Completed */}
      <TableBody className="col-span-1 text-center">
        <p className="font-semibold">{formatDate("15 Aug 2022")}</p>
        {/* <p className="text-[0.625rem] text-shade-200">20 days ago</p> */}
      </TableBody>
      {/* Actions */}
      <TableBody className="col-span-4">
        <div className="grid w-full grid-cols-3 items-center justify-center lg:gap-x-5">
          <div>
            {" "}
            <ApplicationForm type="simple" variant="agent-form" />
          </div>
          <div>
            <ScheduleVirtualTour />
          </div>{" "}
          <div>
            {" "}
            <SchedulePhysicalTour />
          </div>{" "}
        </div>

        {/* i have not done the component that shows that that a live tour has been scheduled and displays the time */}
      </TableBody>
    </TableBodyRow>
  );
};
