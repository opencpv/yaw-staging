/* eslint-disable react/no-unescaped-entities */
import CaAgentNoMatches from "./icons/CaAgentNoMatches";

export default function NoMatchesYet() {
  return (
    <section className="section flex w-full flex-col gap-8">
      <p className="text-[1.25rem] font-semibold lg:text-[1.5625rem]">
        Your Matches
      </p>
      <div className="hidden grid-cols-3 bg-primary-400 px-[0.63rem] py-[1rem] text-center font-semibold text-white lg:grid">
        <div className=" text-center ">Property</div>
        <div></div>
        <div>Actions</div>
      </div>

      <div className="flex h-[434px] w-full flex-col items-center justify-center gap-5 rounded-2xl bg-[#F7F7F7]">
        <CaAgentNoMatches />
        <p className="text-shade-300">You don't have any matches yet</p>
      </div>
    </section>
  );
}
