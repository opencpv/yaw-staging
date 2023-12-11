import PropertiesReview from "@/app/dashboard/my-reviews/components/PropertiesReview";
import PropertyOwnersReview from "@/app/dashboard/my-reviews/components/PropertyOwnersReview";
import ServiceProsReviews from "@/app/dashboard/my-reviews/components/ServiceProsReviews";
import AllReviewCard from "./AllReviewsCard";
import SlideEnter from "../../listing-form/components/SlideEnter";
import { mockReviewData2 } from "../../ratings-form/components/content2";
import { mockReviewData } from "@/app/dashboard/my-reviews/components/content";
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
        <div className="flex flex-col gap-8 items-start justify-center w-full">
          <div className="flex gap-4 items-center py-4 px-8 rounded-2xl bg-[#E9ECEF] w-full">
            <div
              className={`relative w-full h-full  ${
                variant == "property"
                  ? "aspect-square lg:aspect-[235/145] max-w-[100px] lg:max-w-[235px] rounded-2xl"
                  : "max-w-[100px] aspect-square rounded-full"
              } overflow-hidden `}>
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
            <div className="flex gap-1 w-full justify-center items-start flex-col">
              <p className="text-[1rem] lg:text-[1.5625rem] font-semibold">
                {variant == "person" ? "Jane Doe" : "2 Bedroom House at Kasoa"}
              </p>
              <div className="flex gap-1 items-center justify-start text-[1rem] lg:text-[1.5625rem] font-semibold">
                <FaStar color="#FFB800" size="24" />
                <p
                  className="text-[#363C91] underline"
                  onClick={() => {
                    setOpen1(false);
                    setOpen2(true);
                  }}>
                  3.5
                </p>
                <p className="text-[#073B3A] whitespace-nowrap">
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
