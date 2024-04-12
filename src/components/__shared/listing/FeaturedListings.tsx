"use client";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/effect-coverflow";
import React from "react";
import ListingCard from "./ListingCard";
import SkeletonListing from "../ui/skeleton/SkeletonListing";
import FetchingStates from "../ui/data_fetching/FetchingStates";
import images from "@/enum/temp/images";
import FetchErrorMessage from "../ui/data_fetching/FetchErrorMessage";
import Button from "../ui/button/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, FreeMode, Mousewheel } from "swiper/modules";
import { addQueryParamsToUrl } from "@/lib/utils/stringManipulation";
import { useFetchFeaturedListings } from "@/app/properties/services";
import { useAppStore } from "@/store/dashboard/AppStore";

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
    isFetching,
  } = useFetchFeaturedListings();

  return (
    <>
      <section className={`no-print h-fit w-full ${className}`}>
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
          errorComponent={<FetchErrorMessage />}
          emptyStateComponent={
            <p className="mt-4 text-center italic">
              There are no properties yet.
            </p>
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
                      propertyId={listing.property_id as number}
                      key={listing.id}
                      href={addQueryParamsToUrl(
                        `/properties/${listing.property_id}`,
                        {
                          property_type: listing.property_type,
                          bedrooms: listing.bedrooms,
                          city: listing.city,
                          neighbourhood: listing.neighbourhood,
                          subtitle: listing.subtitle,
                          advance_period: listing.advance_period,
                          payment_structure: listing.advance_payment_options,
                          amount_per_month: listing.monthly_amount as number,
                          rating: 4,
                        },
                      )}
                      bedrooms={listing.bedrooms as number}
                      propertyType={listing.property_type as string}
                      city={listing.city as string}
                      neighbourhood={listing.neighbourhood as string}
                      images={images} // TODO: check database
                      liked={listing?.favorite_user_ids?.includes(
                        user?.id as string,
                      )}
                      guarantee={
                        listing.is_property_verified
                          ? ("Verified" as GuaranteeTag)
                          : listing.is_lister_certified
                            ? ("Certified" as GuaranteeTag)
                            : undefined
                      }
                      monthlyAmount={listing.monthly_amount as number}
                      paymentStructure={"Bi-Annually" as PaymentStructure} // TODO: check database
                      subtitle={listing.subtitle as string}
                      rating={4.5} // TODO: check database
                      ratingCount={105} // TODO: check database
                      hint={
                        listing?.property?.is_realtors_choice
                          ? ("Realtor's Choice" as HintTag)
                          : listing?.property?.is_best_value
                            ? ("Best Value" as HintTag)
                            : undefined
                      }
                      advancePeriod={listing.advance_period as number}
                      ViewingFee={listing.viewing_fee as number}
                      showOnlyImage
                      cardType="2"
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
