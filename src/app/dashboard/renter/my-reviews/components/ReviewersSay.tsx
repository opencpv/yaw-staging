import { useState } from "react";
import NoReviews from "./NoReviews";
import { mockReviewData } from "./content";
import ReviewCard from "./ReviewCard";
import ReviewSummary from "./ReviewSummary";
import DelayEnter from "@/components/DelayEnter";
export default function ReviewersSay() {
  const [reviews, setReviews] = useState(true);

  return (
    <div className="flex w-full flex-col items-start justify-center">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <ReviewSummary />

          <div className="flex flex-col gap-6">
            <p className="text-base 2xl:text-[1.25rem] font-semibold"> ( 3 ) Reviews</p>

            <div className="flex flex-col gap-14">
              {mockReviewData.map((r, index) => (
                <DelayEnter key={index} index={index}>
                  <ReviewCard
                    variant="reviewers-say"
                    key={index}
                    data={r}
                    index={index}
                  />
                </DelayEnter>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
