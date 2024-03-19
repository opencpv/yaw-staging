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

export default function ReviewsGivenCard({
  data,
  variant,
  property,
  index,
}: Props) {
  const [edit, setEdit] = useState(false);
  const [editInput, setInput] = useState();
  const { replyReview, reply, setReply, updateReview } = useReviews();

  useEffect(() => {
    const textareaEle = document.getElementById(`textarea-${index}`);

    const handleInput = () => {
      if (textareaEle) {
        textareaEle.style.height = "auto";
        textareaEle.style.height = `${textareaEle.scrollHeight}px`;
        // setInput(textareaEle.value);
        textareaEle.focus();
        if (textareaEle instanceof HTMLTextAreaElement) {
          textareaEle.selectionStart = textareaEle.value.length;
          textareaEle.selectionEnd = textareaEle.value.length;
        }
      }
    };

    if (textareaEle) {
      textareaEle.addEventListener("input", handleInput);
    }

    setInput(data?.review);
    if (edit) {
      handleInput();
    }
    return () => {
      if (textareaEle) {
        textareaEle.removeEventListener("input", handleInput);
      }
    };
  }, [edit, data?.review]);

  return (
    <div className="flex w-full  flex-col items-start  gap-4  border-b-1  py-3 max-w-[1103px] ">
      <div className="flex w-full flex-col items-start gap-4  border-l-4 border-l-[#00974A]  pl-4">
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

        {edit && (
          <div className="flex h-full w-full gap-5">
            <textarea
              id={`textarea-${index}`}
              className="w-full overflow-y-hidden border-[1px] border-[#E6E6E6] p-[0.94rem] text-[#333]"
              defaultValue={editInput}
            ></textarea>
          </div>
        )}
        {!edit && (
          <div>
            <p className="leading-[23.04px] text-[#333]">{data?.review}</p>{" "}
          </div>
        )}

        {!data.replies && (
          <div className="flex gap-2 pb-4">
            <ReviewButton
              variant={edit ? "update" : "edit"}
              onClick={() => {
                !edit ? setEdit(true) : setEdit(false);
                edit && updateReview();
              }}
            />
            <DeleteModal />
          </div>
        )}
      </div>

      {data.replies && (
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
