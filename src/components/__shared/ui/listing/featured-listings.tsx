"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import React from "react";
import SkeletonListing from "../skeleton/skeleton-listing";
import FetchingStates from "../data_fetching/fetching-states";
import { LinkButton } from "../button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow } from "swiper/modules";
import { useFetchFeaturedListings } from "@/app/properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";
import { getListingProps } from "@/lib/enum";
import { cn } from "@/lib/utils";
import { useIntersectionObserver } from "@/lib/utils/intersectionObserver";
import dynamic from "next/dynamic";
const ListingCard = dynamic(() => import("./listing-card"));
const FramerWrapper = dynamic(() => import("../../hoc/framer-wrapper"));

type Props = {
  className?: string;
  showAllButton?: boolean;
};

const FeaturedListings = ({ className, showAllButton }: Props) => {
  const { user } = useAppStore();

  const { ref, hasIntersected } = useIntersectionObserver();

  const { data: listings, error, isLoading } = useFetchFeaturedListings();

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
        className="mb-8 flex flex-wrap items-center justify-between gap-x-5 gap-y-2"
        ref={ref as unknown as React.LegacyRef<HTMLDivElement>}
      >
        <h2>Featured Listings</h2>
        <LinkButton
          href="/properties"
          variant="link"
          size="fit"
          className={`text-sm text-neutral-800 ${
            showAllButton ? "block" : "hidden"
          } ${isLoading && "hidden"}`}
        >
          Show all
        </LinkButton>
      </div>
      <FetchingStates data={listings} error={error} />
      {hasIntersected && (
        <FramerWrapper>
          <Swiper
            effect="coverflow"
            centeredSlides
            grabCursor
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
                    <SkeletonListing key={idx} cardType={2} className="h-80" />
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
        </FramerWrapper>
      )}
    </section>
  );
};

export default FeaturedListings;
