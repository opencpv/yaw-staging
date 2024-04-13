import React from "react";
import LikeHeart from "../ui/LikeHeart";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { ListingCardInterface } from "../../../../interfaces";
import { useAppStore } from "@/store/dashboard/AppStore";
import Image from "next/image";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import Tooltip from "@/components/ui/Tooltip";
import Rating from "./Rating";

const ListingInfo = (props: Partial<ListingCardInterface>) => {
  const { user } = useAppStore();
  const { icons } = useAssets();

  return (
    <div
      className={`w-full space-y-6 rounded-b-lg bg-white px-5 py-4 ${props.className}`}
    >
      <div className="space-y-3 text-sm">
        <div className="grid items-center justify-between gap-x-1 gap-y-3 min-[320px]:grid-cols-3">
          {/* Property name */}
          <div className="flex items-center gap-1 min-[320px]:col-span-2">
            <p
              className="truncate font-bold capitalize text-black"
              title={`${props.bedrooms} Bedroom ${props.propertyType}`}
            >
              <span>{props.bedrooms} </span>
              <span>Bedroom </span>
              <span>{props.propertyType}</span>
            </p>
          </div>
          {/* rating */}
          <div className="flex min-w-max items-center gap-2 min-[320px]:ml-auto">
            {props.ratingCount === 0 ? (
              <FaRegStar className="text-yellow-400" />
            ) : (
              <FaStar className="text-yellow-400" />
            )}

            {(props.ratingCount as number) > 0 && (
             <Rating value={4.1} />
            )}
            <small>
              ({" "}
              {(props.ratingCount as number) > 0
                ? `${props.ratingCount}+`
                : `${props.ratingCount}`}{" "}
              )
            </small>
            {(props.ratingCount === 0 || props.rating === 0) && (
              <Link
                href=""
                className="text-neutral-900 underline hover:text-neutral-900 active:text-neutral-900"
              >
                <small>Rate</small>
              </Link>
            )}
          </div>
        </div>
        {/* subtitle */}
        <p className="line-clamp-1 max-w-xl text-black">{props.subtitle}</p>
      </div>
      {/* monthly amount */}
      <div className="flex w-full flex-wrap items-center justify-between gap-2 pt-1 text-xs">
        <div className="flex items-center gap-2">
          {!props.ViewingFee && (
            <Tooltip content="No Viewing Fee">
              <Image src={icons.NoViewingFee} alt="" />
            </Tooltip>
          )}
          <div className="w-fit">
            <p className="text-sm font-[700] text-neutral-900">
              GHS&nbsp;
              <span className="font-[500]">
                {formatPrice(props?.monthlyAmount as number)} / Month
              </span>
            </p>
          </div>
        </div>
        <div
          className={cn("w-max rounded-xl px-3 py-1 text-xs ", {
            "bg-[#E7F8F2] text-indigo-950": props.advancePeriod,
            "bg-[#EEF2FA] text-[#2E5AAC]": !props.advancePeriod,
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
      <div className="flex flex-wrap items-center justify-between gap-2">
        <div className="text-sm text-shade-300">
          <span>{props.neighbourhood}, </span>
          <span>{props.city}</span>
        </div>
        <LikeHeart
          liked={props.liked}
          propertyId={props.propertyId as string}
          userId={user?.id as string}
          className="inline-block text-lg text-primary-800"
        />
      </div>
    </div>
  );
};

export default ListingInfo;
