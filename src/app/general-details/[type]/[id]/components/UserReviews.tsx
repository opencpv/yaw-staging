"use client";
import ReviewSummary from "@/app/dashboard/components/shared/my-reviews/ReviewSummary";
import { mockReviewData } from "@/app/dashboard/components/shared/my-reviews/content";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import { Button } from "@/components/__shared/ui/button";
import AllReviewCard from "@/components/__shared/ui/modals/all-reviews-modal/components/AllReviewsCard";
import { fadeIn } from "@/lib/animations";

function UserReviews() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col gap-10">
        <h2 className="text-base text-shade-300 md:text-2xl 2xl:text-3xl">
          ( {mockReviewData.length} ) Reviews
        </h2>

        <ReviewSummary />

        {mockReviewData.map((r, index) => (
          <FramerWrapper {...fadeIn} key={index}>
            <AllReviewCard data={r} index={index} />
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

export default UserReviews;
