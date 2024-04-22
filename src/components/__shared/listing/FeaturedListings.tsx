"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import React from "react";
import ListingCard from "./ListingCard";
import SkeletonListing from "../ui/skeleton/SkeletonListing";
import FetchingStates from "../ui/data_fetching/FetchingStates";
import Button from "../ui/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Mousewheel } from "swiper/modules";
import { useFetchFeaturedListings } from "@/app/properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps } from "@/lib/enum";
import SomethingWentWrong from "@/app/components/SomethingWentWrong";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  showAllButton?: boolean;
};

const FeaturedListings = ({ className, showAllButton }: Props) => {
  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchFeaturedListings();

  return (
    <>
      <section
        className={cn(
          "no-print h-fit w-full",
          {
            hidden: (error || (listings && listings?.length < 1)) && !isLoading,
          },
          className,
        )}
      >
        <div className="mb-8 flex flex-wrap items-center justify-between gap-5">
          <h2>Featured Listings</h2>
          <Button
            href="/properties"
            variant="ghost"
            className={`text-sm text-neutral-800 ${
              showAllButton ? "block" : "hidden"
            } ${isLoading && "hidden"}`}
          >
            Show all
          </Button>
        </div>
        <FetchingStates
          data={listings}
          error={error}
          errorComponent={
            <SomethingWentWrong
              className="h-fit"
              onTryAgain={() => {
                mutate();
              }}
            />
          }
        />
        {/* lg and above */}
        <div>
          <Swiper
            effect="coverflow"
            mousewheel
            grabCursor
            centeredSlides
            slidesPerView={0.5}
            spaceBetween={10}
            coverflowEffect={{
              rotate: 20,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: false,
            }}
            breakpoints={{
              360: {
                slidesPerView: 1,
              },
              768: {
                // spaceBetween: 0,
                slidesPerView: 2,
                coverflowEffect: {
                  rotate: 50,
                },
              },
              1300: {
                slidesPerView: 4,
                coverflowEffect: {
                  rotate: 50,
                },
              },
            }}
            modules={[FreeMode, EffectCoverflow, Mousewheel]}
            className="mySwiper h-fit w-full"
          >
            {isLoading
              ? Array.from({ length: 5 }, (_, idx) => (
                  <SwiperSlide
                    key={idx + 1}
                    className={`aspect-square h-full min-w-[16rem] max-w-[16rem] xs:aspect-auto xs:min-w-[23rem] xs:max-w-[23rem]`}
                  >
                    <SkeletonListing key={idx} cardType={2} className="h-80" />
                  </SwiperSlide>
                ))
              : listings?.map((listing, idx) => (
                  <SwiperSlide
                    key={idx}
                    className={`aspect-square h-full min-w-[16rem] max-w-[16rem] xs:aspect-auto xs:min-w-[23rem] xs:max-w-[23rem]`}
                  >
                    <ListingCard
                      key={listing.id}
                      {...getListingProps(listing, user as UserType)}
                      showOnlyImage
                    />
                  </SwiperSlide>
                ))}
          </Swiper>
        </div>
      </section>
    </>
  );
};

export default FeaturedListings;
