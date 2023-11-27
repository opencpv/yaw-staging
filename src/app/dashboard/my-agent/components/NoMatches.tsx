/* eslint-disable react/no-unescaped-entities */
import CaAgentNoMatches from "./icons/CaAgentNoMatches";

export default function NoMatchesYet() {
  return (
    <div className="flex flex-col gap-8 mt-10 w-full">
      <p className="text-[1.5625rem] font-semibold">Your matches</p>
      <div className="grid grid-cols-3 text-white bg-primary-400 py-[1rem] px-[0.63rem] text-center font-semibold">
        <div className=" text-center ">Property</div>
        <div></div>
        <div>Actions</div>
      </div>

      <div className="flex flex-col gap-5 bg-[#F7F7F7] rounded-2xl h-[434px] w-full items-center justify-center">
        <CaAgentNoMatches />
        <p className="text-shade-300">You don't have any matches yet</p>
      </div>
    </div>
  );
}
