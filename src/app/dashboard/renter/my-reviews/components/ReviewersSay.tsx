import { useState } from "react";
import { mockReviewData } from "./content";
import ReviewSummary from "../../../../../components/__shared/ui/reviews/review-summary";
import dynamic from "next/dynamic";
const NoReviews = dynamic(() => import("./NoReviews"));
const ReviewsReceivedCard = dynamic(() => import("./ReviewsReceivedCard"));

const DelayEnter = dynamic(
  () => import("@/app/dashboard/components/shared/DelayEnter"),
  {
    ssr: false,
  },
);

export default function ReviewersSay() {
  const [reviews, setReviews] = useState(true);

  return (
    <div className="flex w-full flex-col items-start justify-center">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <ReviewSummary />

          <div className="flex flex-col gap-6">
            <p className="text-base font-semibold 2xl:text-[1.25rem]">
              {" "}
              ( 3 ) Reviews
            </p>

            <div className="flex flex-col gap-8">
              {mockReviewData.map((r, index) => (
                <DelayEnter key={index} index={index}>
                  <ReviewsReceivedCard
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
