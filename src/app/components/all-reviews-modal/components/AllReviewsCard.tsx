import ReviewStarsFixed from "@/app/dashboard/my-reviews/components/ReviewStarsFixed";
import CaREviewsReply2 from "@/app/dashboard/my-reviews/components/icons/CaReviewsReply2";
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
    <div className="w-full flex flex-col items-start gap-4   pb-4 max-w-[1431px] ">
      <div className="flex flex-col items-start gap-4 border-l-4 border-l-[#00974A] pl-4 border-b-[1px] border-b-[#E9ECEF] pb-4 w-full">
        <div className="flex gap-4 justify-start items-center w-full">
          <div
            className={`relative w-full h-full  ${
              variant == "property"
                ? "aspect-square lg:aspect-[235/145] max-w-[100px] lg:max-w-[235px] rounded-2xl"
                : "max-w-[100px] aspect-square rounded-full"
            } overflow-hidden `}>
            <Image
              fill
              alt="Person image"
              src={data?.image}
              objectFit="cover"
            />
          </div>
          <div className="flex flex-col gap-2 w-full">
            <p className="text-[1.25rem] lg:text-[1.5625rem] font-semibold">
              {data?.name}
            </p>
            <p>{data?.date}</p>
            {<ReviewStarsFixed rating={data?.ratings} />}{" "}
          </div>
        </div>

        <div className="flex gap-1 w-full">
          <p className="text-[#333] leading-[23.04px] flex">
            {data?.recommended == "yes" ? (
              <CaThumbsUpYellow />
            ) : (
              <CaThumbsDown />
            )}
            {data?.review}
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-[1.3125rem] items-start justify-center border-b-[1px] border-b-[#E9ECEF] pb-4 pl-2 ">
        {data?.replies && (
          <div className="flex items-center gap-1">
            <p className="text-[#073B3A] font-semibold">
              Response from John Doe
            </p>
            <CaREviewsReply2 />
          </div>
        )}
        {data?.replies?.map((r : any, index : number) => (
          <div
            className="flex gap-2 items-center justify-start    w-full"
            key={index}>
            <div className="relative w-full h-full aspect-square max-w-[50px] overflow-hidden rounded-full">
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
