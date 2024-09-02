import { formatPrice } from "@/lib/utils/numberManipulation";
import { LowerCase } from "@/lib/utils/stringManipulation";
import React from "react";

type Props = {
  query: any;
};

const ItemDetails = ({ query }: Props) => {
  return (
    <div className="lg:col-span-2">
      <div className="mb-16 flex flex-wrap items-center gap-x-20 gap-y-5">
        <h3 className="text-xl font-[500] text-neutral-500">
          {query.data?.title}
        </h3>
        <div className="min-w-[100px] rounded-md bg-accent-50 p-3 text-center text-sm text-white">
          {query.data?.category}
        </div>
      </div>
      <div className="mb-16 space-y-3">
        <h2 className="text-3xl font-[700] text-primary">
          {formatPrice(query.data?.price)}
        </h2>
        <span className="flex w-full max-w-xs items-center gap-5 *:flex-1">
          <Term
            variant={
              LowerCase(query.data?.term) === "negotiable"
                ? "negotiable"
                : "non-negotiable"
            }
          />
          <Condition
            variant={
              LowerCase(query.data?.condition) === "new" ? "new" : "used"
            }
          />
        </span>
      </div>
      <p className="max-w-4xl">{query.data?.description}</p>
    </div>
  );
};

export default ItemDetails;

export const Term = ({
  variant,
}: {
  variant?: "negotiable" | "non-negotiable";
}) => {
  return (
    <div className="w-fit rounded-xl bg-primary-100 p-2 text-center capitalize text-white">
      {variant}
    </div>
  );
};

export const Condition = ({
  variant,
}: {
  variant?: "new" | "used" | "used-like new";
}) => {
  return (
    <div className="w-fit rounded-xl bg-[#FFE3B0] p-2 text-center capitalize text-primary">
      {variant}
    </div>
  );
};
