import { useState } from "react";
import { mockReviewData } from "./content";
import DelayEnter from "@/app/dashboard/components/shared/DelayEnter";
import dynamic from "next/dynamic";
const NoReviews = dynamic(() => import("./NoReviews"));
const ReviewsGivenCard = dynamic(() => import("./ReviewsGivenCard"));

export default function PropertyOwnersReview() {
  const [reviews, setReviews] = useState(false);
  return (
    <div className="flex w-full items-center justify-start">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <div className="flex flex-col gap-6">
            <p className="text-[1.25rem] font-semibold"> ( 5 ) Reviews</p>

            <div className="flex flex-col gap-8">
              {mockReviewData.map((r, index) => (
                <DelayEnter key={index} index={index}>
                  <ReviewsGivenCard key={index} data={r} index={index} />
                </DelayEnter>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
