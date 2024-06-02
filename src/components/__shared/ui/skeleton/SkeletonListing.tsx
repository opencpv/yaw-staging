import { cn } from "@/lib/utils";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonListing = ({
  count,
  className,
  cardType = 2,
}: SkeletonListingProps) => {
  let countArray = Array.from({ length: count as number }, (_, idx) => idx + 1);

  return (
    <>
      {count &&
        countArray.map((_, idx) => (
          <div key={idx + 1} className={cn("space-y-3", className)}>
            <Skeleton
              className={cn("min-w-full", {
                "h-80 rounded-xl": cardType === 1,
                "h-[26rem] rounded-3xl": cardType === 2,
              })}
            />
            <div className="flex justify-between">
              <Skeleton className="h-5 w-32 rounded-md" />
              <Skeleton className="h-5 w-20 rounded-md" />
            </div>
            <Skeleton className="h-10 w-full rounded-md" />
            <div className="flex justify-between">
              <Skeleton className="h-5 w-40 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-full" />
            </div>
          </div>
        ))}

      {count === undefined && (
        <div className={cn("space-y-3", className)}>
          <Skeleton
            className={cn("min-w-full", {
              "h-52 rounded-xl": cardType === 1,
              "h-80 rounded-3xl": cardType === 2,
            })}
          />
          <div className="flex justify-between">
            <Skeleton className="h-5 w-32 rounded-md" />
            <Skeleton className="h-5 w-20 rounded-md" />
          </div>
          <Skeleton className="h-10 w-full rounded-md" />
          <div className="flex justify-between">
            <Skeleton className="h-5 w-40 rounded-md" />
            <Skeleton className="h-8 w-8 rounded-full" />
          </div>
        </div>
      )}
    </>
  );
};

export default SkeletonListing;
