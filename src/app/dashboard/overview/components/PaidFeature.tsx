import React from "react";
import Image from "next/image";

type Props = {
  title: string;
  image: string;
  matches: number;
  description?: string;
};

const PaidFeature = (props: Props) => {
  return (
    <div className="flex flex-col gap-2 border-b-2 py-2 min-[320px]:flex-row">
      {/* <div className="flex max-h-28 w-fit items-center justify-center rounded-xl bg-[#F9DFAE] p-6">
        <h2 className="font-bold">MDH</h2>
      </div> */}
      <div className="relative aspect-square max-h-28 w-32 rounded-xl bg-[#F9DFAE] p-6 min-[320px]:w-[initial] min-[320px]:flex-1">
        <Image
          src={props.image}
          alt={props.title}
          fill
          style={{ objectFit: "cover" }}
          className="rounded-xl"
        />
      </div>
      <div className="flex-[3] space-y-3">
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
