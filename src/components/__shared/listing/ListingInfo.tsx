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
      className={`w-full px-5 py-4 space-y-6 rounded-b-lg ${props.className}`}
    >
      <div className="space-y-3 text-sm">
        <div className="grid items-center justify-between gap-x-1 gap-y-3 min-[320px]:grid-cols-3">
          <div className="flex gap-1 items-center min-[320px]:col-span-2">
            <HiOutlineHomeModern className="text-primary-600 shrink-0" />
            <p
              className="font-[600] text-primary-600 truncate"
              title={`${props.propertyName} at ${props.city}`}
            >
              <span>{props.propertyName}</span>
              <span className=""> at </span>
              <span className="capitalize">{props.city}</span>
            </p>
          </div>
          <div className="flex items-center gap-2 min-w-max min-[320px]:ml-auto">
            {props.ratingCount === 0 ? (
              <FaRegStar className="text-yellow-300" />
            ) : (
              <FaStar className="text-yellow-300" />
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
                className="underline text-neutral-900 hover:text-neutral-900 active:text-neutral-900"
              >
                <small>Rate</small>
              </Link>
            )}
          </div>
        </div>
        <p className="max-w-xl line-clamp-2 text-neutral-500 sm:line-clamp-2 ">
          {props.propertyDescription}
        </p>
      </div>
      <div className="space-y-2 ">
        <div className="flex flex-wrap items-center gap-2 text-xs">
          <div className="w-fit">
            <p className="text-sm font-[700] text-neutral-900">
              GHS&nbsp;
              <span className="font-[500]">
                {formatPrice(props?.price as number)} / Month
              </span>
            </p>
          </div>
          <div className="flex-1 flex items-center justify-between gap-x-2 gap-y-3 w-full">
            <small className="rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs w-max">
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
