import React from "react";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { ListingCardInterface } from "../../../../../interfaces";
import { cn } from "@/lib/utils";
import RatingsForm from "../ratings-form";
// import AllReviewsModal from "../modals/all-reviews-modal";

const ListingInfo = (props: Partial<ListingCardInterface>) => {
  return (
    <div
      className={cn(
        "flex h-max w-full flex-1 flex-col gap-6 rounded-b-lg bg-white px-5 py-4 pr-[1.3rem]",
        {
          hidden: props.showOnlyImage,
        },
        props.className,
      )}
    >
      <div className="space-y-3 text-sm">
        <div className="grid items-center justify-between gap-x-1 gap-y-3 min-[320px]:grid-cols-3">
          {/* Property title */}
          <div className="flex items-center gap-1 min-[320px]:col-span-2">
            <h5
              className="truncate font-bold capitalize text-black"
              title={`${props.bedrooms} Bedroom ${props.propertyType}`}
            >
              {`${props.bedrooms} Bedroom ${props.propertyType}`}
            </h5>
          </div>
          {/* rating */}
          <div className="flex min-w-max items-center gap-2 min-[320px]:ml-auto">
            <RatingsForm property={props} value={props.ratingCount} />

            {props?.ratingCount !== undefined && props.ratingCount > 0 && (
              // <AllReviewsModal property={props} value={props.ratingCount} />
              <></>
            )}
          </div>
        </div>
        {/* property name */}
        <p className="line-clamp-1 max-w-xl text-base text-black">
          {props.propertyName}
        </p>
      </div>
      {/* monthly amount */}
      <section className="flex w-full flex-col justify-between gap-2 pt-1 text-xs xxs:flex-row xxs:items-center">
        <small className="whitespace-nowrap font-bold text-neutral-900">
          {props?.currency}&nbsp;
          <span className="font-medium">
            {formatPrice(props?.monthlyAmount as number, false)} / Month
          </span>
        </small>

        <div
          className={cn("w-max rounded-xl px-3 py-1 text-xs ", {
            "truncate bg-[#E7F8F2] text-indigo-950": props.advancePeriod,
            "bg-info-bg text-info": !props.advancePeriod,
          })}
        >
          {props.advancePeriod ? (
            <small className="truncate">
              {props.advancePeriod === 1 && "One Year Advance"}
              {props.advancePeriod === 2 && "Two Year Advance"}
              {props.advancePeriod === 3 && "Three Year Advance"}
              {props.advancePeriod === 4 && "Four Year Advance"}
              {props.advancePeriod === 5 && "Five Year Advance"}

              {/* }<span
                className={cn("hidden xl:max-2xl:inline", {
                  "hidden max-xsm:inline lg:max-xl:inline xl:max-2xl:hidden":
                    props.cardType === "2",
                })}
              >
                {props.advancePeriod === 1 && "1Yr Advance"}
                {props.advancePeriod === 2 && "2Yr Advance"}
                {props.advancePeriod === 3 && "3Yr Advance"}
                {props.advancePeriod === 4 && "4Yr Advance"}
                {props.advancePeriod === 5 && "5Yr Advance"}
              </span> */}
            </small>
          ) : (
            <small className="px-1.5">
              <span>No Advance</span>
            </small>
          )}
        </div>
      </section>
      {/* City and like */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-shade-300">
          <span>
            {props.neighbourhood}, {props.city}
          </span>
        </div>
        {/* Spotline -- RELEASE 2 */}
      </div>
    </div>
  );
};

export default ListingInfo;
