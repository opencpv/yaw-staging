import { cn } from "@/lib/utils";
import { formatPrice } from "@/lib/utils/numberManipulation";
import React from "react";

type Props = {
  className?: string;
  monthlyPrice: number;
  advancePayment: "one year" | "two years";
};

const PaymentStructure = (props: Props) => {
  return (
    <div
      className={cn(
        "flex flex-wrap items-center gap-2 text-xs",
        props.className,
      )}
    >
      <div className="w-fit">
        <p className="text-sm font-[700]">
          GHS&nbsp;
          <span className="font-[500]">
            {formatPrice(props.monthlyPrice)} / Month
          </span>
        </p>
      </div>
      <div className="flex w-full flex-1 items-center justify-between gap-x-2 gap-y-3">
        <small className="w-max rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs text-neutral-800">
          {props.advancePayment === "one year"
            ? "One Year Advance"
            : "Two Years Advance"}
        </small>
      </div>
    </div>
  );
};

export default PaymentStructure;
