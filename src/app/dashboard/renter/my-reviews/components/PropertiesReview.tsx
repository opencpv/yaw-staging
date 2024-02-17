import { useState } from "react";
import CANoReviews from "./icons/CaNoReviews";
import NoReviews from "./NoReviews";
import ReviewCard from "./ReviewCard";
import { mockReviewData } from "./content";
import { mockReviewData2 } from "./content2";
import SlideEnter from "@/app/components/listing-form/components/SlideEnter";
import DelayEnter from "@/components/DelayEnter";

export default function PropertiesReview() {
  const [reviews, setReviews] = useState(true);

  return (
    <div className="flex w-full items-center justify-start">
      {!reviews && <NoReviews />}
      {reviews && (
        <div className="w-full">
          <div className="flex flex-col gap-6">
            <p className="text-base 2xl:text-[1.25rem] font-semibold"> ( 3 ) Reviews</p>

            <div className="flex flex-col gap-14">
              {mockReviewData2.map((r, index) => (
                <DelayEnter key={index} index={index}>
                  <ReviewCard property key={index} data={r} index={index} />
                </DelayEnter>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
