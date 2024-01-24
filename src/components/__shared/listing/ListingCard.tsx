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
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import ListingInfo from "./ListingInfo";
import ListingDeals from "./ListingDeals";
import { ListingCardInterface } from "../../../../interfaces";

const ListingCard = (props: ListingCardInterface) => {
  return (
    <>
      <div
        className={`relative cursor-default ${props.className} ${
          props.cardType === "2"
            ? null
            : "rounded-b-lg shadow-[1px_3px_13px_rgba(0,_0,_0,_0.10)]"
        }`}
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
          className={`listing-card-slider relative w-full ${
            props.cardType === "2" ? "h-80 rounded-2xl" : "h-52 rounded-t-lg"
          } `}
        >
          {/* Mapping through Featured listings from database */}
          {props.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <Link href={`${props.href}`}>
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
            </SwiperSlide>
          ))}

          {/* Pagination bullets and button */}
          <div
            className={`custom-l-prev absolute left-[5%] z-10 flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full bg-white ${
              props.cardType === "2" ? "bottom-32" : "bottom-20"
            }`}
          >
            <MdChevronLeft className="text-lg text-neutral-700" />
          </div>
          <div className="custom-l-pagination bottom-40 w-full space-x-3 text-center"></div>
          <div
            className={`custom-l-next absolute right-[5%] z-10 flex h-10 w-10 shrink-0 cursor-default items-center justify-center rounded-full bg-white ${
              props.cardType === "2" ? "bottom-32" : "bottom-20"
            }`}
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
          className={`bg-white text-neutral-800`}
        />
        {/* Deals */}
        <ListingDeals membership={props.membership} deal={props.deal} />
      </div>
    </>
  );
};

export default ListingCard;
