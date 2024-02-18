import { useState } from "react";
import NoReviews from "./NoReviews";
import ReviewCard from "./ReviewsGivenCard";
import { mockReviewData } from "./content";
import SlideEnter from "@/app/components/listing-form/components/SlideEnter";
import DelayEnter from "@/components/DelayEnter";

export default function AllReviewsReceived() {
  const [reviews, setReviews] = useState(true);

  return (
    <div className="flex w-full items-center justify-start">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <div className="flex flex-col gap-6">
            <p className="text-base 2xl:text-[1.25rem] font-semibold">All Reviews ( 4 )</p>

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
