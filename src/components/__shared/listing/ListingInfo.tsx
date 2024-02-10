import React from "react";
import LikeHeart from "../ui/LikeHeart";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import { formatPrice } from "@/lib/utils/numberManipulation";
import { ListingCardInterface } from "../../../../interfaces";

const ListingInfo = (props: ListingCardInterface) => {
  return (
    <div
      className={`w-full space-y-6 rounded-b-lg px-5 py-4 ${props.className}`}
    >
      <div className="space-y-3 text-sm">
        <div className="grid items-center justify-between gap-x-1 gap-y-3 min-[320px]:grid-cols-3">
          <div className="flex items-center gap-1 min-[320px]:col-span-2">
            <HiOutlineHomeModern className="shrink-0 text-primary-600" />
            <p
              className="truncate font-[600] text-primary-600"
              title={`${props.propertyName} at ${props.city}`}
            >
              <span>{props.propertyName}</span>
              <span className=""> at </span>
              <span className="capitalize">{props.city}</span>
            </p>
          </div>
          <div className="flex min-w-max items-center gap-2 min-[320px]:ml-auto">
            {props.ratingCount === 0 ? (
              <FaRegStar className="text-yellow-400" />
            ) : (
              <FaStar className="text-yellow-400" />
            )}

            {(props.ratingCount as number) > 0 && (
              <small className="underline">
                <Link href="">{props.rating}</Link>
              </small>
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
        {/* description */}
        <p className="line-clamp-2 max-w-xl text-neutral-500 sm:line-clamp-2 ">
          {props.propertyDescription}
        </p>
      </div>
      <div className="space-y-2 pt-4">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="w-fit">
            <p className="text-sm font-[700] text-neutral-900">
              GHS&nbsp;
              <span className="font-[500]">
                {formatPrice(props?.price as number)} / Month
              </span>
            </p>
          </div>
          <div className="flex w-full flex-1 items-center justify-between gap-x-2 gap-y-3">
            <small className="w-max rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs">
              One Year Advance
            </small>
            <LikeHeart
              liked={props.liked}
              className="inline-block text-lg text-primary-800"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
