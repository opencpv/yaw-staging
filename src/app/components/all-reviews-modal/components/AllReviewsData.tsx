import PropertiesReview from "@/app/dashboard/lister/my-reviews/components/PropertiesReview";
import PropertyOwnersReview from "@/app/dashboard/lister/my-reviews/components/PropertyOwnersReview";
import ServiceProsReviews from "@/app/dashboard/lister/my-reviews/components/ServiceProsReviews";
import AllReviewCard from "./AllReviewsCard";
import SlideEnter from "../../listing-form/components/SlideEnter";
import { mockReviewData2 } from "../../ratings-form/components/content2";
import { mockReviewData } from "@/app/dashboard/lister/my-reviews/components/content";
import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { useState } from "react";
import RatingsForm from "../../ratings-form";

type Props = {
  variant: "property" | "person";
  setOpen1: any;
  setOpen2: any;
};

function AllReviewsData({ variant, setOpen1, setOpen2 }: Props) {
  const [rate, setRate] = useState(false);
  return (
    <div>
      <SlideEnter>
        <div className="flex w-full flex-col items-start justify-center gap-8">
          <div className="flex w-full items-center gap-4 rounded-2xl bg-[#E9ECEF] px-8 py-4">
            <div
              className={`relative h-full w-full  ${
                variant == "property"
                  ? "aspect-square max-w-[100px] rounded-2xl lg:aspect-[235/145] lg:max-w-[235px]"
                  : "aspect-square max-w-[100px] rounded-full"
              } overflow-hidden `}
            >
              <Image
                fill
                alt="Person image"
                src={
                  variant == "person"
                    ? "https://plus.unsplash.com/premium_photo-1668989224643-6b79eaea2108?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fHBlcnNvbnxlbnwwfHwwfHx8MA%3D%3D"
                    : "https://plus.unsplash.com/premium_photo-1686090449192-4ab1d00cb735?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cHJvcGVydHl8ZW58MHx8MHx8fDA%3D"
                }
                objectFit="cover"
              />
            </div>
            <div className="flex w-full flex-col items-start justify-center gap-1">
              <p className="text-[1rem] font-semibold lg:text-[1.5625rem]">
                {variant == "person" ? "Jane Doe" : "2 Bedroom House at Kasoa"}
              </p>
              <div className="flex items-center justify-start gap-1 text-[1rem] font-semibold lg:text-[1.5625rem]">
                <FaStar color="#FFB800" size="24" />
                <p
                  className="text-[#363C91] underline"
                  onClick={() => {
                    setOpen1(false);
                    setOpen2(true);
                  }}
                >
                  3.5
                </p>
                <p className="whitespace-nowrap text-[#073B3A]">
                  ( 3 ) Reviews
                </p>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-6">
            <p className="text-[1.25rem] font-semibold"> ( 3 ) Reviews</p>

            <div className="flex flex-col gap-14">
              {variant == "property" &&
                mockReviewData2.map((r, index) => (
                  <AllReviewCard
                    variant={variant}
                    key={index}
                    data={r}
                    index={index}
                  />
                ))}
              {variant == "person" &&
                mockReviewData.map((r, index) => (
                  <AllReviewCard
                    variant={variant}
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
