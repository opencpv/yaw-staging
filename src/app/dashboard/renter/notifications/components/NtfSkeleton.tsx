import { Skeleton } from "@nextui-org/react";

function NtfSkeleton() {
  return (
    <div className="flex w-full flex-col gap-5 ">
      {Array.from({ length: 5}).map((r, index) => (
        <div className="w-full flex flex-col gap-1" key={index}>
          <Skeleton className="h-14 w-[full] max-w-[400px] rounded-md" />

          <Skeleton className="h-6 w-[70%] 
          max-w-[350px] rounded-md" />

          <Skeleton className="h-2 w-[40%] rounded-md" />

        </div>
      ))}
    </div>
  );
}

export default NtfSkeleton;
