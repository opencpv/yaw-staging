import { motion } from "framer-motion";
import RecommendedListings from "../../../listing/recommended-listings";
import { Button } from "../../../button";
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import ListingCard from "../../../listing/listing-card";
import { Swiper, SwiperRef, SwiperSlide } from "swiper/react";
import { useFetchRecommendedListings } from "@/app/properties/services";
import { EffectCoverflow } from "swiper/modules";
import SkeletonListing from "../../../skeleton/skeleton-listing";
import { getListingProps, Listing } from "@/lib/enum";
import { useAppStore } from "@/store/dashboard/AppStore";
import { useRef } from "react";

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
        <div className="flex flex-col gap-6">
          <h2 className="font-bold capitalize text-[#1E1E1E] lg:text-4xl">
            Discover your new <br /> home with us
          </h2>
          <h3 className="font-normal text-[#6F6F6F]">
            Browse through our genuine listings without stress
          </h3>
        </div>

        <div className="flex w-[216px] items-center justify-between">
          <Button
            size={"icon"}
            radius={"full"}
            className="h-[56px] w-[56px]"
            variant={"outline"}
            onClick={() => {
              ref.current?.swiper.slidePrev();
            }}
          >
            <MdKeyboardArrowLeft className="text-2xl" />
          </Button>{" "}
          <Button
            size={"icon"}
            className="h-[56px] w-[56px]"
            radius={"full"}
            variant={"outline"}
            onClick={() => {
              ref.current?.swiper.slideNext();
            }}
          >
            <MdKeyboardArrowRight className="text-2xl" />
          </Button>
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
