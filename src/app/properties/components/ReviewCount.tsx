import React from "react";

type Props = {};

const ReviewCount = (props: Props) => {
  return (
    <div className="grid items-center grid-cols-6 gap-5">
      <p className="col-span-2 text-sm text-neutral-700">Lorem ipsum</p>
      <div className="relative w-full h-1.5 col-span-3 rounded-l-full rounded-r-full bg-neutral-200">
        <div className="inset-0 w-11/12 h-full rounded-l-full bg-accent-50"></div>
      </div>
      <p className="font-[700]">2.3</p>
    </div>
  );
};

export default ReviewCount;
