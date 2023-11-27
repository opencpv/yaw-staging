import Image from "next/image";

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
        Edit
      </div>
      <div>
        <p className="text-[1.25rem] font-semibold">My Agent one</p>
        <p className="text-shade-200 text-[1.25rem]">Date created: </p>
        <div className="flex gap-4 items-center">
          <p>Completed</p>
          <p className="text-[1.25rem] text-shade-200">5 Auf 202</p>
        </div>
      </div>
    </div>
  );
}
