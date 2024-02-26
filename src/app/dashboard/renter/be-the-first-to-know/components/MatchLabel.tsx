import React from "react";
import { HiOutlineXCircle } from "react-icons/hi2";
import { MdOutlineVerified } from "react-icons/md";
import { TargetedSearchState } from "./TargetedSearchCard";

type Props = {
  state: TargetedSearchState;
};

const MatchLabel = ({ state }: Props) => {
  if (state === "match")
    return (
      <div className="absolute right-5 top-5 flex min-w-[10rem] items-center justify-center gap-3 rounded-2xl bg-primary-200 p-2 text-white">
        <p className="">Match</p>
        <MdOutlineVerified size={24} />
      </div>
    );
  else if (state === "no matches")
    return (
      <div className="absolute right-5 top-5 flex min-w-[10rem] items-center justify-center gap-3 rounded-2xl bg-[#EC6E78] p-2 text-white">
        <p className="">No Matches Yet</p>
        <HiOutlineXCircle size={24} />
      </div>
    );
};

export default MatchLabel;
