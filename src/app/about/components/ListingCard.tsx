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
import style from "../components/ListingSlider.module.css"
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "./custom-swiper.css";

import { Pagination, Navigation } from "swiper/modules";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";

const ListingCard = (props: ListingCardInterface) => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const toggleLiked = () => {
    setIsLiked((prevState) => !prevState);
  };
  return (
    <div className={`min-w-80 cursor-default shadow-lg ${props.className}`}>
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
        className={`relative w-full rounded-t-lg mySwiper ${style.listingCard} listing-card h-52`}
      >
        {/* Mapping through Featured listings from database */}
        {props.images.map((image, index) => (
          <SwiperSlide key={index}>
            <Link href={`${props.href}`}>
              <div className="relative w-full h-full">
                <Image
                  src={image}
                  alt={props.propertyType.toLowerCase()}
                  fill
                  className="brightness-[0.8]"
                  style={{objectFit: "cover"}}
                />
              </div>
            </Link>
          </SwiperSlide>
        ))}

        {/* Pagination bullets and button */}
        <div className="custom-l-prev absolute bottom-20 left-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronLeft className="text-lg text-neutral-700" />
        </div>
        <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div>
        <div className="custom-l-next absolute bottom-20 right-[5%] z-10 flex h-8 w-8 shrink-0 cursor-default items-center justify-center rounded-full bg-white">
          <MdChevronRight className="text-lg text-neutral-700" />
        </div>
      </Swiper>
      {/* Card info */}
      <div className="w-full px-5 py-4 space-y-6 bg-white rounded-b-lg">
        <div className="space-y-3 text-xs">
          <div className="flex flex-wrap justify-between gap-x-3 gap-y-1">
            <div className="flex items-center gap-2">
              <HiOutlineHomeModern className="text-primary-600" />
              <p className="text-sm font-[600] text-primary-600">
                {props.propertyType?.toLowerCase()}
              </p>
            </div>
            <div className="flex items-center gap-2">
              {props.ratingCount === 0 ? (
                <FaRegStar className="text-yellow-300" />
              ) : (
                <FaStar className="text-yellow-300" />
              )}

              <small className="underline">{props.rating}</small>
              <small>( {props.ratingCount}+ )</small>
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
          <p className="max-w-xl line-clamp-3 text-neutral-500 sm:line-clamp-2 ">
            {props.propertyDescription}
          </p>
        </div>
        <div className="space-y-2 ">
          <div className="flex flex-wrap items-center justify-between text-xs gap-y-1">
            <div className="flex flex-wrap items-end gap-2">
              <div>
                <p className="text-sm font-[700] text-neutral-900">
                  GHS
                  <span className="font-[500]">
                    {" "}
                    {props.price?.toLocaleString("en-US", {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    })}{" "}
                    {/** Rounds to 2d.p and adds a comma to the figure if necessary */}
                  </span>
                </p>
              </div>
              <small className="font-[600] text-neutral-500">
                paid {props.paymentStructure}
              </small>
            </div>
            {props.liked || isLiked ? (
              <FaHeart
                className={`cursor-pointer text-lg text-primary-800 ${
                  isLiked && "pulsate-bck"
                }`}
                onClick={toggleLiked}
              />
            ) : (
              <FaRegHeart
                className="text-lg cursor-pointer text-primary-800"
                onClick={toggleLiked}
              />
            )}
          </div>
          <div className="flex justify-between">
            <small className=" inline rounded-xl bg-[#E7F8F2] px-3 py-1 text-[0.55rem]">
              - GHS{" "}
              {props.monthlyAmount?.toLocaleString("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
              })}{" "}
              / Month
            </small>
          </div>
        </div>
      </div>
      {/* Deals */}
      <div className="absolute z-10 flex items-center justify-between w-full top-4 text-neutral-900">
        <div
          className={`ml-4 rounded-md bg-white px-3 py-2 shadow-md ${
            props.membership === "Unverified" && "invisible"
          }`}
        >
          <div className="flex items-center gap-2">
            {props.deal === "Best Value" && (
              <>
                <Image
                  src="/svg/deals/best-value.svg"
                  alt={props.deal?.toLowerCase()}
                  height={14}
                  width={14}
                />
                <p className="text-xs">Best Value</p>
              </>
            )}
            {props.deal === "Editor's Choice" && (
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
            {props.deal === "Price Drop" && (
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
            {(props.deal === "None" ||
              props.deal === "none" ||
              props.deal === "") && <></>}
          </div>
        </div>
        {/* Membership */}
        {props.membership === "Certified" && (
          <div className="mr-4 shadow-2xl">
            <Image
              src="/svg/badge/certified.svg"
              alt={props.membership?.toLowerCase()}
              title={props.membership?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </div>
        )}
        {props.membership === "Verified" && (
          <div className="mr-4 shadow-2xl">
            <Image
              src="/svg/badge/verified.svg"
              alt={props.membership?.toLowerCase()}
              title={props.membership?.toLowerCase()}
              height={35}
              width={35}
              className="shadow-2xl"
            />
          </div>
        )}
        {props.membership === "Unverified" && (
          <div className="mr-4 shadow-2xl">
            <div className="ml-4 rounded-md bg-accent-50 px-4 py-2 text-xs font-[600] text-yellow-950 shadow-md">
              Not Verified
            </div>
          </div>
        )}
        {(props.membership === "None" ||
          props.membership === "none" ||
          props.membership === "") && (
          <div className="mr-4 shadow-2xl">
            <></>
          </div>
        )}
      </div>
    </div>
  );
};

export default ListingCard;
