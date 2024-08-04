"use client";
import ReviewSummary from "@/app/dashboard/components/shared/my-reviews/ReviewSummary";
import { mockReviewData } from "@/app/dashboard/components/shared/my-reviews/content";
import { Button } from "@/components/__shared/ui/button";
import AllReviewCard from "@/components/__shared/ui/modals/all-reviews-modal/components/AllReviewsCard";
import AllReviewsData from "@/components/__shared/ui/modals/all-reviews-modal/components/AllReviewsData";

function UserReviews() {
  return (
    <div className="flex flex-col items-start gap-5">
      <div className="flex flex-col gap-10">
        <h2 className="text-2xl 2xl:text-3xl">
          ( {mockReviewData.length} ) Reviews
        </h2>

        <ReviewSummary />

        {mockReviewData.map((r, index) => (
          <AllReviewCard key={index} data={r} index={index} />
        ))}
      </div>

      <Button variant={"link"} className="text-shade-400 p-2.5 text-sm font-semibold">
        Show more reviews
      </Button>
    </div>
  );
}

export default UserReviews;
