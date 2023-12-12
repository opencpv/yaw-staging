import { Skeleton } from "@nextui-org/react";
import React from "react";


const SkeletonRectangle = ({ count, className, childrenClassName }: SkeletonProps) => {
  let countArray = Array.from({ length: count }, (_, idx) => idx + 1);

  return (
    <>
      {countArray.map((_, idx) => (
        <div
          key={idx + 1}
          className={childrenClassName}
        >
          <Skeleton className={`rounded-xl w-full h-full`} />
        </div>
      ))}
    </>
  );
};

export default SkeletonRectangle;
