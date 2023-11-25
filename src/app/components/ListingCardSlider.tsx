"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "@/app/styles/listings.css";

// import required modules
import { Grid, Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ListingCard from "./Listing";

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

type Props = {
  listings: ListingCardInterface[];
};

const ListingCardSlider = ({ listings }: Props) => {
  return (
    <div className="px-4 lg:px-0">
      <Swiper
        slidesPerView={1}
        grid={{
          rows: 1,
        }}
        spaceBetween={20}
        grabCursor
        observer
        pagination={{
          clickable: true,
          // el: ".custom-pagination-listing",
          type: "bullets",
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          nextEl: ".custom-next-btn",
          prevEl: ".custom-prev-btn",
        }}
        breakpoints={{
          640: {
            slidesPerView: 1,
            grid: {
              rows: 1,
            },
          },
          768: {
            slidesPerView: 2,
            grid: {
              rows: 1,
            },
          },
          1240: {
            slidesPerView: 4,
            grid: {
              rows: 1,
            },
          },
        }}
        modules={[Grid, Pagination, Navigation]}
        className="w-full mySwiper listing-card-grid listing-group"
      >
        {/* Mapping through Featured listings from database */}
        {listings.map((listing) => {
          const {
            id,
            deal,
            images,
            liked,
            membership,
            monthlyAmount,
            paymentStructure,
            price,
            propertyDescription,
            propertyType,
            rating,
            ratingCount,
          } = listing;
          return (
            <SwiperSlide key={id} className="mb-14">
              <ListingCard
                propertyType={propertyType}
                propertyDescription={propertyDescription}
                deal={deal}
                membership={membership}
                liked={liked}
                price={price}
                monthlyAmount={monthlyAmount}
                paymentStructure={paymentStructure}
                rating={rating}
                ratingCount={ratingCount}
                images={images.map((image) => image)}
                href=""
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
      {/* Pagination bullets and button */}
      <div className="relative z-20 bottom-[2.5rem] w-11/12 mx-auto flex items-center justify-center 2xl:w-9/12">
        <div className="inline-flex items-center justify-center w-full gap-40 lg:gap-80">
          <div className="grid w-12 h-12 rounded-full cursor-pointer custom-prev-btn bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronLeft className="text-white" />
          </div>
          {/* <div className="w-full space-x-3 text-center custom-pagination-listing"></div> */}
          <div className="grid w-12 h-12 rounded-full cursor-pointer custom-next-btn bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardSlider;
