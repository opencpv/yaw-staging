"use client";
import { styled } from "@stitches/react";
import CaReviewSummary from "../../../../app/dashboard/renter/my-reviews/components/icons/CaReviewSummary";

import { BiCommentEdit } from "react-icons/bi";
type Props = {
  className?: string;
};
export default function ReviewSummary({ className }: Props) {
  return (
    <div className="mb-8 flex w-full max-w-[1103px] flex-col items-start gap-3 border-[1px] border-shade-50 px-6 py-8 rounded-2xl">
      <div className="flex items-center justify-start gap-3 text-primary">
        <BiCommentEdit className="text-2xl font-bold" />
        <p className="text-xl font-semibold ">Review Summary</p>
      </div>

      <div >
      <p className="text-shade-300 text-base !max-w-full">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, est
          nostrum esse expedita sapiente aliquam voluptatibus eaque numquam sequi
          id fugiat dignissimos dolorum sed impedit? Obcaecati nihil et itaque
          sapiente.
      </p>
      </div>
    </div>
  );
}

const Root = styled("div", {
  ".head": {
    boxShadow:
      "0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 20px 24px -4px rgba(0, 0, 0, 0.08)",
  },
});
