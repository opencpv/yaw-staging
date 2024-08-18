// import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonLong = ({ className, count }: SkeletonProps) => {
  const countArray = Array.from({ length: count ?? 1 }, (_, idx) => idx + 1);
  return (
    <>
      {/* {count &&
        countArray.map((_, idx) => (
          <Skeleton
            key={idx + 1}
            className={`mb-20 h-80 w-full rounded-xl ${className}`}
          />
        ))}
      {count === undefined && (
        <Skeleton className={`mb-20 h-80 w-full rounded-xl ${className}`} />
      )} */}
    </>
  );
};

export default SkeletonLong;
