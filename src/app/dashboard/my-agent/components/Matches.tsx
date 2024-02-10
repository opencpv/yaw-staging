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

export default function MatchesYet() {
  return (
    <section className="flex w-full flex-col gap-8 pt-28">
      <p className="text-[1.25rem] font-semibold lg:text-[1.5625rem]">
        Your Matches
      </p>

      <div>
        <InfoText content="Lorem ipsum dolor sit amet consectetur. Consequat elementum consequat interdum integer imperdiet nisl. Ipsum eu eu tortor enim est mauris in sem. Eget dignissim risus diam consectetur magna. Non." />
      </div>
      <div className=" flex flex-col gap-2">
        <div className="hidden grid-cols-6 items-center gap-16 bg-primary-400 px-[0.63rem] py-[1rem] text-center font-semibold text-white lg:grid">
          <div className="col-span-2 text-center">Property</div>
          <div className="col-span-1 text-center">Completed</div>
          <div className="col-span-3 text-center">Actions</div>
        </div>

        <div className="hidden flex-col divide-y lg:flex">
          {Array.from({ length: 5 }).map((r, index) => (
            <PropertyRow key={index} />
          ))}
        </div>

        <div className="flex flex-col gap-5 lg:hidden">
          {Array.from({ length: 5 }).map((r, index) => (
            <PropertyRowSm key={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

const PropertyRowSm = () => {
  const [active, setActive] = useState<
    "rent" | "virtual" | "in-person" | undefined
  >(undefined);

  return (
    <div
      className={`flex cursor-pointer grid-cols-4 flex-col rounded-lg border px-[10px] py-4 hover:bg-primary-300/20 lg:grid
    ${styles.property_matches_card}
    `}
    >
      <div className="flex flex-col gap-4 divide-y">
        {/* Property */}
        <div className="space-y-4">
          <h4>Property</h4>
          <div className="flex justify-between gap-5 truncate">
            <div className="relative aspect-video w-full max-w-[65px] shrink-0 rounded-lg">
              <Image
                src={"/assets/images/niceHome.png"}
                fill
                alt="No saved search"
                objectFit="cover"
                className="rounded-[inherit]"
              />
            </div>
            <div className="flex flex-col justify-between gap-2">
              <div className="flex flex-col gap-1 truncate lg:gap-[0.62rem]">
                <h4>Single Room</h4>
                <p className="text-[0.8125rem] text-[#B0B0B0]">Assin Fosu</p>
              </div>

              <p className="text-[0.8125rem] font-bold text-shade-200">
                GHS {formatPrice(3000)}
              </p>
            </div>
          </div>
        </div>
        {/* Completed */}
        <div className="flex items-center justify-between gap-5 pt-3">
          <h4 className="font-normal">Completed</h4>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="font-semibold">15 Aug. 2023 13:55pm</p>
            <p className="text-[0.625rem] text-shade-200">20 days ago</p>
          </div>
        </div>
        {/* Actions */}
        <div className="space-y-4 py-3">
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
        </div>
      </div>
    </div>
  );
};

const PropertyRow = () => {
  const [active, setActive] = useState<
    "rent" | "virtual" | "in-person" | undefined
  >(undefined);

  return (
    <div
      className={`grid cursor-pointer grid-cols-6 items-center gap-16 px-4 py-2 first:pt-0 hover:bg-primary-300/20
    `}
    >
      {/* Property */}
      <div className="col-span-2 flex gap-[0.62rem] truncate p-2.5">
        <div className="relative aspect-video w-full max-w-[150px] shrink-0 rounded-lg">
          <Image
            src={"/assets/images/niceHome.png"}
            fill
            alt="Single Room at Assin Fosu"
            objectFit="cover"
            className="rounded-[inherit]"
          />
        </div>
        <div className="flex flex-col justify-between gap-[0.62rem]">
          <h4 className="truncate font-semibold">Single Room</h4>
          <p className="-mt-2 truncate text-[0.8125rem] text-[#B0B0B0]">
            Assin Fosu
          </p>
          <div className="flex flex-wrap items-center gap-2 text-xs">
            <div className="w-fit">
              <p className="text-sm font-[700] text-neutral-900">
                GHS&nbsp;
                <span className="font-[500]">{formatPrice(3000)} / Month</span>
              </p>
            </div>
            <div className="flex w-full flex-1 items-center justify-between gap-x-2 gap-y-3">
              <small className="w-max rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs">
                One Year Advance
              </small>
            </div>
          </div>
        </div>
      </div>
      {/* Completed */}
      <div className="col-span-1 flex flex-col items-center justify-center text-center">
        <p className="font-semibold">15 Aug. 2023 13:55pm</p>
        <p className="text-[0.625rem] text-shade-200">20 days ago</p>
      </div>
      {/* Actions */}
      <div className="col-span-3 flex w-full flex-col items-center justify-center">
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
      </div>
    </div>
  );
};
