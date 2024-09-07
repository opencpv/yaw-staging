import { cn } from "@/lib/utils";
import { Skeleton } from ".";
import React from "react";

/**
 * Use to show a placeholder while card content is loading.
 */
const SkeletonRectangle = ({ className, count }: SkeletonProps) => {
  let countArray = Array.from({ length: count as number }, (_, idx) => idx + 1);

  return (
    <>
      {count &&
        countArray.map((_, idx) => (
          <Skeleton
            className={cn("h-72 w-full rounded-xl", className)}
            key={idx + 1}
          />
        ))}

      {count === undefined && (
        <Skeleton className={cn("h-72 w-full rounded-xl", className)} />
      )}
    </>
  );
};

export default SkeletonRectangle;
