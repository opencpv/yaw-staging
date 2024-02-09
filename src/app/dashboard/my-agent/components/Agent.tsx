import Image from "next/image";
import EditModal from "./EditModal";
import CaAgentTickGreenBg from "./icons/CaAgentTickGreenBg";

export default function Agent() {
  return (
    <div className="flex h-full w-full max-w-[543px] flex-col items-start justify-center gap-4 rounded-2xl border border-[#E6E6E6] px-8 py-6">
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
      <div className="space-y-1">
        <h3 className="font-semibold">My Agent one</h3>
        <p className="text-shade-200">Date Created : 15 Aug. 2023 13:55pm</p>
        <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 xs:pt-2">
          <div className="flex items-center gap-2 rounded-full bg-[#F1F1F1] px-2 py-1.5">
            <CaAgentTickGreenBg />
            <p>Completed</p>
          </div>
          <p className="text-shade-200">5 Aug. 2023 13:55pm</p>
        </div>
      </div>
    </div>
  );
}
