import React, { useState } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import TextFieldInput from "@/app/components/TextFieldInput";
import { styled } from "@stitches/react";
import Image from "next/image";
import { IoMdThumbsUp } from "react-icons/io";
import { LuThumbsDown } from "react-icons/lu";
import ThumbsUp from "./icons/ThumbsUp";
import ThumbsDown from "./icons/ThumbsDown";
import CustomTextAreaInput from "../../CustomTextAreaInput";

const FeedBack = () => {
  const [liked, setLiked] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [feedBackComments, setFeedBackComments] = useState("")

  return (
    <div>
      <Dialog.Root>
        <Dialog.Trigger asChild>
          <button className="bg-accent-50 text-white mt-5 animate animate-bounce py-[15px] px-8 font-semibold rounded-lg whitespace-nowrap text-[13px] md;text-[16px]">
            How was the property listing process?
          </button>
        </Dialog.Trigger>
        <Dialog.Portal>
          <Dialog.Overlay className="z-[3000] bg-[#00000066] data-[state=open]:animate-overlayShow fixed inset-0" />
          <Dialog.Content className="z-[3000] data-[state=open] rounded-2xl :animate-contentShow fixed top-[50%] left-[50%] max-h-[75vh]  max-w-[795px] w-[80vw] translate-x-[-50%] translate-y-[-50%]  bg-white focus:outline-none flex flex-col items-center justify-center py-6 px-5 lg:px-20  overflow-y-scroll gap-4">
            <p className="text-[20px] lg:text-[31px] font-bold w-full text-left ">Feedback</p>

            <div className="w-fit flex flex-col items-center justify-center px-2 lg:px-8 gap-8 ">
              {!submitted ? (
                <div className="relative w-full max-w-[356px]  aspect-[356/298]">
                  <Image fill src={"/svgs/feedback1.svg"} alt="OTP Image" />
                </div>
              ) : (
                <div className="relative w-full max-w-[458px] aspect-square">
                  <Image
                    fill
                    src={"/svgs/feedback-thanks.svg"}
                    alt="OTP Image"
                  />
                </div>
              )}

              {!submitted && (
                <div className="flex flex-col items-center justify-center w-full h-full gap-5">
                  <div className="flex flex-col gap-6">
                    <p className="text-[16px] lg:text-[25px] font-semibold">
                      How easy was it to list your property?
                    </p>{" "}
                    <div className="flex gap-8 justify-center items-center">
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
                      onChange={(e)=> setFeedBackComments(e.target.value)}
                        label="Any additional comments?"
                        placeholder="Comments"
                        classes="h-[180px]"
                      />
                    </div>
                  )}

                  <div className="font-semibold flex items-center justify-center gap-2 lg:gap-5 w-full text-[16px]">
                    <button className="border-[1px] border-[#AD842A] rounded-lg text-[#AD842A] w-full  h-[40px] max-w-[155px] ">
                      Skip
                    </button>
                    <button
                      className="bg-accent-50 text-white w-full  h-[40px] max-w-[155px] rounded-lg"
                      onClick={() => setSubmitted(true)}>
                      Submit
                    </button>
                  </div>
                </div>
              )}
              {submitted && (
                <div className="flex flex-col gap-8 w-full ">
                  <p>Thank you for your feedback</p>
                  <button className="bg-accent-50 font-semibold rounded-lg max-w-[314px] h-[40px] text-white">
                    Preview
                  </button>
                </div>
              )}
            </div>

            <Dialog.Close asChild>
              <button
                className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
                aria-label="Close">
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
