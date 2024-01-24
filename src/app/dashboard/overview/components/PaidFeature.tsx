import React from "react";

type Props = {
  title: string;
  matches: number;
  description?: string;
};

const PaidFeature = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 border-b-2 py-2 min-[320px]:flex-row lg:max-xl:flex-col xl:flex-row">
      <div className="flex max-h-28 w-fit items-center justify-center rounded-xl bg-[#F9DFAE] p-6">
        <h2 className="font-bold">MDH</h2>
      </div>
      <div className="space-y-3">
        <h3>{props.title}</h3>
        <p>{props.description}</p>
        <div className="w-fit rounded-xl bg-[#FEF8ED] p-2 px-6 text-neutral-700">
          {props.matches} matches
        </div>
      </div>
    </div>
  );
};

export default PaidFeature;
