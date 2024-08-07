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
import { getListingProps, Listing } from "@/lib/enum";
import SomethingWentWrong from "@/components/__shared/ui/states/SomethingWentWrong";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/lib/utils/intersectionObserver";

type Props = {
  className?: string;
  hideShowAll?: boolean;
};

const RecommendedListings = ({ className, hideShowAll }: Props) => {
  const { ref, hasIntersected } = useIntersectionObserver();

  const { user } = useAppStore();
  const {
    data: listings,
    error,
    isLoading,
    mutate,
  } = useFetchRecommendedListings();

  return (
    <section
      className={cn(
        "no-print h-fit w-full",
        {
          hidden: (error || (listings && listings?.length < 1)) && !isLoading,
        },
        className,
      )}
    >
      <div
        className="mb-8 flex flex-wrap items-center justify-between gap-5"
        ref={ref as unknown as React.LegacyRef<HTMLDivElement>}
      >
        <h2>Recommended Listings</h2>
        <Button
          href="/properties"
          variant="ghost"
          className={`text-sm text-neutral-800 ${
            hideShowAll ? "hidden" : "block"
          } ${isLoading && "hidden"}`}
        >
          Show all
        </Button>
      </div>
      {hasIntersected && (
        <>
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
          <div>
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
                        {...getListingProps(
                          listing as Partial<Listing>,
                          user as UserType,
                        )}
                        showOnlyImage
                      />
                    </SwiperSlide>
                  ))}
            </Swiper>
          </div>
        </>
      )}
    </section>
  );
};

export default RecommendedListings;
