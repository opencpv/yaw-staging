import SkeletonTextual from "@/components/__shared/ui/skeleton/SkeletonTextual";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  query: any;
};

const ItemDetails = ({ query }: Props) => {
  return (
    <div className="lg:col-span-2">
      <div className="mb-16 flex flex-wrap items-center gap-x-20 gap-y-5 max-xs:w-full max-xs:justify-between">
        {query.isLoading ? (
          <>
            <Skeleton className="h-10 w-32" />
            <Skeleton className="h-10 w-32" />
          </>
        ) : (
          <>
            <h3 className="text-xl font-[500] text-neutral-500">
              {query.data?.title}
            </h3>
            <div className="min-w-[100px] rounded-md bg-accent-50 p-3 text-center text-sm text-white">
              {query.data?.category}
            </div>
          </>
        )}
      </div>
      <div className="mb-16 space-y-3">
        {query.isLoading ? (
          <Skeleton className="h-10 w-32" />
        ) : (
          <h2 className="text-3xl font-[700] text-primary">
            {formatPrice(query.data?.price)}
          </h2>
        )}
        <span className="flex w-full max-w-xs items-center gap-5 *:flex-1">
          {query.isLoading ? (
            <>
              <Skeleton className="h-10 w-32" />
              <Skeleton className="h-10 w-32" />
            </>
          ) : (
            <>
              <Term variant="negotiable" />
              <Condition variant="used" />
            </>
          )}
        </span>
      </div>
      {query.error ? (
        <SomethingWentWrong
          className="-mt-52 h-fit"
          onTryAgain={() => {
            query.mutate();
          }}
        />
      ) : (
        <p className="max-w-4xl">
          {query.isLoading ? <SkeletonTextual /> : query.data?.description}
        </p>
      )}
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

export const Condition = ({ variant }: { variant?: "new" | "used" }) => {
  return (
    <div className="w-fit rounded-xl bg-[#FFE3B0] p-2 text-center capitalize text-primary">
      {variant}
    </div>
  );
};
