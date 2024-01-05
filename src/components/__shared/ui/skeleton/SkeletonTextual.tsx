import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  className?: string;
};

const SkeletonTextual = ({ className }: Props) => {
  return (
    <>
      <div className={`space-y-3 ${className}`}>
        <Skeleton className={`rounded-xl w-96 h-4`} />
        <Skeleton className={`rounded-xl w-72 h-4`} />
        <Skeleton className={`rounded-xl w-40 h-4`} />
      </div>
    </>
  );
};

export default SkeletonTextual;
