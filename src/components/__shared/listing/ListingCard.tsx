"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "@/styles/custom-swiper.css";

import { Pagination, Navigation } from "swiper/modules";
import Link from "next/link";
import Image from "next/image";
import {
  MdChevronLeft,
  MdChevronRight,
  MdOutlineRemoveRedEye,
} from "react-icons/md";
import ListingInfo from "./ListingInfo";
import ListingDeals from "./ListingDeals";
import { ListingCardInterface } from "../../../../interfaces";
import { FaTrash } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import Button from "../ui/button/Button";
import { FaHeart, FaRegEyeSlash } from "react-icons/fa6";

const ListingCard = (props: ListingCardInterface) => {
  return (
    <>
      <div
        className={`relative cursor-default ${props.className} ${
          props.cardType === "2"
            ? null
            : "rounded-b-lg rounded-t-lg shadow-[1px_3px_13px_rgba(0,_0,_0,_0.10)]"
        }`}
      >
        <Swiper
          allowTouchMove
          pagination={
            props.showOnlyImage
              ? false
              : {
                  clickable: true,
                  dynamicBullets: true,
                  dynamicMainBullets: 3,
                }
          }
          navigation={
            props.showOnlyImage
              ? false
              : {
                  nextEl: ".custom-l-next",
                  prevEl: ".custom-l-prev",
                }
          }
          modules={[Pagination, Navigation]}
          className={`listing-card-slider group relative w-full ${
            props.cardType === "2" && !props.showOnlyImage
              ? "h-[26rem] rounded-2xl"
              : props.cardType === "2"
                ? "h-80 rounded-2xl"
                : "h-52 rounded-t-lg"
          } `}
        >
          <ListingDeals membership={props.membership} deal={props.deal} />
          {/* For be the first to know detail listings only */}
          <div
            className={
              props.showNotViewed && !props.isViewed
                ? "pointer-events-none absolute inset-0 z-30 flex h-full w-full items-center justify-center rounded-[inherit] bg-transparent"
                : "hidden"
            }
          >
            <div className="flex flex-col items-center gap-3">
              <Button
                href={props.href}
                className="group/nv pointer-events-auto min-h-unit-12 gap-3 rounded-xl bg-neutral-100 px-6 text-lg text-neutral-400 shadow-lg transition-all hover:scale-110 hover:bg-primary-200 hover:text-white"
              >
                Not Viewed
                <FaRegEyeSlash className="text-neutral-800 group-hover/nv:text-white" />
              </Button>
            </div>
          </div>

          {/* For favourites only */}
          <div
            className={
              props.isMyFavoritePage
                ? "absolute inset-0 z-30 flex h-full w-full -translate-x-full items-center justify-center rounded-[inherit] bg-black bg-opacity-30 transition-all delay-500 group-hover:translate-x-0"
                : "hidden"
            }
          >
            <div className="flex flex-col items-center gap-3">
              <Button
                href={props.href}
                className="group/btn min-h-unit-12 gap-3 rounded-xl bg-neutral-100 px-6 text-lg font-semibold text-neutral-400 hover:bg-primary-200 hover:text-white"
              >
                View Property
                <MdOutlineRemoveRedEye className="text-neutral-800 group-hover/btn:text-white" />
              </Button>
              {props.liked && (
                <Button
                  variant="ghost"
                  className="gap-3 text-lg font-semibold text-neutral-300 underline"
                >
                  Unfavourite
                  <FaHeart />
                </Button>
              )}
            </div>
          </div>
          {props.images?.map((image, index) =>
            props.showOnlyImage || props.isMyFavoritePage ? ( // when only images show without pagination or controls
              <>
                {index === 0 && (
                  <SwiperSlide key={index}>
                    <Link href={`${props.href}`}>
                      <div className="relative h-full w-full">
                        <Image
                          src={image}
                          alt={props.propertyName as string}
                          fill
                          title={`${props.propertyName} at ${props.city}`}
                          className="brightness-[0.8]"
                          style={{ objectFit: "cover" }}
                        />
                      </div>
                    </Link>
                  </SwiperSlide>
                )}
              </>
            ) : (
              <SwiperSlide key={index}>
                {props.isMyFavoritePage ? ( // when listing card is displaying in /dashboard/my-search,
                  // images won't be links
                  <div className="relative h-full w-full">
                    <Image
                      src={image}
                      alt={props.propertyName as string}
                      fill
                      className="brightness-[0.8]"
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                ) : (
                  <Link
                    href={`${props.href}?property_name=${props.propertyName}&city=${props.city}&price=${props.price}&payment_structure=${props.paymentStructure}&amount_per_month=${props.monthlyAmount}&rating=${props.ratingCount}&property_description=${props.propertyDescription}`.replaceAll(
                      " ",
                      "_",
                    )}
                  >
                    <div className="relative h-full w-full">
                      <Image
                        src={image}
                        alt={props.propertyName as string}
                        fill
                        className="brightness-[0.8]"
                        style={{ objectFit: "cover" }}
                      />
                    </div>
                  </Link>
                )}
              </SwiperSlide>
            ),
          )}

          {/* Pagination bullets and button */}
          <div
            className={`custom-l-prev absolute left-[5%] z-10 flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full bg-white ${
              props.cardType === "2" ? "bottom-48" : "bottom-20"
            } ${props.showOnlyImage && "hidden"}`}
          >
            <MdChevronLeft className="text-lg text-neutral-700" />
          </div>
          <div
            className={`custom-l-pagination bottom-40 w-full space-x-3 text-center ${
              props.showOnlyImage && "hidden"
            }`}
          ></div>
          <div
            className={`custom-l-next absolute right-[5%] z-10 flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full bg-white ${
              props.cardType === "2" ? "bottom-48" : "bottom-20"
            } ${props.showOnlyImage && "hidden"}`}
          >
            <MdChevronRight className="text-lg text-neutral-700" />
          </div>
        </Swiper>
        {/* Listing info */}
        <ListingInfo
          liked={props.liked}
          monthlyAmount={props.monthlyAmount}
          paymentStructure={props.paymentStructure}
          price={props.price}
          propertyDescription={props.propertyDescription}
          propertyName={props.propertyName}
          city={props.city}
          rating={props.rating}
          ratingCount={props.ratingCount}
          className={`bg-white text-neutral-800 ${
            props.showOnlyImage && "hidden"
          }`}
        />
        {/* Deals */}
      </div>
    </>
  );
};

export default ListingCard;
