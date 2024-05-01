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
        "flex w-fit flex-col items-center gap-2 text-xs",
        props.className,
      )}
    >
      <div className="flex w-full flex-1 items-center justify-between gap-x-2 gap-y-3">
        <small className="w-max rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs text-[#1AA67A]">
          {props.advancePayment === "one year"
            ? "One Year Advance"
            : "Two Years Advance"}
        </small>
      </div>
      <div className="w-fit truncate">
        <p
          className="truncate text-sm font-[700] text-neutral-800"
          title={`GHS ${formatPrice(props.monthlyPrice)} / Month`}
        >
          GHS&nbsp;
          <span className="truncate text-shade-200">
            {formatPrice(props.monthlyPrice)} / Month
          </span>
        </p>
      </div>
    </div>
  );
};

export default PaymentStructure;
