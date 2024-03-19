import { Skeleton } from "@nextui-org/react";

function NtfDetailsSkeleton() {
  return (
    <div className="flex w-full flex-col gap-2 ">
      {Array.from({ length: 1 }).map((r, index) => (
        <div className="flex w-full flex-col gap-5" key={index}>
          <Skeleton className="h-14 w-24 max-w-[400px] rounded-md" />

          <Skeleton className="h-[150px] w-[70%] rounded-md" />
        </div>
      ))}
      {Array.from({ length: 3 }).map((r, index) => (
        <div className="flex w-full flex-col gap-1" key={index}>

          <Skeleton className="h-4 w-[60%] rounded-md" />
        </div>
      ))}
    </div>
  );
}

export default NtfDetailsSkeleton;
