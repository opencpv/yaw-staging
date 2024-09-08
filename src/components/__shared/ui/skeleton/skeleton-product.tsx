import { cn } from "@/lib/utils";
import { Skeleton } from ".";
import React from "react";
import SkeletonTextual from "./skeleton-textual";

type Props = {
  count?: number;
  className?: string;
};

/**
 * Use to show a placeholder while item card content is loading.
 */
const SkeletonItem = ({ count, className }: Props) => {
  let countArray = Array.from({ length: count as number }, (_, idx) => idx + 1);

  return (
    <>
      {count &&
        countArray.map((_, idx) => (
          <div key={idx + 1} className={cn("space-y-3", className)}>
            <Skeleton className="mb-10 h-60 min-w-full rounded-md" />
            <SkeletonTextual />
          </div>
        ))}

      {count === undefined && (
        <div className={cn("space-y-3", className)}>
          <Skeleton className="mb-10 min-w-full rounded-md" />
          <SkeletonTextual />
        </div>
      )}
    </>
  );
};

export default SkeletonItem;
