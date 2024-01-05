import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  count?: number;
  className?: string;
};

const SkeletonLong = ({ className, count }: Props) => {
  const countArray = Array.from({ length: count ?? 1 }, (_, idx) => idx + 1);
  return (
    <>
      {countArray.map((_, idx) => (
        <Skeleton
          key={idx + 1}
          className={`rounded-xl w-full h-80 mb-20 ${className}`}
        />
      ))}
    </>
  );
};

export default SkeletonLong;
