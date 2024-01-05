import { Skeleton } from "@nextui-org/react";
import React from "react";


const SkeletonListing = ({ count, childrenClassName }: SkeletonProps) => {
  let countArray = Array.from({ length: count }, (_, idx) => idx + 1);

  return (
    <>
      {countArray.map((_, idx) => (
        <div
          key={idx + 1}
          className={`space-y-3 ${childrenClassName}`}
        >
          <Skeleton className={`rounded-xl min-w-full h-60`} />
          <div className="flex justify-between">
            <Skeleton className="rounded-md w-32 h-5" />
            <Skeleton className="rounded-md w-20 h-5" />
          </div>
          <Skeleton className="rounded-md w-full h-10" />
          <div className="flex justify-between">
            <Skeleton className="rounded-md w-40 h-5" />
            <Skeleton className="rounded-full w-8 h-8" />
          </div>
        </div>
      ))}
    </>
  );
};

export default SkeletonListing;
