import { useState } from "react";
import { mockReviewData } from "./content";
import DelayEnter from "@/app/dashboard/components/shared/DelayEnter";
import dynamic from "next/dynamic";
const NoReviews = dynamic(() => import("./NoReviews"));
const ReviewCard = dynamic(() => import("./ReviewsGivenCard"));

export default function AllReviewsReceived() {
  const [reviews, setReviews] = useState(true);

  return (
    <div className="flex w-full items-center justify-start">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <div className="flex flex-col gap-6">
            <p className="text-base font-semibold 2xl:text-[1.25rem]">
              All Reviews ( 4 )
            </p>

            <div className="flex flex-col gap-8">
              {mockReviewData.map((r, index) => (
                <DelayEnter key={index} index={index}>
                  <ReviewCard key={index} data={r} index={index} />
                </DelayEnter>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
