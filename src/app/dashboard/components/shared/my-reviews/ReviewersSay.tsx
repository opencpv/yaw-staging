import { useState } from "react";
import NoReviews from "./NoReviews";
import { mockReviewData } from "./content";
import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";
import SlideEnter from "@/app/components/listing-form/components/SlideEnter";

export default function ReviewersSay() {
  const [reviews, setReviews] = useState(true);

  return (
    <div className="w-full flex-col flex items-start justify-center">
      {!reviews && <NoReviews />}
      {reviews && (
        <SlideEnter>
          <ReviewSummary />

          <div className="flex flex-col gap-6">
            <p className="text-[1.25rem] font-semibold"> ( 3 ) Reviews</p>

            <div className="flex flex-col gap-14">
              {mockReviewData.map((r, index) => (
                <ReviewCard variant="reviewers-say" key={index} data={r} index={index} />
              ))}
            </div>
          </div>
        </SlideEnter>
      )}
    </div>
  );
}
