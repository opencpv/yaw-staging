import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  className?: string;
};

const SkeletonLong = ({ className }: Props) => {
  return (
    <>
      <Skeleton className={`rounded-xl w-full h-80 mb-20 ${className}`} />
    </>
  );
};

export default SkeletonLong;
