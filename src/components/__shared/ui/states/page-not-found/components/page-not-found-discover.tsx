import { motion } from "framer-motion";

import ListingCard from "../../../listing/listing-card";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useFetchRecommendedListings } from "@/app/properties/services";
import SkeletonListing from "../../../skeleton/skeleton-listing";
import { getListingProps, Listing } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useRef } from "react";
import SliderNav from "../../../sliders/slider-nav";

function PageNotFoundDiscover() {
  const { user } = useAppStore();

  const { data: listings, error, isLoading } = useFetchRecommendedListings();
  const ref = useRef<SwiperRef>(null);
  return (
    <motion.div
      layout
      className="flex w-full flex-col items-center justify-start gap-16 lg:flex-row lg:items-start"
    >
      <div className="flex w-full flex-col justify-start gap-6 lg:w-[50%] lg:gap-[130px]">
        <div className="flex flex-col gap-4 lg:gap-6">
          <h2 className="font-bold capitalize text-[#1E1E1E] text-3xl lg:text-4xl">
            Discover your new <br /> home with us
          </h2>
          <h5 className="font-normal text-[#6F6F6F] lg:text-xl">
            Browse through our genuine listings without stress
          </h5>
        </div>

        <div className="flex w-[216px] items-center justify-between">
     
          <SliderNav
            position="left"
            isAbsolute={false}
            className="size-[56px] border-[1px] border-primary"
            classNames={{
              icon: "text-2xl text-primary",
            }}
            onClick={() => {
              ref.current?.swiper.slidePrev();
            }}
          />
          <SliderNav
            position="right"
            isAbsolute={false}
            className="size-[56px] border-[1px] border-primary"
            classNames={{
              icon: "text-2xl text-primary",
            }}
            onClick={() => {
              ref.current?.swiper.slideNext();
            }}
          />
      
        </div>
      </div>
      <div className="w-full">
        {/* <RecommendedListings /> */}

        <Swiper
          ref={ref}
          effect="coverflow"
          grabCursor
          spaceBetween={10}
          breakpoints={{
            0: {
              spaceBetween: 10,
            },
            768: {
              spaceBetween: 10,
            },
            1024: {
              spaceBetween: 24,
            },
          }}
          // centeredSlides
          slidesPerView={"auto"}
          // coverflowEffect={{
          //   rotate: 50,
          //   slideShadows: false,
          // }}
          // modules={[EffectCoverflow]}
          className="mySwiper h-fit w-full"
        >
          {isLoading
            ? Array.from({ length: 3 }, (_, idx) => (
                <SwiperSlide
                  key={idx + 1}
                  className={`h-full w-full max-w-[480px]`}
                >
                  <SkeletonListing
                    key={idx}
                    cardType={2}
                    className="h-[500px]"
                  />
                </SwiperSlide>
              ))
            : listings?.map((listing, idx) => (
                <SwiperSlide key={idx} className={`h-full !w-fit`}>
                  <ListingCard
                    key={listing.id}
                    {...getListingProps(
                      listing as Partial<Listing>,
                      user as UserType,
                    )}
                  />
                </SwiperSlide>
              ))}
        </Swiper>
      </div>
    </motion.div>
  );
}

export default PageNotFoundDiscover;
