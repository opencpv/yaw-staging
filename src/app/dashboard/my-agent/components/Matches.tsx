import Image from "next/image";
import CaAgentNoMatches from "./icons/CaAgentNoMatches";
import ScheduleVirtualTourModal from "./ScheduleVirtualTourModal";
import ScheduleLiveTourModal from "./ScheduleLiveTourModal";
import ApplicationForm from "@/app/components/application-form";

export default function MatchesYet() {
  return (
    <div className="flex flex-col gap-8 mt-10 w-full ">
      <p className="text-[1.5625rem] font-semibold">Your Matches</p>
      <div className=" border-[1px] border-[#E6E6E6] flex flex-col gap-2">
        <div className="grid grid-cols-4 text-white bg-primary-400 py-[1rem] px-[0.63rem] text-center font-semibold">
          <div className=" text-center ">Property</div>
          <div className="text-center">Completed</div>
          <div className="col-span-2 text-center">Actions</div>
        </div>

        <div className="flex flex-col ">
          {Array.from({ length: 5 }).map((r, index) => (
            <PropertyRow key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

const PropertyRow = () => {
  return (
    <div className="grid grid-cols-4 hover:bg-primary-300 cursor-pointer px-4">
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
        <div className="grid grid-cols-3 gap-x-5 items-center justify-center w-full">
          <ApplicationForm type="simple" variant="agent-form" />
          <ScheduleVirtualTourModal />
          <ScheduleLiveTourModal />
        </div>

        {/* i have not done the component that shows that that a live tour has been scheduled and displays the time */}
      </div>
    </div>
  );
};
