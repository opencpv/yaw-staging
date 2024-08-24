import { Skeleton } from ".";
import React from "react";

type Props = {
  className?: string;
};

const SkeletonTextual = ({ className }: Props) => {
  return (
    <>
      <div className={`space-y-3 ${className}`}>
        <Skeleton className={`h-4 w-96 rounded-xl`} />
        <Skeleton className={`h-4 w-72 rounded-xl`} />
        <Skeleton className={`h-4 w-40 rounded-xl`} />
      </div>
    </>
  );
};

export default SkeletonTextual;
