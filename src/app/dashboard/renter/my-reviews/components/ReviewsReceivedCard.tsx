import Image from "next/image";
import ReviewButton from "./ReviewButton";
import { useEffect, useState } from "react";
import CaREviewsReply2 from "./icons/CaReviewsReply2";
import DeleteModal from "./DeleteModal";
import ReviewStarsFixed from "./ReviewStarsFixed";
import CustomTextAreaInput from "@/app/components/CustomTextAreaInput";
import CaThumbsUpYellow from "./icons/CaThumbsUpYellow";
import CaThumbsDown from "./icons/CaThumbsDown";
import useReviews from "./useReviews";

type Props = {
  data: any;
  property?: boolean;
  variant?: "reviewers-say";
  index: number;
};

export default function ReviewsReceivedCard({
  data,
  variant,
  property,
  index,
}: Props) {
  const [edit, setEdit] = useState(false);
  const [editInput, setInput] = useState();
  const { replyReview, reply, setReply, updateReview } = useReviews();


  return (
    <div className="flex w-full flex-col items-start  gap-4  border-b-1 py-3 max-w-[1103px]">
      <div className="flex w-full flex-col items-start gap-4 border-l-4 border-l-[#00974A]   pl-4">
        <div className="flex w-full items-center justify-start gap-4">
          <div
            className={`relative h-full w-full  ${
              property
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
          <div className="flex w-full flex-col gap-1 2xl:gap-2">
            <h3 className="">{data?.name}</h3>
            <p>{data?.date}</p>
            {<ReviewStarsFixed rating={data?.ratings} />}{" "}
          </div>
        </div>

        <div>
          <p className="leading-[23.04px] text-[#333]">{data?.review}</p>{" "}
        </div>

        {!data.replies && !reply && (
          <div className="pb-2">
            <ReviewButton variant="respond" onClick={() => setReply(true)} />
          </div>
        )}

        {reply && (
          <div className="flex w-full items-end gap-5">
            <textarea
              className="h-auto min-h-[152px] w-full max-w-[640px] rounded-md border-[1px] border-[#E6E6E6] p-[0.94rem]"
              placeholder="Type your response here"
            />
            <div>
              <ReviewButton variant="reply" onClick={() => replyReview()} />
            </div>{" "}
          </div>
        )}
      </div>

      {data?.replies && (
        <div className="flex flex-col items-start justify-center gap-[1.3125rem] pb-4 pl-1 pt-2">
            <div className="flex items-center gap-1">
              <p className="font-semibold text-[#073B3A]">Response </p>
              <CaREviewsReply2 />
            </div>
          {data?.replies?.map((r: any, index: number) => (
            <div
              className="flex w-full items-center justify-start    gap-2"
              key={index}
            >
              <div className="relative aspect-square h-full w-full max-w-[50px] overflow-hidden rounded-full">
                <Image
                  fill
                  alt="Person image"
                  src={r?.image}
                  objectFit="cover"
                />
              </div>
              <div>
                <p>{r?.reply}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
