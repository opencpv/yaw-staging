import Image from "next/image";
import ReviewButton from "./ReviewButton";
import { useEffect, useState } from "react";
import CaREviewsReply2 from "./icons/CaReviewsReply2";
import DeleteModal from "./DeleteModal";
import ReviewStarsFixed from "./ReviewStarsFixed";
import CustomTextAreaInput from "@/app/components/CustomTextAreaInput";
import CaThumbsUpYellow from "./icons/CaThumbsUpYellow";
import CaThumbsDown from "./icons/CaThumbsDown";

type Props = {
  data: any;
  property?: boolean;
  variant?: "reviewers-say";
  index: number;
};

export default function ReviewCard({ data, variant, property, index }: Props) {
  const [reply, setReply] = useState(false);
  const [edit, setEdit] = useState(false);
  const [editInput, setInput] = useState();

  useEffect(() => {
    const textareaEle = document.getElementById(`textarea-${index}`);

    const handleInput = () => {
      if (textareaEle) {
        textareaEle.style.height = "auto";
        textareaEle.style.height = `${textareaEle.scrollHeight}px`;
        // setInput(textareaEle.value);
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
    <div className="w-full flex flex-col items-start gap-4   pb-4 max-w-[1103px] ">
      <div className="flex flex-col items-start gap-4 border-l-4 border-l-[#00974A] pl-4 border-b-[1px] border-b-[#E9ECEF] pb-4 w-full">
        <div className="flex gap-4 justify-start items-center w-full">
          <div
            className={`relative w-full h-full  ${
              property
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

        {data?.recommended == "yes" ? <CaThumbsUpYellow/> : <CaThumbsDown/>}


        {edit && (
          <div className="flex gap-5 w-full h-full">
            <textarea
              id={`textarea-${index}`}
              className="w-full border-[1px] overflow-y-hidden border-[#E6E6E6] px-[0.94rem] text-[#333]"
              defaultValue={editInput}></textarea>
          </div>
        )}
        {!edit && (
          <div>
            <p className="text-[#333] leading-[23.04px]">{data?.review}</p>{" "}
          </div>
        )}

        {variant != "reviewers-say" && (
          <div className="flex gap-2">
            <ReviewButton
              variant={edit ? "update" : "edit"}
              onClick={() => {
                !edit ? setEdit(true) : setEdit(false);
              }}
            />
            <DeleteModal />
          </div>
        )}

        {variant == "reviewers-say" && !reply && (
          <div>
            <ReviewButton variant="respond" onClick={() => setReply(true)} />
          </div>
        )}

        {variant == "reviewers-say" && reply && (
          <div className="flex gap-5 w-full ">
            <input
              className="rounded-md border-[1px] border-[#E6E6E6] h-[52px] px-[0.94rem] w-full max-w-[440px]"
              placeholder="Type your response here"
            />
            <div>
              <ReviewButton variant="reply" onClick={() => setReply(false)} />
            </div>{" "}
          </div>
        )}
      </div>

      {variant == "reviewers-say" && (
        <div className="flex flex-col gap-[1.3125rem] items-start justify-center border-b-[1px] border-b-[#E9ECEF] pb-4 pl-2 ">
          {data?.replies && (
            <div className="flex items-center gap-1">
              <p className="text-[#073B3A] font-semibold">Replies</p>
              <CaREviewsReply2 />
            </div>
          )}
          {data?.replies?.map((r : any, index : number) => (
            <div
              className="flex gap-2 items-center justify-start    w-full"
              key={index}>
              <div className="relative w-full h-full aspect-square max-w-[50px] overflow-hidden rounded-full">
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
