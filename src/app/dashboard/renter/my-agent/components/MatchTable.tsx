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
import { formatDate } from "@/lib/utils/stringManipulation";
import { useSearchParams } from "next/navigation";
import SchedulePhysicalTour from "./SchedulePhysicalTour";
import NoMatchState from "./NoMatchState";
import {
  useFetchAgentRequestById,
  useFetchAgentRequestMatches,
} from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Skeleton } from "@nextui-org/react";

export default function MatchTable() {
  const { user } = useAppStore();
  const searchParams = useSearchParams();
  const agentId = searchParams?.get("a")?.slice(6);
  const matchesRef = React.useRef<HTMLElement>(null);

  useEffect(() => {
    if (matchesRef.current && location.href.includes("sk=true")) {
      matchesRef?.current?.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  const { data: agentRequest, isLoading } = useFetchAgentRequestById({
    userId: user?.id as string,
    id: Number(agentId),
  });
  const { data: matches } = useFetchAgentRequestMatches({
    userId: user?.id as string,
    agentRequestId: Number(agentId),
  });

  return (
    <section
      className="flex w-full flex-col gap-8 pt-20"
      ref={matchesRef}
      id="agent-request-matches"
    >
      {isLoading ? (
        <Skeleton className="h-5 w-60 rounded-md" />
      ) : (
        <h3>{agentRequest?.search_title} Matches</h3>
      )}
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
          {matches?.length === 0 && (
            <TableBodyRow className="grid-cols-7">
              <TableBody className="col-span-full w-full">
                <NoMatchState />
              </TableBody>
            </TableBodyRow>
          )}
          {matches &&
            matches?.length > 0 &&
            matches?.map((match: MergedPropertyView) => (
              <MatchRow
                key={match.id as number}
                id={match.id as number}
                image={""}
                title={match.property_type + " at " + match.city}
                completedDate=""
                price={match.monthly_amount as number}
              />
            ))}
        </TableBodyRowGroup>
      </Table>

      <TableSm className="mx-auto">
        {matches?.length === 0 && (
          <TableRowSm>
            <TableBodySm>
              <NoMatchState />
            </TableBodySm>
          </TableRowSm>
        )}
        {matches &&
          matches?.length > 0 &&
          matches?.map((match: MergedPropertyView) => (
            <MatchRowMobile
              key={match.id}
              id={match.id as number}
              image={""}
              title={match.property_type + " at " + match.city}
              completedDate=""
              price={match.monthly_amount as number}
            />
          ))}
      </TableSm>
    </section>
  );
}

const MatchRowMobile = (data: {
  id: number;
  image: string;
  title: string;
  price: number;
  completedDate: string;
}) => {
  return (
    <TableRowSm>
      {/* Property */}
      <TableBodySm href="/properties/2">
        <div className="flex flex-wrap justify-between gap-5 truncate xsm:flex-nowrap">
          <TbPropertyImageSm
            title={data.title}
            image="/assets/images/niceHome.png"
          />
          <div className="flex flex-col justify-between gap-2">
            <h4 className="truncate">{data.title}</h4>
            <span className="text-shade-200">{formatPrice(data.price)}</span>
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

const MatchRow = (data: {
  id: number;
  image: string;
  title: string;
  price: number;
  completedDate: string;
}) => {
  return (
    <TableBodyRow className="grid-cols-7 gap-16 lg:max-llg:gap-8" gap="2rem">
      {/* Property */}
      <TableBody
        href="/properties/2"
        className="col-span-2 mx-0 flex gap-2 truncate"
      >
        <TbPropertyImage
          title={data.title}
          image="/assets/images/niceHome.png"
        />
        <div className="flex h-full flex-col justify-between gap-5">
          <h4 className="line-clamp-1 font-bold">{data.title}</h4>
          {/* <p className="-mt-2 truncate text-[0.8125rem] text-[#B0B0B0]">
            Assin Fosu
          </p> */}
          {/* <PaymentStructure monthlyPrice={3000} advancePayment="one year" /> */}
          <span className="text-shade-200">{formatPrice(data.price)}</span>
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
