import { useState } from "react";
import { mockReviewData2 } from "./content2";
import DelayEnter from "@/app/dashboard/components/shared/DelayEnter";
import dynamic from "next/dynamic";
const NoReviews = dynamic(() => import("./NoReviews"));
const ReviewsGivenCard = dynamic(() => import("./ReviewsGivenCard"));

export default function PropertiesReview() {
  const [reviews, setReviews] = useState(true);

  return (
    <div className="flex w-full items-center justify-start">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <div className="flex flex-col gap-6">
            <h3 className="text-base font-semibold 2xl:text-xl">
              {" "}
              {/* EC: RatingsFormForm comments should apply here also, and similar instances. */}{" "}
              ( 3 ) Reviews
            </h3>

            <div className="flex flex-col gap-8">
              {mockReviewData2.map((r, index) => (
                <DelayEnter key={index} index={index}>
                  <ReviewsGivenCard
                    property
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
