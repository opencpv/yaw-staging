import React from "react";
import ReviewComment from "../../components/ReviewComment";
import ReviewCount from "../../components/ReviewCount";
import { HiOutlineHomeModern, HiStar } from "react-icons/hi2";
import Button from "@/components/__shared/ui/button/Button";
import { BsBookmarkStarFill } from "react-icons/bs";
import AOSWrapper from "@/components/__shared/AOSWrapper";

type Props = {};

const PropertyRating = (props: Props) => {
  return (
    <AOSWrapper animation="fade-up" duration="800" className="section">
      <section>
        <div className="rounded-xl border-neutral-200 md:border-3 md:px-14 md:pb-32 md:pt-10">
          <div className="flex flex-wrap justify-between gap-5 rounded-xl bg-[#65969F] p-10 text-white">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xl font-[600]">
                How would you rate this property?
              </p>
              <BsBookmarkStarFill className="shrink-0 text-lg" />
            </div>
            <Button variant="outline" color="white" className="w-60 p-4 py-7">
              Write a review
            </Button>
          </div>
          {/* Rating count */}
          <div className="mt-20 grid grid-cols-3 items-start gap-x-20 gap-y-10">
            <div className="col-span-3 flex items-center gap-10 text-lg font-[600] text-neutral-800 xl:col-span-1">
              <div className="flex flex-wrap items-center gap-1.5">
                <HiOutlineHomeModern />
                <HiStar className="text-yellow-500" />
                <p className="">3.2</p>
              </div>
              <p className="">10 reviews</p>
            </div>
            <div className="col-span-3 grid w-full grid-cols-1 justify-between gap-x-8 gap-y-4 min-[900px]:grid-cols-2 xl:col-span-2">
              {[1, 2, 3, 4, 5, 6].map((count, idx) => (
                <ReviewCount key={idx + 1} />
              ))}
            </div>
          </div>
          {/* Review comment */}
          <div className="mt-24 space-y-10">
            {[1, 2, 3].map((comment, idx) => (
              <ReviewComment key={idx + 1} />
            ))}
          </div>
        </div>
      </section>
    </AOSWrapper>
  );
};

export default PropertyRating;
