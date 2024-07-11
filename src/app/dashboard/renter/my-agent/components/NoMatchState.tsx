import CaAgentNoMatches from "./icons/CaAgentNoMatches";

export default function NoMatchState() {
  return (
    <div className="flex h-[434px] w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#F7F7F7]">
      <CaAgentNoMatches />
      <p className="text-shade-300">You don&apos;t have any matches yet</p>
    </div>
  );
}
