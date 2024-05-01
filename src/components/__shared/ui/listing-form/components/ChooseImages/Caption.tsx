import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import TextFieldInput from "@/components/__shared/ui/form/TextFieldInput";
import { styled } from "@stitches/react";

const Caption = () => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="flex  w-full items-start  justify-start bg-white focus:outline-none">
        Edit profile
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 z-[3000] bg-[#00000066]" />
      <Dialog.Content className="data-[state=open] :animate-contentShow fixed left-[50%] top-[50%] z-[3000] aspect-[494/318]  max-h-[318px] w-[90vw] max-w-[494px] translate-x-[-50%] translate-y-[-50%] rounded-2xl  bg-white focus:outline-none">
        <div className="flex h-full w-full flex-col items-start justify-center gap-4 px-8 pt-16">
          <p className="text-[13px]">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officiis
          </p>{" "}
          <TFormDiv className={`$ w-full font-[400] capitalize text-[#6A6968]`}>
            <label className="text-[16px] ">Caption</label>
            <input className="form-input" placeholder="Add your caption here" />
          </TFormDiv>
          <div className="flex w-full justify-end">
            <div className="flex aspect-[116/52] h-[52px] w-full max-w-[116px] items-center justify-center rounded-lg bg-[#073B3A] font-semibold text-white">
              Save
            </div>
          </div>
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
