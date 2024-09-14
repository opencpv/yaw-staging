import { Button } from "@/components/__shared/ui/button";
import { ScrollArea } from "@/components/__shared/ui/scroll-area";
import { Skeleton } from "@/components/__shared/ui/skeleton";
import React from "react";
import { HiBars3BottomRight } from "react-icons/hi2";

function PaginationLoadingState() {
  return (
    <nav className="flex w-full items-start gap-7 px-5 py-1 pb-4 shadow-md md:items-center">
      <ScrollArea className="h-fit w-full justify-between gap-5 max-md:invisible">
        {Array.from({ length: 7 }).map((_, index) => (
          <div key={index} className="min-w-fit max-w-fit">
            <Skeleton className="rounded-xl">
              <div
                className={`flex h-14 min-w-[160px] cursor-pointer items-center justify-center gap-3 rounded-xl px-4 py-3 text-2xl font-semibold text-[#B0B0B0] transition-all lg:h-28 lg:max-w-none lg:py-4`}
                draggable={false}
              ></div>
            </Skeleton>
          </div>
        ))}
      </ScrollArea>

      {/* Desktop */}
      <Button size={"icon"} className="shrink-0 px-2.5 py-3 max-md:hidden">
        <div className="flex items-center justify-center">
          <HiBars3BottomRight size={25} />
        </div>
      </Button>

      <Skeleton className="relative my-auto mr-auto flex h-8 w-20 flex-1 items-center gap-5 ssm:hidden" />

      {/* Mobile */}
      <Button
        size={"icon"}
        variant={"outline"}
        radius={"lg"}
        className="my-auto ml-auto h-max w-fit px-3 py-2 md:hidden"
      >
        <div className="flex flex-col items-center gap-3">
          <HiBars3BottomRight size={25} />
        </div>
      </Button>
    </nav>
  );
}

export default PaginationLoadingState;
