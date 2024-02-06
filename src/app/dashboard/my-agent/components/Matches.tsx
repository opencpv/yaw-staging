import Image from "next/image";
import CaAgentNoMatches from "./icons/CaAgentNoMatches";
import ScheduleVirtualTourModal from "./ScheduleVirtualTourModal";
import ScheduleLiveTourModal from "./ScheduleLiveTourModal";
import ApplicationForm from "@/app/components/application-form";
import styles from "../index.module.css";
import ViewModal from "./ViewModal";
import DeleteModal from "./DeleteModal";
import InfoText from "@/app/components/listing-form/components/InfoText";
import { useState } from "react";

export default function MatchesYet() {
  return (
    <section className="section flex w-full flex-col gap-8 ">
      <p className="text-[1.25rem] font-semibold lg:text-[1.5625rem]">
        Your Matches
      </p>

      <div>
        <InfoText content="Lorem ipsum dolor sit amet consectetur. Consequat elementum consequat interdum integer imperdiet nisl. Ipsum eu eu tortor enim est mauris in sem. Eget dignissim risus diam consectetur magna. Non." />
      </div>
      <div className=" flex flex-col gap-2 border-[#E6E6E6] lg:border-[1px]">
        <div className="hidden grid-cols-4 bg-primary-400 px-[0.63rem] py-[1rem] text-center font-semibold text-white lg:grid">
          <div className=" text-center ">Property</div>
          <div className="text-center">Completed</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>

        <div className="hidden flex-col lg:flex ">
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
  const [active, setActive] = useState<"rent" | "virtual" | "live">("rent");
  return (
    <div
      className={`bg-]#396261] flex cursor-pointer grid-cols-4 flex-col  rounded-lg border-[1px] border-[#396261] px-[10px] py-4 hover:bg-primary-300 lg:grid
    ${styles.property_matches_card}
    `}
    >
      <div className="flex flex-col gap-4">
        <p className="font-bold">Property</p>
        <div className="items-between flex justify-between  ">
          <div className="relative aspect-[65/50] w-full max-w-[65px] overflow-hidden rounded-lg ">
            <Image
              src={"/assets/images/niceHome.png"}
              fill
              alt="No saved search"
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col justify-between gap-2">
            <div className="flex flex-col gap-1 lg:gap-[0.62rem]">
              <p className="font-semibold">Property Title</p>
              <p className="text-[0.8125rem] text-[#B0B0B0]">Property Title</p>
            </div>

            <p className="text-[0.8125rem] font-bold text-shade-200">
              GHS 3000
            </p>
          </div>
        </div>
        <div
          className="flex items-center justify-between  border-b-[1px] border-t-[1px] border-b-[#E6E6E6] 
        border-t-[#E6E6E6] py-2
        "
        >
          <p>Completed</p>
          <div className="flex flex-col items-center justify-center text-center">
            <p className="font-semibold">15 Aug. 2023 13:55pm</p>
            <p className="text-shade-100 text-[0.625rem]">20 days ago</p>
          </div>
        </div>
        <p className="font-bold">Actions</p>
        <div className="flex flex-col items-center justify-center gap-2 border-b-[1px] border-b-[#E6E6E6] py-2">
          <div
            className="flex w-full items-center justify-center"
            onClick={() => setActive("rent")}
          >
            {" "}
            <ApplicationForm
              type="simple"
              green={active == "rent"}
              variant="agent-form"
            />
          </div>
          <div onClick={() => setActive("virtual")} className="w-full">
            <ScheduleVirtualTourModal active={active == "virtual"} />
          </div>{" "}
          <div onClick={() => setActive("live")} className="w-full">
            {" "}
            <ScheduleLiveTourModal active={active == "live"} />
          </div>{" "}
        </div>
        <div className="flex gap-5">
          <ViewModal />
          <DeleteModal />
        </div>
      </div>
    </div>
  );
};

const PropertyRow = () => {
  const [active, setActive] = useState<"rent" | "virtual" | "live">("rent");
  return (
    <div
      className={`grid cursor-pointer grid-cols-4 px-4 hover:bg-primary-300
    ${styles.property_matches_card}
    `}
    >
      <div className="flex gap-[0.62rem] p-2.5">
        <div className="relative aspect-[142/92] w-full max-w-[142px] overflow-hidden rounded-lg ">
          <Image
            src={"/assets/images/niceHome.png"}
            fill
            alt="No saved search"
            objectFit="cover"
          />
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex flex-col gap-[0.62rem]">
            <p className="font-semibold">Property Title</p>
            <p className="text-[0.8125rem] text-[#B0B0B0]">Property Title</p>
          </div>

          <p className="text-[0.8125rem] font-bold text-shade-200">GHS 3000</p>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center text-center">
        <p className="font-semibold">15 Aug. 2023 13:55pm</p>
        <p className="text-shade-100 text-[0.625rem]">20 days ago</p>
      </div>
      <div className="col-span-2  flex w-full flex-col items-center justify-center">
        <div className="grid w-full grid-cols-3 items-center justify-center lg:gap-x-5">
          <div onClick={() => setActive("rent")}>
            {" "}
            <ApplicationForm
              type="simple"
              green={active == "rent"}
              variant="agent-form"
            />
          </div>
          <div onClick={() => setActive("virtual")}>
            <ScheduleVirtualTourModal active={active == "virtual"} />
          </div>{" "}
          <div onClick={() => setActive("live")}>
            {" "}
            <ScheduleLiveTourModal active={active == "live"} />
          </div>{" "}
        </div>

        {/* i have not done the component that shows that that a live tour has been scheduled and displays the time */}
      </div>
    </div>
  );
};
