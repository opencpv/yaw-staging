import React from "react";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { ListingCardInterface } from "../../../../../interfaces";
import { useAppStore } from "@/store/dashboard/AppStore";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import Tooltip from "@/components/__shared/ui/Tooltip";
import RatingsForm from "../ratings-form";
import AllReviewsModal from "../modals/all-reviews-modal";

const ListingInfo = (props: Partial<ListingCardInterface>) => {
  const { icons } = useAssets();

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
          {/* Property name */}
          <div className="flex items-center gap-1 min-[320px]:col-span-2">
            <h5
              className="truncate font-bold capitalize text-black"
              title={`${props.bedrooms} Bedroom ${props.propertyType}`}
            >
              <span>{props.bedrooms} </span>
              <span>Bedroom </span>
              <span>{props.propertyType}</span>
            </h5>
          </div>
          {/* rating */}
          <div className="flex min-w-max items-center gap-2 min-[320px]:ml-auto">
            <RatingsForm property={props} value={props.ratingCount} />

            {props?.ratingCount !== undefined && props.ratingCount > 0 && (
              <AllReviewsModal property={props} value={props.ratingCount} />
            )}
          </div>
        </div>
        {/* subtitle */}
        <p className="line-clamp-1 max-w-xl text-base text-black">
          {props.subtitle}
        </p>
      </div>
      {/* monthly amount */}
      <div className="flex w-full flex-wrap items-center justify-between gap-2 pt-1 text-xs">
        <div className="flex items-center gap-2">
          <div className="w-fit">
            <p className="text-sm font-bold text-neutral-900">
              GHS&nbsp;
              <span className="font-medium">
                {formatPrice(props?.monthlyAmount as number, false)} / Month
              </span>
            </p>
          </div>
        </div>
        <div
          className={cn("w-max rounded-xl px-3 py-1 text-xs ", {
            "bg-[#E7F8F2] text-indigo-950": props.advancePeriod,
            "bg-info-bg text-info": !props.advancePeriod,
          })}
        >
          {props.advancePeriod === 1 ? (
            <small>
              <span
                className={cn("xl:max-2xl:hidden", {
                  "max-xsm:hidden lg:max-xl:hidden xl:max-2xl:inline":
                    props.cardType === "2",
                })}
              >
                One Year Advance
              </span>
              <span
                className={cn("hidden xl:max-2xl:inline", {
                  "hidden max-xsm:inline lg:max-xl:inline xl:max-2xl:hidden":
                    props.cardType === "2",
                })}
              >
                1yr Advance
              </span>
            </small>
          ) : props.advancePeriod === 2 ? (
            <small>
              <span
                className={cn("xl:max-2xl:hidden", {
                  "max-xsm:hidden lg:max-xl:hidden xl:max-2xl:inline":
                    props.cardType === "2",
                })}
              >
                Two Year Advance
              </span>
              <span
                className={cn("hidden xl:max-2xl:inline", {
                  "hidden max-xsm:inline lg:max-xl:inline xl:max-2xl:hidden":
                    props.cardType === "2",
                })}
              >
                2yr Advance
              </span>
            </small>
          ) : !props.advancePeriod ? (
            <small className="px-1.5">
              <span>No Advance</span>
            </small>
          ) : null}
        </div>
      </div>
      {/* City and like */}
      <div className="mt-auto flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-shade-300">
          <span>{props.neighbourhood}, </span>
          <span>{props.city}</span>
        </div>
        {/* Spotline -- RELEASE 2 */}
      </div>
    </div>
  );
};

export default ListingInfo;
