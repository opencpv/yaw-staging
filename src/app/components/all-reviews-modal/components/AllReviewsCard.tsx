import ReviewStarsFixed from "@/app/dashboard/components/shared/my-reviews/ReviewStarsFixed";
import CaREviewsReply2 from "@/app/dashboard/components/shared/my-reviews/icons/CaReviewsReply2";
import Image from "next/image";
import { useEffect, useState } from "react";
import CaThumbsUpYellow from "./icons/CaThumbsUpYellow";
import CaThumbsDown from "./icons/CaThumbsDown";

type Props = {
  data: any;
  variant?: "person" | "property";
  index: number;
};

export default function AllReviewCard({ data, variant }: Props) {
  return (
    <div className="flex w-full max-w-[1431px] flex-col items-start   gap-4 pb-4 ">
      <div className="flex w-full flex-col items-start gap-4 border-b-[1px] border-l-4 border-b-[#E9ECEF] border-l-[#00974A] pb-4 pl-4">
        <div className="flex w-full items-center justify-start gap-4">
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
              src={data?.image}
              objectFit="cover"
            />
          </div>
          <div className="flex w-full flex-col gap-2">
            <p className="text-[1.25rem] font-semibold lg:text-[1.5625rem]">
              {data?.name}
            </p>
            <p>{data?.date}</p>
            {<ReviewStarsFixed rating={data?.ratings} />}{" "}
          </div>
        </div>

        <div className="flex w-full gap-1">
          <p className="leading-[23.04px] text-[#333]">
            {data?.recommended == "yes" ? (
              <span className="">
                <CaThumbsUpYellow />
              </span>
            ) : (
              <CaThumbsDown />
            )}
            {data?.review}
          </p>
        </div>
      </div>

      <div className="flex flex-col items-start justify-center gap-[1.3125rem] border-b-[1px] border-b-[#E9ECEF] pb-4 pl-2 ">
        {data?.replies && (
          <div className="flex items-center gap-1">
            <p className="font-semibold text-[#073B3A]">
              Response from John Doe
            </p>
            <CaREviewsReply2 />
          </div>
        )}
        {data?.replies?.map((r: any, index: number) => (
          <div
            className="flex w-full items-center justify-start    gap-2"
            key={index}
          >
            <div className="relative aspect-square h-full w-full max-w-[50px] overflow-hidden rounded-full">
              <Image fill alt="Person image" src={r?.image} objectFit="cover" />
            </div>
            <div>
              <p>{r?.reply}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
