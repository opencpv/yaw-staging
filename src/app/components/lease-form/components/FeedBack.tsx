import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import TextFieldInput from "@/app/components/TextFieldInput";
import { styled } from "@stitches/react";
import Image from "next/image";

const FeedBack = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="bg-accent-50 text-white mt-5 animate animate-bounce py-[15px] px-8 font-semibold rounded-lg">
        How was the property listing process?
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="z-[3000] bg-[#00000066] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="z-[3000] data-[state=open] rounded-2xl :animate-contentShow fixed top-[50%] left-[50%]  w-[90vw] max-w-[494px] max-h-[318px] aspect-[494/318] translate-x-[-50%] translate-y-[-50%]  bg-white focus:outline-none">
        <div className="w-full h-full flex flex-col items-start justify-center px-8 gap-4 pt-16">

          <div className="relative w-full h-full max-w-[356px] mt-20">
            <Image fill src={"/assets/images/niceHome.png"} alt="OTP Image" />
          </div>

          <TFormDiv className={`font-[400] $ text-[#6A6968] capitalize w-full`}>
            <label className="text-[16px] ">FeedBack</label>
            <input
              className="form-input"
              placeholder="Add your FeedBack here"
            />
          </TFormDiv>
          <div className="w-full flex justify-end">
            <div className="rounded-lg bg-[#073B3A] aspect-[116/52] w-full max-w-[116px] h-[52px] text-white flex items-center font-semibold justify-center">
              Save
            </div>
          </div>
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
);

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
