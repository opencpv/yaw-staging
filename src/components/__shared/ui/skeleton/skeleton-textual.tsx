import { Skeleton } from ".";
import React from "react";

type Props = {
  className?: string;
};

/**
 * Use to show a placeholder while text content is loading.
 */
const SkeletonTextual = ({ className }: Props) => {
  return (
    <>
      <div className={`space-y-3 ${className}`}>
        <Skeleton className={`h-4 w-full rounded-xl`} />
        <Skeleton className={`h-4 w-10/12 rounded-xl`} />
        <Skeleton className={`h-4 w-6/12 rounded-xl`} />
      </div>
    </>
  );
};

export default SkeletonTextual;
