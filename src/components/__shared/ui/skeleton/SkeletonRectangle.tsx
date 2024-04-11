import { cn } from "@/lib/utils";
import { Skeleton } from "@nextui-org/react";
import React from "react";

const SkeletonRectangle = ({ className, count }: SkeletonProps) => {
  let countArray = Array.from({ length: count as number }, (_, idx) => idx + 1);

  return (
    <>
      {count &&
        countArray.map((_, idx) => (
          <Skeleton
            classNames={{
              base: cn("rounded-xl h-full", className),
            }}
            key={idx + 1}
          />
        ))}

      {count === undefined && (
        <Skeleton
          classNames={{
            base: cn("rounded-xl h-full", className),
          }}
        />
      )}
    </>
  );
};

export default SkeletonRectangle;
