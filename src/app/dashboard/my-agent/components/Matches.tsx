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
    <div className="flex flex-col gap-8 mt-10 w-full ">
      <p className="text-[1.25rem] lg:text-[1.5625rem] font-semibold">
        Your Matches
      </p>

      <div className="">
        <InfoText content="Lorem ipsum dolor sit amet consectetur. Consequat elementum consequat interdum integer imperdiet nisl. Ipsum eu eu tortor enim est mauris in sem. Eget dignissim risus diam consectetur magna. Non." />
      </div>
      <div className=" lg:border-[1px] border-[#E6E6E6] flex flex-col gap-2">
        <div className="hidden lg:grid grid-cols-4 text-white bg-primary-400 py-[1rem] px-[0.63rem] text-center font-semibold">
          <div className=" text-center ">Property</div>
          <div className="text-center">Completed</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>

        <div className="hidden lg:flex flex-col ">
          {Array.from({ length: 5 }).map((r, index) => (
            <PropertyRow key={index} />
          ))}
        </div>

        <div className="flex flex-col lg:hidden gap-5">
          {Array.from({ length: 5 }).map((r, index) => (
            <PropertyRowSm key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const PropertyRowSm = () => {
  const [active, setActive] = useState<"rent" | "virtual" | "live">("rent");
  return (
    <div
      className={`lg:grid grid-cols-4 hover:bg-primary-300 cursor-pointer px-[10px]  flex flex-col border-[1px] border-[#396261] bg-]#396261] py-4 rounded-lg
    ${styles.property_matches_card}
    `}>
      <div className="flex flex-col gap-4">
        <p className="font-bold">Property</p>
        <div className="flex justify-between items-between  ">
          <div className="relative w-full aspect-[65/50] rounded-lg max-w-[65px] overflow-hidden ">
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
              <p className="text-[#B0B0B0] text-[0.8125rem]">Property Title</p>
            </div>

            <p className="text-[0.8125rem] text-shade-200 font-bold">
              GHS 3000
            </p>
          </div>
        </div>
        <div
          className="flex justify-between items-center  border-b-[1px] border-b-[#E6E6E6] py-2 
        border-t-[1px] border-t-[#E6E6E6]
        ">
          <p>Completed</p>
          <div className="flex flex-col text-center items-center justify-center">
            <p className="font-semibold">15 Aug. 2023 13:55pm</p>
            <p className="text-shade-100 text-[0.625rem]">20 days ago</p>
          </div>
        </div>
        <p className="font-bold">Actions</p>
        <div className="flex flex-col gap-2 justify-center items-center border-b-[1px] border-b-[#E6E6E6] py-2">
          <div
            className="w-full flex items-center justify-center"
            onClick={() => setActive("rent")}>
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
      className={`grid grid-cols-4 hover:bg-primary-300 cursor-pointer px-4
    ${styles.property_matches_card}
    `}>
      <div className="flex gap-[0.62rem] p-2.5">
        <div className="relative w-full aspect-[142/92] rounded-lg max-w-[142px] overflow-hidden ">
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
            <p className="text-[#B0B0B0] text-[0.8125rem]">Property Title</p>
          </div>

          <p className="text-[0.8125rem] text-shade-200 font-bold">GHS 3000</p>
        </div>
      </div>
      <div className="flex flex-col text-center items-center justify-center">
        <p className="font-semibold">15 Aug. 2023 13:55pm</p>
        <p className="text-shade-100 text-[0.625rem]">20 days ago</p>
      </div>
      <div className="col-span-2  w-full flex flex-col items-center justify-center">
        <div className="grid grid-cols-3 lg:gap-x-5 items-center justify-center w-full">
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
