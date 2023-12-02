import React from "react";
import ReviewComment from "../../components/ReviewComment";
import ReviewCount from "../../components/ReviewCount";
import { HiOutlineHomeModern, HiStar } from "react-icons/hi2";
import Button from "@/components/__shared/Button";
import { BsBookmarkStarFill } from "react-icons/bs";
import AOSWrapper from "@/components/__shared/AOSWrapper";

type Props = {};

const PropertyRating = (props: Props) => {
  return (
    <AOSWrapper animation="fade-up" duration="800">
      <section className="px-5 py-10 mx-auto my-10 max-w-screen-2xl sm:px-10">
        <div className=" border-neutral-200 md:px-14 rounded-xl md:border-3 md:pt-10 md:pb-32">
          <div className="flex flex-wrap justify-between gap-5 bg-[#65969F] text-white rounded-xl p-10">
            <div className="flex flex-wrap items-center gap-3">
              <p className="text-xl font-[600]">
                How would you rate this property?
              </p>
              <BsBookmarkStarFill className="text-lg shrink-0" />
            </div>
            <Button
              variant="outline"
              borderColor="white"
              className="p-4 text-white py-7 w-60"
            >
              Write a review
            </Button>
          </div>
          {/* Rating count */}
          <div className="grid items-start grid-cols-3 mt-20 gap-x-20 gap-y-10">
            <div className="col-span-3 flex text-lg items-center text-neutral-800 gap-10 font-[600] xl:col-span-1">
              <div className="flex items-center gap-1.5">
                <HiOutlineHomeModern />
                <HiStar className="text-yellow-500" />
                <p className="">3.2</p>
              </div>
              <p className="">10 reviews</p>
            </div>
            <div className="grid justify-between grid-cols-1 w-full col-span-3 gap-x-8 gap-y-4 min-[900px]:grid-cols-2 xl:col-span-2">
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
