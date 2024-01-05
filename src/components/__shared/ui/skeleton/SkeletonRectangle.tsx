import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  childrenClassName?: string;
  count: number;
};

const SkeletonRectangle = ({ childrenClassName, count }: Props) => {
  let countArray = Array.from({ length: count }, (_, idx) => idx + 1);

  return (
    <>
      {countArray.map((_, idx) => (
        <Skeleton key={idx + 1} className={`rounded-xl h-full ${childrenClassName}`} />
      ))}
    </>
  );
};

export default SkeletonRectangle;
