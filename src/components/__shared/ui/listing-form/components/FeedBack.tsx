import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { styled } from "@stitches/react";
import Image from "next/image";
import { IoMdThumbsUp } from "react-icons/io";
import { LuThumbsDown } from "react-icons/lu";
import ThumbsUp from "./icons/ThumbsUp";
import ThumbsDown from "./icons/ThumbsDown";
import CustomTextAreaInput from "../../form/CustomTextAreaInput";

const FeedBack = () => {
  const [liked, setLiked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedBackComments, setFeedBackComments] = useState("");

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="animate md;text-[16px] mt-5 animate-bounce whitespace-nowrap rounded-lg bg-accent-50 px-8 py-[15px] text-[13px] font-semibold text-white">
            How was the property listing process?
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-[3000] bg-[#00000066]" />
          <Dialog.Content className="data-[state=open] :animate-contentShow fixed left-[50%] top-[50%] z-[3000] flex max-h-[75vh]  w-[80vw] max-w-[795px] translate-x-[-50%] translate-y-[-50%]  flex-col items-center justify-center gap-4 overflow-y-scroll rounded-2xl bg-white px-5 py-6  focus:outline-none lg:px-20">
            <p className="w-full text-left text-[20px] font-bold lg:text-[31px] ">
              Feedback
            </p>

            <div className="flex w-fit flex-col items-center justify-center gap-8 px-2 lg:px-8 ">
              {!submitted ? (
                <div className="relative aspect-[356/298] w-full  max-w-[356px]">
                  <Image fill src={"/svgs/feedback1.svg"} alt="OTP Image" />
                </div>
              ) : (
                <div className="relative aspect-square w-full max-w-[458px]">
                  <Image
                    fill
                    src={"/svgs/feedback-thanks.svg"}
                    alt="OTP Image"
                  />
                </div>
              )}

              {!submitted && (
                <div className="flex h-full w-full flex-col items-center justify-center gap-5">
                  <div className="flex flex-col gap-6">
                    <p className="text-[16px] font-semibold lg:text-[25px]">
                      How easy was it to list your property?
                    </p>{" "}
                    <div className="flex items-center justify-center gap-8">
                      <button type="button" onClick={() => setLiked(true)}>
                        <ThumbsUp />
                      </button>{" "}
                      <button type="button" onClick={() => setLiked(false)}>
                        {" "}
                        <ThumbsDown />
                      </button>
                    </div>
                  </div>

                  {liked && (
                    <div className="w-full">
                      <CustomTextAreaInput
                        onChange={(e) => setFeedBackComments(e.target.value)}
                        label="Any additional comments?"
                        placeholder="Comments"
                        classes="h-[180px]"
                      />
                    </div>
                  )}

                  <div className="flex w-full items-center justify-center gap-2 text-[16px] font-semibold lg:gap-5">
                    <button className="h-[40px] w-full max-w-[155px] rounded-lg border-[1px]  border-[#AD842A] text-[#AD842A] ">
                      Skip
                    </button>
                    <button
                      className="h-[40px] w-full max-w-[155px]  rounded-lg bg-accent-50 text-white"
                      onClick={() => setSubmitted(true)}
                    >
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {submitted && (
                <div className="flex w-full flex-col gap-8 ">
                  <p>Thank you for your feedback</p>
                  <button className="h-[40px] max-w-[314px] rounded-lg bg-accent-50 font-semibold text-white">
                    Preview
                  </button>
                </div>
              )}
            </div>

            <Dialog.Close asChild>
              <button
                className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
                aria-label="Close"
              >
                <Cross2Icon />
              </button>
            </Dialog.Close>
          </Dialog.Content>
        </Dialog.Portal>
      </Dialog.Root>
    </div>
  );
};

export default FeedBack;

const TFormDiv = styled("div", {
  fontSize: "1rem",
  display: "flex",
  flexDirection: "column",
  gap: "0.9375rem",
  ".form-input": {
    height: "52px",
    padding: "15px",
    fontSize: " 0.8125rem",
    border: "1px solid #E6E6E6",
    borderRadius: "4px",
  },
});
