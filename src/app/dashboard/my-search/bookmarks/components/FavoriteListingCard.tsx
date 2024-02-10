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
import ListingInfo from "@/components/__shared/listing/ListingInfo";
import ListingDeals from "@/components/__shared/listing/ListingDeals";
import { ListingCardInterface } from "../../../../../../interfaces";
import CaDashEye from "../../../components/icons/CaDashEye";
import { MdDelete } from "react-icons/md";

const FavoriteListingCard = (props: ListingCardInterface) => {
  return (
    <>
      <div className={`relative cursor-default ${props.className}`}>
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
          className={`relative w-full listing-card-slider ${
            props.cardType === "2"
              ? "rounded-2xl h-[347px] lg:h-[509px]"
              : "rounded-t-lg h-52"
          } `}
        >
          {/* Mapping through Featured listings from database */}
          {props.images?.map((image, index) => (
            <SwiperSlide key={index}>
              <div className="relative w-full h-full group">
                <div className="absolute flex flex-col items-center justify-center top-0 left-0 z-50 w-full h-full  transition-all hover:bg-black/50">
                  <Link
                    href={`${props.href}`}
                    className="bg-white px-5 py-6 flex items-center justify-center opacity-0 gap-4 rounded-[16px] group-hover:opacity-100 transition-all duration-200"
                  >
                    <p className="text-zinc-500 text-lg font-semibold">
                      View Property
                    </p>
                    <CaDashEye />
                  </Link>
                  <button className="mt-8 flex items-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-200 cursor-pointer">
                    <p className="text-white text-lg font-semibold underline">
                      Remove
                    </p>
                    <MdDelete className="text-[#B0B0B0] h-6 w-6" />
                  </button>
                </div>
                <Image
                  src={image}
                  alt={props.propertyName as string}
                  fill
                  className="brightness-[0.8]"
                  style={{ objectFit: "cover" }}
                />
              </div>
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
          <div className="w-full space-x-3 text-center custom-l-pagination bottom-40"></div>
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
          className={`bg-white text-neutral-800 ${
            props.cardType === "2" ? null : "shadow-lg"
          }`}
        />
        {/* Deals */}
        <ListingDeals membership={props.membership} deal={props.deal} />
      </div>
    </>
  );
};

export default FavoriteListingCard;
