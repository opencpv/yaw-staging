"use client";
import { styled } from "@stitches/react";
import CaReviewHead from "./icons/CaReviewHead";
import CaReviewSummary from "./icons/CaReviewSummary";

export default function ReviewSummary() {
  return (
    <Root className="mb-8 flex w-full max-w-[1103px] flex-col items-start gap-3">
      <div className="flex items-center justify-start gap-5 ">
        <CaReviewSummary />
        <p className="text-[#DCA847]">Review Summary</p>
      </div>
      <div className="flex flex-col gap-2.5 rounded-2xl border-[1px] border-[#E6E6E6] px-8 py-6">
        <div className="head w-fit rounded-2xl bg-secondary-50 p-4">
          <CaReviewHead />
        </div>
        <div className="text-shade-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, est
          nostrum esse expedita sapiente aliquam voluptatibus eaque numquam
          sequi id fugiat dignissimos dolorum sed impedit? Obcaecati nihil et
          itaque sapiente.
        </div>
      </div>
    </Root>
  );
}

const Root = styled("div", {
  ".head": {
    boxShadow:
      "0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 20px 24px -4px rgba(0, 0, 0, 0.08)",
  },
});
