"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import React from "react";
import ListingCard from "./ListingCard";
import SkeletonListing from "../skeleton/SkeletonListing";
import FetchingStates from "../data_fetching/FetchingStates";
import Button from "../button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useFetchRecommendedListings } from "@/app/properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps } from "@/lib/enum";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/lib/utils/intersectionObserver";

type Props = {
  className?: string;
  showAllButton?: boolean;
};

const RecommendedListings = ({ className, showAllButton }: Props) => {
  const { ref, isIntersecting } = useIntersectionObserver();

  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchRecommendedListings();

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
          <h2>Recommended Listings</h2>
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
        {isIntersecting && (
          <div ref={ref as unknown as React.LegacyRef<HTMLDivElement>}>
            <Swiper
              effect="coverflow"
              grabCursor
              centeredSlides
              slidesPerView={"auto"}
              coverflowEffect={{
                rotate: 50,
                slideShadows: false,
              }}
              modules={[EffectCoverflow]}
              className="mySwiper h-fit w-full"
            >
              {isLoading
                ? Array.from({ length: 5 }, (_, idx) => (
                    <SwiperSlide
                      key={idx + 1}
                      className={`h-full w-full max-w-96`}
                    >
                      <SkeletonListing
                        key={idx}
                        cardType={2}
                        className="h-80"
                      />
                    </SwiperSlide>
                  ))
                : listings?.map((listing, idx) => (
                    <SwiperSlide key={idx} className={`h-full w-full max-w-96`}>
                      <ListingCard
                        key={listing.id}
                        {...getListingProps(listing, user as UserType)}
                        showOnlyImage
                      />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        )}
      </section>
    </>
  );
};

export default RecommendedListings;
