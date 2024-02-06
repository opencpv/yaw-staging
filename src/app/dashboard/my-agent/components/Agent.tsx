import Image from "next/image";
import EditModal from "./EditModal";
import CaAgentTickGreenBg from "./icons/CaAgentTickGreenBg";

export default function Agent() {
  return (
    <div className="flex h-full max-h-[260px] w-full max-w-[543px]  flex-col items-start justify-center gap-4 rounded-2xl border-[1px] border-[#E6E6E6] px-8 py-6">
      <div className="flex w-full justify-between">
        <div className="relative aspect-square w-full max-w-[112px]">
          <Image
            src={"/assets/svgs/agent-icon-handshake.svg"}
            fill
            alt="Agent Icon"
          />
        </div>
        <EditModal />
      </div>
      <div>
        <p className="text-xl font-semibold">My Agent one</p>
        <p className="text-shade-200 lg:text-xl">
          Date Created : 15 Aug. 2023 13:55pm{" "}
        </p>
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-xl bg-[#F1F1F1] px-2 py-1 ">
            <CaAgentTickGreenBg />
            <p>Completed</p>
          </div>{" "}
          <p className="text-shade-200 lg:text-xl">5 Aug. 2023 13:55pm</p>
        </div>
      </div>
    </div>
  );
}
