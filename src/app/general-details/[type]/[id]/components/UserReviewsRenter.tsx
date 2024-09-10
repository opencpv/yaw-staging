"use client";
import { mockReviewData } from "@/app/dashboard/renter/my-reviews/components/content";
import ReviewSummary from "@/components/__shared/ui/reviews/review-summary";
import FramerWrapper from "@/components/__shared/hoc/framer-wrapper";
import { Button } from "@/components/__shared/ui/button";
import AllReviewCard from "@/components/__shared/ui/reviews/reviews-card";
import { fadeIn } from "@/lib/animations";
import ReviewCard from "@/components/__shared/ui/reviews/reviews-card";

function UserRenterReviews() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col gap-10">
        <h2 className="text-base text-shade-300 md:text-2xl 2xl:text-3xl">
          ( {mockReviewData.length} ) Reviews By Esther
        </h2>

        <ReviewSummary />

        {mockReviewData.map((r, index) => (
          <FramerWrapper {...fadeIn} key={index}>
            <ReviewCard  withBanner data={r} index={index} />
          </FramerWrapper>
        ))}
      </div>

      <Button
        variant={"link"}
        className="text-shade-400 p-2.5 text-sm font-semibold"
      >
        Show more reviews
      </Button>
    </div>
  );
}

export default UserRenterReviews;
