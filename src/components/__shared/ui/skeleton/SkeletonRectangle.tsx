import { cn } from "@/lib/utils";
import { Skeleton } from "@nextui-org/react";
import React from "react";

type Props = {
  className?: string;
  count: number;
};

const SkeletonRectangle = ({ className, count }: Props) => {
  let countArray = Array.from({ length: count }, (_, idx) => idx + 1);

  return (
    <>
      {countArray.map((_, idx) => (
        <Skeleton
          classNames={{
            base: cn("rounded-xl h-full", className),
          }}
          key={idx + 1}
        />
      ))}
    </>
  );
};

export default SkeletonRectangle;
