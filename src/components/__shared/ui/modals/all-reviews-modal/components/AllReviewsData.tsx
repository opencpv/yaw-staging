import AllReviewCard from "../../../reviews/reviews-card";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";
import { CustomScroll } from "@/app/dashboard/renter/notifications/components/CustomScroll";
import SlideEnter from "@/app/dashboard/components/shared/SlideEnter";
import ReviewSummary from "@/components/__shared/ui/reviews/review-summary";
import { mockReviewData } from "@/app/dashboard/renter/my-reviews/components/content";
import ReviewBanner from "../../../reviews/review-banner";
import ReviewCard from "../../../reviews/reviews-card";

function AllReviewsData() {
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
    variant,
  } = useRatingsModalStore();

  return (
    <div className="px-0 pt-5 md:px-5 2xl:px-6">
      <div className="flex w-full flex-col items-start justify-center gap-8">
        <ReviewBanner
          variant_="person"
          name="Property Title"
          rating={3.5}
          image={currentProperty?.images?.[0] ?? ""}
        />
        
        <div className="flex flex-col gap-6">
          <p className="text-xl font-semibold">
            ( {currentProperty?.ratingCount} ) Reviews
          </p>

          <ReviewSummary className="border-secondary-50" />

          <CustomScroll className="flex flex-col gap-14">
            {mockReviewData.map((r, index) => (
              <ReviewCard key={index} data={r} index={index} />
            ))}
          </CustomScroll>
        </div>
      </div>
    </div>
  );
}

export default AllReviewsData;
