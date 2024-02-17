import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";
import { FaStar } from "react-icons/fa";

type Props = {
  rate: number;
  count: number;
  className?: string;
  /**
   * className for the count in parenthesis eg: ( 5 )
   */
  countClassName?: string;
  /**
   * className for the word "Reviews"
   */
  reviewsLabelClassName?: string;
};

const Rating = (props: Props) => {
  return (
    <div
      className={cn(
        "flex items-center gap-1 rounded-full bg-secondary-50 p-1.5 text-[0.65rem] leading-3 text-primary-500",
        props.className,
      )}
    >
      <FaStar className="text-[#FFB800]" />
      <Link href="" className="text-[#363C91] underline">
        {props.rate}
      </Link>
      <span className={props.countClassName}>( {props.count} )</span>
      <span className={props.reviewsLabelClassName}>Reviews</span>
    </div>
  );
};

export default Rating;
