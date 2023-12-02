"use client";
import React, { useState } from "react";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/custom-swiper.css";

import { Pagination, Navigation } from "swiper/modules";
import { HiOutlineHomeModern } from "react-icons/hi2";
import Link from "next/link";
import Image from "next/image";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import { formatPrice } from "@/lib/utils/numberManipulation";
import FavoriteModal from "./FavoriteModal";
import { useDisclosure } from "@nextui-org/react";
import Tooltip from "@/components/ui/Tooltip";
import { useToastDisclosure } from "@/lib/custom-hooks/useToastDisclosure";
import { useListingStore } from "@/store/listing/useListingStore";

const ListingCard = (props: ListingCardInterface) => {
  const { icons } = useAssets();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const toggleLiked = () => {
    setIsLiked((prevState) => !prevState);
  };

  const { contactUponFavorite } = useListingStore();
  const { onOpen, isOpen, onOpenChange, onClose } = useDisclosure();
  const { onOpen: toastOnOpen } = useToastDisclosure();

  const handleSaveFavoriteOption = () => {
    onClose();
    toastOnOpen(
      contactUponFavorite
        ? "Great choice! We've noted that you're open to being contacted by your property owners. Expect to hear from them soon!"
        : "Noted! Your preference for privacy is important to us. Your property owners will not contact you unless necessary.",
      9000
    );
  };

  return (
    <>
      <FavoriteModal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        onClose={handleSaveFavoriteOption}
      />
      <div
        className={`relative cursor-default ${props.className}`}
      >
        <Swiper
          pagination={{
            clickable: true,
            dynamicBullets: true,
            dynamicMainBullets: 3,
          }}
          navigation={{
            nextEl: ".custom-l-next",
            prevEl: ".custom-l-prev",
          }}
          modules={[Pagination, Navigation]}
          className={`relative w-full rounded-t-lg listing-card-slider shadow-sm h-52`}
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
                    style={{ objectFit: "cover" }}
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
        <div className="w-full px-5 py-4 space-y-6 bg-white rounded-b-lg border-b shadow-lg text-neutral-800">
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

                {props.ratingCount > 0 && (
                  <small className="underline">
                    <Link href="">{props.rating}</Link>
                  </small>
                )}
                <small>
                  ({" "}
                  {props.ratingCount > 0
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
              <div className="flex flex-wrap items-end gap-2">
                <div>
                  <p className="text-sm font-[700] text-neutral-900">
                    GHS&nbsp;
                    <span className="font-[500]">
                      {formatPrice(props?.price)} / Month
                    </span>
                  </p>
                </div>
              </div>
              {props.liked || isLiked ? (
                <FaHeart
                  className={`cursor-pointer text-lg text-primary-800 ${
                    isLiked && "ping"
                  }`}
                  onClick={toggleLiked}
                />
              ) : (
                <FaRegHeart
                  className="text-lg cursor-pointer text-primary-800"
                  onClick={() => {
                    toggleLiked();
                    setTimeout(() => {
                      onOpen();
                    }, 500);
                  }}
                />
              )}
            </div>
            <div className="flex justify-between">
              <small className=" inline rounded-xl bg-[#E7F8F2] px-3 py-1 text-[0.55rem]">
                One Year Advance
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
                    src={icons.BestValue}
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
                    src={icons.EditorsChoice}
                    alt={props.deal?.toLowerCase()}
                    height={14}
                    width={14}
                  />
                  <p className="text-xs">Editor&apos;s Choice</p>
                </>
              )}
              {props.deal === "Price Drop" && (
                <>
                  <Image
                    src={icons.PriceDrop}
                    alt={props.deal?.toLowerCase()}
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
              <Tooltip content={props.membership}>
                <Image
                  src={icons.Certified}
                  alt={props.membership?.toLowerCase()}
                  height={35}
                  width={35}
                  className="shadow-2xl"
                />
              </Tooltip>
            </div>
          )}
          {props.membership === "Verified" && (
            <div className="mr-4 shadow-2xl">
              <Tooltip content={props.membership}>
                <Image
                  src={icons.Verified}
                  alt={props.membership?.toLowerCase()}
                  height={35}
                  width={35}
                  className="shadow-2xl"
                />
              </Tooltip>
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
    </>
  );
};

export default ListingCard;
