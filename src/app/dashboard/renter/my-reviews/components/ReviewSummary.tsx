
"use client"
import { styled } from "@stitches/react";
import CaReviewHead from "./icons/CaReviewHead";
import CaReviewSummary from "./icons/CaReviewSummary";

export default function ReviewSummary() {
  return (
    <Root className="flex flex-col gap-3 items-start w-full max-w-[1103px] mb-8">
      <div className="gap-5 flex items-center justify-start ">
        <CaReviewSummary />
        <p className="text-[#DCA847]">AI Reviews Summary</p>
      </div>
      <div className="flex flex-col gap-2.5 px-8 py-6 rounded-2xl border-[1px] border-[#E6E6E6]">
            <div className="p-4 bg-[#F1F1F1] rounded-2xl head w-fit">
                <CaReviewHead/>
            </div>
            <div className="text-shade-300">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae, est nostrum esse expedita sapiente aliquam voluptatibus eaque numquam sequi id fugiat dignissimos dolorum sed impedit? Obcaecati nihil et itaque sapiente.
            </div>
      </div>
    </Root>
  );
}


const Root = styled('div', {
".head":{
    boxShadow: "0px 8px 8px -4px rgba(0, 0, 0, 0.03), 0px 20px 24px -4px rgba(0, 0, 0, 0.08)"
}
})  