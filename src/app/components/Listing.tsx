"use client";
import React, { useState } from "react";
import {
  FaChevronLeft,
  FaChevronRight,
  FaHeart,
  FaRegHeart,
  FaRegStar,
  FaStar,
} from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "@/app/styles/listings.css";

import { Pagination, Navigation } from "swiper/modules";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";

interface ListingCardInterface {
  id?: number | string;
  images: string[];
  propertyType: string;
  propertyDescription: string;
  rating: number;
  ratingCount: number;
  paymentStructure:
    | "Yearly"
    | "Bi-Annually"
    | "Quarterly"
    | "Every-6-Months"
    | "Every-3-Years";
  monthlyAmount: number;
  price: number;
  deal: "Editor's Choice" | "Price Drop" | "Best Value" | "None" | "none" | "";
  liked: boolean;
  membership: "Certified" | "Verified" | "Unverified" | "None" | "none" | "";
  className?: string;
  href: string;
}

const ListingCard = ({
  propertyType,
  propertyDescription,
  price,
  deal,
  images,
  liked,
  membership,
  monthlyAmount,
  rating,
  ratingCount,
  paymentStructure,
  href,
  className,
}: ListingCardInterface) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const toggleLiked = () => {
    setIsLiked((prevState) => !prevState);
  };
  return (
    <div className={`min-w-80 cursor-default shadow-lg ${className}`}>
      <Swiper
        pagination={{
          clickable: true,
          //   el: ".custom-l-pagination",
          dynamicBullets: true,
          dynamicMainBullets: 3,
          //   bulletActiveClass: 'listing-p-bullet-active',
          //   bulletClass: 'listing-p-bullet'
        }}
        navigation={{
          nextEl: ".custom-l-next",
          prevEl: ".custom-l-prev",
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper listing-card relative h-52 w-full rounded-t-lg"
      >
        {/* Mapping through Featured listings from database */}
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href={href}>
              <div className="relative h-full w-full">
                <Image
                  src={image}
                  fill
                  alt={propertyType.toLowerCase()}
                  className="brightness-[0.8]"
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Pagination bullets and button */}
        <div className="custom-l-prev absolute bottom-20 left-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <FaChevronLeft className="text-sm text-neutral-700" />
        </div>
        <div className="custom-l-pagination bottom-40 w-full space-x-3 text-center"></div>
        <div className="custom-l-next absolute bottom-20 right-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <FaChevronRight className="text-sm text-neutral-700" />
        </div>
      </Swiper>
      {/* Card info */}
      <div className="w-full space-y-6 rounded-b-lg bg-white px-5 py-4">
        <div className="space-y-3 text-xs">
          <div className="flex flex-wrap justify-between gap-x-3 gap-y-1">
            <div className="flex items-center gap-2">
              <HiOutlineHomeModern className="text-primary-600" />
              <p className="text-sm font-[600] text-primary-600">
                {propertyType?.toLowerCase()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {ratingCount === 0 ? (
                <FaRegStar className="text-yellow-300" />
              ) : (
                <FaStar className="text-yellow-300" />
              )}

              <small className="underline">{rating}</small>
              <small>( {ratingCount}+ )</small>
              {(ratingCount === 0 || rating === 0) && (
                <Link
                  href=""
                  className="text-neutral-900 underline hover:text-neutral-900 active:text-neutral-900"
                >
                  <small>Rate</small>
                </Link>
              )}
            </div>
          </div>
          <p className="line-clamp-3 max-w-xl text-neutral-500 sm:line-clamp-2 ">
            {propertyDescription}
          </p>
        </div>
        <div className="space-y-2 ">
          <div className="flex flex-wrap items-center justify-between gap-y-1 text-xs">
            <div className="flex flex-wrap items-end gap-2">
              <div>
                <p className="text-sm font-[700] text-neutral-900">
                  GHS
                  <span className="font-[500]">
                    {" "}
                    {price?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    {/** Rounds to 2d.p and adds a comma to the figure if necessary */}
                  </span>
                </p>
              </div>
              <small className="font-[600] text-neutral-500">
                paid {paymentStructure}
              </small>
            </div>
            {liked || isLiked ? (
              <FaHeart
                className={`cursor-pointer text-lg text-primary-800 ${
                  isLiked && "pulsate-bck"
                }`}
                onClick={toggleLiked}
              />
            ) : (
              <FaRegHeart
                className="cursor-pointer text-lg text-primary-800"
                onClick={toggleLiked}
              />
            )}
          </div>
          <div className="flex justify-between">
            <small className=" inline rounded-xl bg-[#E7F8F2] px-3 py-1 text-[0.55rem]">
              - GHS{" "}
              {monthlyAmount?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              / Month
            </small>
          </div>
        </div>
      </div>
      {/* Deals */}
      <div className="absolute top-4 z-10 flex w-full items-center justify-between text-neutral-900">
        <div
          className={`ml-4 rounded-md bg-white px-3 py-2 shadow-md ${
            membership === "Unverified" && "invisible"
          }`}
        >
          <div className="flex items-center gap-2">
            {deal === "Best Value" && (
              <>
                <Image
                  src="/svg/deals/best-value.svg"
                  alt={deal?.toLowerCase()}
                  height={14}
                  width={14}
                />
                <p className="text-xs">Best Value</p>
              </>
            )}
            {deal === "Editor's Choice" && (
              <>
                <Image
                  src="/svg/deals/editors-choice.svg"
                  alt="deal"
                  height={14}
                  width={14}
                />
                <p className="text-xs">Editor&apos;s Choice</p>
              </>
            )}
            {deal === "Price Drop" && (
              <>
                <Image
                  src="/svg/deals/price-drop.svg"
                  alt="deal"
                  height={14}
                  width={14}
                />
                <p className="text-xs">Price Drop</p>
              </>
            )}
            {(deal === "None" || deal === "none" || deal === "") && <></>}
          </div>
        </div>
        {/* Membership */}
        {membership === "Certified" && (
          <div className="mr-4 shadow-2xl">
            <Image
              src="/svg/badge/certified.svg"
              alt={membership?.toLowerCase()}
              title={membership?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </div>
        )}
        {membership === "Verified" && (
          <div className="mr-4 shadow-2xl">
            <Image
              src="/svg/badge/verified.svg"
              alt={membership?.toLowerCase()}
              title={membership?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </div>
        )}
        {membership === "Unverified" && (
          <div className="mr-4 shadow-2xl">
            <div className="ml-4 rounded-md bg-accent-50 px-4 py-2 text-xs font-[600] text-yellow-950 shadow-md">
              Not Verified
            </div>
          </div>
        )}
        {(membership === "None" ||
          membership === "none" ||
          membership === "") && (
          <div className="mr-4 shadow-2xl">
            <></>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
