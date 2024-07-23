import ScheduleVirtualTour from "./ScheduleVirtualTour";
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
import { formatDateOnly } from "@/lib/utils/stringManipulation";
import { useSearchParams } from "next/navigation";
import SchedulePhysicalTour from "./SchedulePhysicalTour";
import NoMatchState from "./NoMatchState";
import {
  useFetchAgentRequestById,
  useFetchAgentRequestMatches,
} from "../services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { Skeleton } from "@nextui-org/react";
import TableSkeleton from "@/app/dashboard/components/shared/skeleton/TableSkeleton";
import { cn } from "@/lib/utils";
import RentIt from "./RentIt";

type Match = AgentRequestMatch & {
  property: {
    id: number;
    city: string;
    monthly_amount: number;
    property_type: string;
  };
};

export default function MatchTable() {
  const { user } = useAppStore();
  const searchParams = useSearchParams();
  const agentId = searchParams?.get("a")?.slice(3);
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
  const { data: matches, isLoading: isLoadingMatches } =
    useFetchAgentRequestMatches({
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
        <h3 className={cn({ hidden: !matches })}>
          {agentRequest?.search_title} Matches
        </h3>
      )}
      <div className={cn({ hidden: !matches })}>
        <CallOut content="Lorem ipsum dolor sit amet consectetur. Consequat elementum consequat interdum integer imperdiet nisl. Ipsum eu eu tortor enim est mauris in sem. Eget dignissim risus diam consectetur magna. Non." />
      </div>
      {/* table */}
      <Table className={cn("min-h-80", { "lg:hidden": !matches })}>
        <TableHeaderRow
          className="grid-cols-7 gap-16 lg:max-llg:gap-8"
          gap="2rem"
        >
          <TableHeader className="col-span-2">Property</TableHeader>
          <TableHeader className="col-span-1">Completed</TableHeader>
          <TableHeader className="col-span-4">Actions</TableHeader>
        </TableHeaderRow>
        <TableBodyRowGroup>
          {isLoadingMatches && <TableSkeleton rows={3} columns={7} />}
          {matches?.length === 0 && (
            <TableBodyRow className="grid-cols-7">
              <TableBody className="col-span-full w-full">
                <NoMatchState />
              </TableBody>
            </TableBodyRow>
          )}
          {matches &&
            matches?.length > 0 &&
            matches?.map((match: Match) => (
              <MatchRow key={match.id as number} match={match} />
            ))}
        </TableBodyRowGroup>
      </Table>

      <TableSm className={cn("mx-auto min-h-80", { hidden: !matches })}>
        {matches?.length === 0 && (
          <TableRowSm>
            <TableBodySm>
              <NoMatchState />
            </TableBodySm>
          </TableRowSm>
        )}
        {matches &&
          matches?.length > 0 &&
          matches?.map((match: Match) => (
            <MatchRowMobile key={match.id} match={match} />
          ))}
      </TableSm>
    </section>
  );
}

const MatchRowMobile = ({ match }: { match: Match }) => {
  return (
    <TableRowSm>
      {/* Property */}
      <TableBodySm href={`/properties/${match.property.id}`}>
        <div className="flex flex-wrap justify-between gap-5 truncate xsm:flex-nowrap">
          <TbPropertyImageSm
            title={match.property.property_type + " at " + match.property.city}
            image="/assets/images/niceHome.png"
          />
          <div className="flex flex-col justify-between gap-2">
            <h4 className="truncate">
              {match.property.property_type + " at " + match.property.city}
            </h4>
            <span className="text-shade-200">
              {formatPrice(match.property.monthly_amount as number)}
            </span>
          </div>
        </div>
      </TableBodySm>
      {/* Completed */}
      <TableBodySm className="flex items-center justify-between gap-5 pt-3">
        <h4 className="font-bold">Completed</h4>
        <div className="flex flex-col items-center justify-center text-center">
          <p className="font-semibold">
            {formatDateOnly(match.completed_at as string)}
          </p>
        </div>
      </TableBodySm>
      {/* Actions */}
      <TableBodySm className="space-y-4 py-3">
        <h4 className="font-bold">Actions</h4>
        <div className="mx-auto flex w-full max-w-sm flex-col items-center justify-center gap-2">
          <RentIt match={match} />
          <ScheduleVirtualTour match={match} />
          <SchedulePhysicalTour match={match} />
        </div>
      </TableBodySm>
    </TableRowSm>
  );
};

const MatchRow = ({ match }: { match: Match }) => {
  return (
    <TableBodyRow className="grid-cols-7 gap-16 lg:max-llg:gap-8" gap="2rem">
      {/* Property */}
      <TableBody
        href={`/properties/${match.property.id}`}
        className="col-span-2 mx-0 flex gap-2 truncate"
      >
        <TbPropertyImage
          title={match.property.property_type + " at " + match.property.city}
          image="/assets/images/niceHome.png"
        />
        <div className="flex h-full flex-col justify-between gap-5">
          <h4 className="line-clamp-1 font-bold">
            {match.property.property_type + " at " + match.property.city}
          </h4>
          {/* <p className="-mt-2 truncate text-[0.8125rem] text-[#B0B0B0]">
            Assin Fosu
          </p> */}
          {/* <PaymentStructure monthlyPrice={3000} advancePayment="one year" /> */}
          <span className="text-shade-200">
            {formatPrice(match.property.monthly_amount as number)}
          </span>
        </div>
      </TableBody>
      {/* Completed */}
      <TableBody className="col-span-1 text-center">
        <p className="font-semibold">
          {formatDateOnly(match.completed_at as string)}
        </p>
        {/* <p className="text-[0.625rem] text-shade-200">20 days ago</p> */}
      </TableBody>
      {/* Actions */}
      <TableBody className="col-span-4">
        <div className="grid w-full grid-cols-3 items-center justify-center lg:gap-x-5">
          <RentIt match={match} />
          <ScheduleVirtualTour match={match} />
          <SchedulePhysicalTour match={match} />
        </div>
      </TableBody>
    </TableBodyRow>
  );
};
