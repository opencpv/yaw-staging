import { cn } from "@/lib/utils";
import { Skeleton } from ".";
import React from "react";

/**
 * Use to show a placeholder while listing card content is loading.
 */
const SkeletonListing = ({
  count,
  className,
  cardType = 2,
}: SkeletonListingProps) => {
  let countArray = Array.from({ length: count as number }, (_, idx) => idx + 1);

  return (
    <>
      {count &&
        countArray.map((_, idx) => (
          <Skeleton key={idx} className="w-full rounded-xl">
            <div
              className={cn(
                "flex w-full min-w-[384px] max-w-sm flex-col gap-3 ssm:max-w-md",
                {
                  "h-80": cardType === 1,
                  "h-[26rem]": cardType === 2,
                },
                className,
              )}
            >
              <div className="flex w-full justify-between">
                <Skeleton className="rounded-md">
                  <div>Lorem ipsum dolor sit.</div>
                </Skeleton>
                <Skeleton className="rounded-md">
                  <div>Lorem</div>
                </Skeleton>
              </div>
              <Skeleton className="rounded-md">
                <div>Lorem ipsum.</div>
              </Skeleton>
              <div className="flex w-full justify-between">
                <Skeleton className="rounded-md">
                  <div>Lorem ipsum dol.</div>
                </Skeleton>
                <Skeleton className="rounded-md">
                  <div>Lorem ipsum.</div>
                </Skeleton>
              </div>
              <Skeleton className="rounded-md">
                <div>Lorem</div>
              </Skeleton>
            </div>
          </Skeleton>
        ))}

      {count === undefined && (
        <Skeleton className="w-full rounded-xl">
          <div
            className={cn(
              "flex w-full min-w-[384px] max-w-sm flex-col gap-3 ssm:max-w-md",
              {
                "h-80": cardType === 1,
                "h-[26rem]": cardType === 2,
              },
              className,
            )}
          >
            <div className="flex w-full justify-between">
              <Skeleton className="rounded-md">
                <div>Lorem ipsum dolor sit.</div>
              </Skeleton>
              <Skeleton className="rounded-md">
                <div>Lorem</div>
              </Skeleton>
            </div>
            <Skeleton className="rounded-md">
              <div>Lorem ipsum.</div>
            </Skeleton>
            <div className="flex w-full justify-between">
              <Skeleton className="rounded-md">
                <div>Lorem ipsum dol.</div>
              </Skeleton>
              <Skeleton className="rounded-md">
                <div>Lorem ipsum.</div>
              </Skeleton>
            </div>
            <Skeleton className="rounded-md">
              <div>Lorem</div>
            </Skeleton>
          </div>
        </Skeleton>
      )}
    </>
  );
};

export default SkeletonListing;
