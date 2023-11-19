"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "swiper/css/free-mode";

import "./custom-swiper.css";

// import required modules
import { Pagination, Navigation, Grid } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ListingCard from "./ListingCard";

type Props = {
  listings: ListingCardInterface[];
};

const ListingCardSliderGrid = ({ listings }: Props) => {
  return (
    <div className="w-full h-full pb-10">
      <Swiper
        slidesPerView={1}
        // centeredSlides
        grid={{
          fill: "row",
          rows: 1,
        }}
        spaceBetween={20}
        grabCursor
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
          el: ".slider-grid-pagination",
        }}
        navigation={{
          nextEl: ".listing-grid-next",
          prevEl: ".listing-grid-prev",
        }}
        modules={[Grid, Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
            grid: {
              rows: 3,
            },
          },
          900: {
            slidesPerView: 3,
            grid: {
              rows: 3,
            },
          },
          1024: {
            slidesPerView: 2,
            grid: {
              rows: 3,
            }
          },
          1240: {
            slidesPerView: 3,
            grid: {
              rows: 3,
            },
          },
        }}
        className="w-full h-full listing-cards-grid-slider pb-20"
      >
        {/* Mapping through Featured listings from database */}
        {listings.map((listing) => (
          <SwiperSlide
            key={listing.id}
            // className="mb-14"
            // style={{ height: "calc((100% - 30px) / 4)" }}
          >
            <ListingCard
              propertyType={listing.propertyType}
              propertyDescription={listing.propertyDescription}
              deal={listing.deal}
              membership={listing.membership}
              liked={listing.liked}
              price={listing.price}
              monthlyAmount={listing.monthlyAmount}
              paymentStructure={listing.paymentStructure}
              rating={listing.rating}
              ratingCount={listing.ratingCount}
              images={listing.images?.map((image) => image)}
              href={`${listing.href}`}
            />
          </SwiperSlide>
        ))}
      </Swiper>
      {/* Pagination bullets and button */}
      <div className="relative top-10 z-20 w-11/12 -mt-4 mx-auto flex items-center justify-center 2xl:w-9/12">
        <div className="inline-flex items-center justify-between w-full gap-5">
          <div className="grid w-12 h-12 rounded-full cursor-pointer listing-grid-prev bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronLeft className="text-white" />
          </div>
          <div className="ml-10 slider-grid-pagination w-full hidden min-[250px]:block min-[360px]:ml-20"></div>
          <div className="grid w-12 h-12 rounded-full cursor-pointer listing-grid-next bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListingCardSliderGrid;
