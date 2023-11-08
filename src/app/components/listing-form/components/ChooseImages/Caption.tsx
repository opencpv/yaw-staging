import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import TextFieldInput from "@/app/components/TextFieldInput";
import { styled } from "@stitches/react";

const Caption = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="flex  items-start justify-start  bg-white focus:outline-none w-full">
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="z-[3000] bg-[#00000066] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="z-[3000] data-[state=open] rounded-2xl :animate-contentShow fixed top-[50%] left-[50%]  w-[90vw] max-w-[494px] max-h-[318px] aspect-[494/318] translate-x-[-50%] translate-y-[-50%]  bg-white focus:outline-none">
        <div className="w-full h-full flex flex-col items-start justify-center px-8 gap-4 pt-16">
          <p className="text-[13px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          </p>{" "}
          <TFormDiv className={`font-[400] $ text-[#6A6968] capitalize w-full`}>
            <label className="text-[16px] ">Caption</label>
            <input className="form-input" placeholder="Add your caption here" />
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

export default Caption;

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
