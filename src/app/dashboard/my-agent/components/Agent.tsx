import Image from "next/image";
import EditModal from "./EditModal";
import CaAgentTickGreenBg from "./icons/CaAgentTickGreenBg";

export default function Agent() {
  return (
    <div className="flex flex-col gap-4 rounded-2xl border-[1px]  border-[#E6E6E6] w-full max-w-[543px] h-full max-h-[260px] items-start justify-center px-8 py-6">
      <div className="flex w-full justify-between">
        <div className="relative w-full aspect-square max-w-[112px]">
          <Image
            src={"/assets/svgs/agent-icon-handshake.svg"}
            fill
            alt="Agent Icon"
          />
        </div>
        <EditModal />
      </div>
      <div>
        <p className="text-[1.25rem] font-semibold">My Agent one</p>
        <p className="text-shade-200 lg:text-[1.25rem]">Date Created : 15 Aug. 2023 13:55pm </p>
        <div className="flex gap-4 items-center">
          <div className="flex gap-2 items-center rounded-xl bg-[#F1F1F1] px-2 py-1 ">
            <CaAgentTickGreenBg />
            <p>Completed</p>
          </div>{" "}
          <p className="lg:text-[1.25rem] text-shade-200">5 Aug. 2023 13:55pm</p>
        </div>
      </div>
    </div>
  );
}
