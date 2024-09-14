"use client";
// import CaReviewSummary from "../../../../app/dashboard/renter/my-reviews/components/icons/CaReviewSummary";

import { BiCommentEdit } from "react-icons/bi";
type Props = {
  className?: string;
};
export default function ReviewSummary({ className }: Props) {
  return (
    <div className="mb-8 flex w-full max-w-[1103px] flex-col items-start gap-3 rounded-2xl border-[1px] border-shade-50 px-6 py-8">
      <div className="flex items-center justify-start gap-3 text-primary">
        <BiCommentEdit className="text-2xl font-bold" />
        <h3 className="text-xl font-semibold">Review Summary</h3>
      </div>

      <div>
        <p className="!max-w-full text-base text-shade-300">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, est
          nostrum esse expedita sapiente aliquam voluptatibus eaque numquam
          sequi id fugiat dignissimos dolorum sed impedit? Obcaecati nihil et
          itaque sapiente.
        </p>
      </div>
    </div>
  );
}
