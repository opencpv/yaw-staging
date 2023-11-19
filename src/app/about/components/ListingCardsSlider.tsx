"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/grid";
import "swiper/css/pagination";

import "./custom-swiper.css";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ListingCard from "./ListingCard";

type Props = {
  listings: ListingCardInterface[];
};

const ListingCardSlider = ({ listings }: Props) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        centeredSlides
        spaceBetween={20}
        grabCursor
        observer
        pagination={{
          clickable: true,
          dynamicBullets: true,
          dynamicMainBullets: 3,
        }}
        navigation={{
          nextEl: ".custom-next-btn",
          prevEl: ".custom-prev-btn",
        }}
        modules={[Pagination, Navigation]}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
          1240: {
            slidesPerView: 4,
          },
        }}
        className="w-full h-full listing-cards-slider"
      >
        {/* Mapping through Featured listings from database */}
        {listings.map((listing) => (
          <SwiperSlide
            key={listing.id}
            className="mb-14"
            style={{ height: "calc((100% - 30px) / 4)" }}
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
      <div className="relative z-20 bottom-[6rem] w-11/12 -mt-4 mx-auto flex items-center justify-center 2xl:w-9/12">
        <div className="inline-flex items-center justify-between w-full gap-5">
          <div className="grid w-12 h-12 rounded-full cursor-pointer custom-prev-btn bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronLeft className="text-white" />
          </div>
          <div className="w-full space-x-3 text-center custom-pagination-listing"></div>
          <div className="grid w-12 h-12 rounded-full cursor-pointer custom-next-btn bg-accent-50 shrink-0 place-items-center md:w-16 md:h-16">
            <FaChevronRight className="text-white" />
          </div>
        </div>
      </div>
    </>
  );
};

export default ListingCardSlider;
