import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {};

const Rating = (props: Props) => {
  return (
    <div className="grid grid-cols-6 items-center gap-0.5 rounded-full bg-[#F1F1F1] p-1 text-[0.65rem] leading-3 text-primary-500">
      <FaStar className="col-span-1 text-[#FFB800]" />
      <Link href="" className="col-span-1 text-[#363C91] underline">
        3.5
      </Link>
      <span className="col-span-1">(5)</span>
      <span className="col-span-3">Reviews</span>
    </div>
  );
};

export default Rating;
