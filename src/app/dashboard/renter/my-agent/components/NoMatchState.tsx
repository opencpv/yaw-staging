import HourGlassLottie from "@/components/__shared/lotties/HourGlassLottie";

export default function NoMatchState() {
  return (
    <div className="flex h-[434px] w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#F7F7F7]">
      <HourGlassLottie />
      <p className="text-shade-300">You don&apos;t have any matches yet</p>
    </div>
  );
}
