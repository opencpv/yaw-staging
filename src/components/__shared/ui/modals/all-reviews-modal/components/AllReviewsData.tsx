import AllReviewCard from "./AllReviewsCard";
import SlideEnter from "../../../listing-form/components/SlideEnter";
import { mockReviewData2 } from "../../../ratings-form/components/content2";
import { mockReviewData } from "@/app/dashboard/components/shared/my-reviews/content";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import { useRatingsModalStore } from "@/store/modal/useRatingsModalStore";

function AllReviewsData() {
  const {
    openRatingsForm,
    setOpenRatingsForm,
    openAllRatings,
    setOpenAllRatings,
    currentProperty,
    setCurrentProperty,
    variant,
  } = useRatingsModalStore();

  return (
    <div>
      <SlideEnter>
        <div className="flex w-full flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center gap-4 rounded-2xl bg-[#E9ECEF] px-8 py-4">
            <div
              className={`relative h-full w-full  ${
                variant == "property"
                  ? "aspect-square max-w-[100px] rounded-2xl lg:aspect-[235/145] lg:max-w-[225px]"
                  : "aspect-square max-w-[100px] rounded-full"
              } overflow-hidden `}
            >
              <Image
                fill
                alt="Person image"
                src={
                  variant == "person"
                    ? "https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                    : currentProperty?.images?.[0] ?? ""
                }
                objectFit="cover"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <p className="text-[1rem] font-semibold lg:text-[1.5625rem]">
                {variant == "person"
                  ? "Jane Doe"
                  : currentProperty?.bedrooms +
                    " Bedroom " +
                    currentProperty?.propertyType}
              </p>

              <div className="flex items-center justify-start gap-1 text-[1rem] font-semibold lg:text-[1.5625rem]">
                <FaStar color="#FFB800" size="24" />

                <p
                  className="text-[#363C91] underline"
                  onClick={() => {
                    setOpenAllRatings(false);
                    setOpenRatingsForm(true);
                  }}
                >
                  {currentProperty?.rating}
                </p>
                <p className="whitespace-nowrap text-primary">
                  ( {currentProperty?.ratingCount} ) Reviews
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[1.25rem] font-semibold">
              ( {currentProperty?.ratingCount} ) Reviews
            </p>

            <div className="flex flex-col gap-14">
              {mockReviewData.map((r, index) => (
                <AllReviewCard
                  key={index}
                  data={r}
                  index={index}
                />
              ))}
            </div>
          </div>
        </div>
      </SlideEnter>
    </div>
  );
}

export default AllReviewsData;
