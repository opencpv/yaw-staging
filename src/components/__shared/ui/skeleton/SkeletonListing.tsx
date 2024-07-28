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
          <div
            key={idx + 1}
            className={cn("w-[350px] mx-auto space-y-3 xs:w-[448px]", className)}
          >
            <Skeleton
              className={cn("w-full max-w-sm rounded-2xl ssm:max-w-md", {
                "h-80": cardType === 1,
                "h-[26rem]": cardType === 2,
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
            className={cn("min-w-full rounded-2xl", {
              "h-80": cardType === 1,
              "h-[26rem]": cardType === 2,
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
