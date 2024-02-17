import { useState } from "react";
import NoReviews from "./NoReviews";
import ReviewCard from "./ReviewCard";
import { mockReviewData } from "./content";
import SlideEnter from "@/app/components/listing-form/components/SlideEnter";
import DelayEnter from "@/components/DelayEnter";

export default function PropertyOwnersReview() {
  const [reviews, setReviews] = useState(false);
  return (
    <div className="flex w-full items-center justify-start">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <div className="flex flex-col gap-6">
            <p className="text-[1.25rem] font-semibold"> ( 5 ) Reviews</p>

            <div className="flex flex-col gap-14">
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
