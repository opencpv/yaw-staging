import React from "react";
import LikeHeart from "../ui/LikeHeart";
import { FaRegStar, FaStar } from "react-icons/fa";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import { formatPrice } from "@/lib/utils/numberManipulation";

const ListingInfo = (props: ListingCardInterface) => {
  return (
    <div
      className={`w-full px-5 py-4 space-y-6 rounded-b-lg ${props.className}`}
    >
      <div className="space-y-3 text-sm">
        <div className="grid grid-cols-3 items-center justify-between gap-1">
          <div className="col-span-2 flex items-center gap-2">
            <HiOutlineHomeModern className="text-primary-600 shrink-0" />
            <p
              className="font-[600] text-primary-600 truncate"
              title={`${props.propertyName} in ${props.city}`}
            >
              <span>{props.propertyName}</span>
              <span className=""> in </span>
              <span className="capitalize">{props.city}</span>
            </p>
          </div>
          <div className="col-span-1 flex items-center gap-2 ml-auto">
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
        <div className="flex flex-wrap items-center justify-between text-xs gap-y-1">
          <div className="flex items-center flex-wrap gap-2">
            <div>
              <p className="text-sm font-[700] text-neutral-900">
                GHS&nbsp;
                <span className="font-[500]">
                  {formatPrice(props?.price as number)} / Month
                </span>
              </p>
            </div>
            <div className="flex justify-between">
              <small className=" inline rounded-xl bg-[#E7F8F2] px-3 py-1 text-xs">
                One Year Advance
              </small>
            </div>
          </div>
          <LikeHeart liked={props.liked} className="text-lg text-primary-800" />
        </div>
      </div>
    </div>
  );
};

export default ListingInfo;
