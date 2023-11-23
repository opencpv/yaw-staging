"use client";

import { Button } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";

type Props = {
  variant: any;
  content: string;
  onClick: any;
};

export default function AgentButtons({ variant, content, onClick }: Props) {
  return (
    <div className="font-semibold" onClick={onClick}>
      {variant == "agent" && (
        <Button className="bg-success-100 flex items-center justify-center rounded-2xl px-[1.5rem] py-[0.75rem]">
          {content}
        </Button>
      )}
      {variant == "price" && (
        <Button className="bg-[#E6F6EE] flex items-center justify-center rounded-2xl  px-[0.63rem] font-bold h-[3rem] min-w-[260px] text-[1.25rem] text-shade-300">
          {content}
        </Button>
      )}
      {variant == "green-dark" && (
        <Button className="h-[52px] px-[2.5rem]  rounded-lg bg-[#073B3A] text-white font-semibold">
          {content}
          <GoArrowRight size={20} color="white" />
        </Button>
      )}
      {variant == "green-light" && (
        <Button className="h-[52px] px-[2.5rem]  rounded-lg border-[#073B3A] text-[#073B3A] border-[1px] bg-transparent font-semibold">
          {content}
        </Button>
      )}
      {variant == "green-fade-light" && (
        <Button className="h-[52px] px-[2.5rem]  rounded-lg bg-[#99B3B2] text-white font-semibold">
          {content}
        </Button>
      )}
      {variant == "how-it-works" && (
        <Button className="h-[52px] px-[1.5rem]  rounded-[2rem] border-l-[#33B874] border-l-8 bg-[#FBE9C8] text-black text-[1.25rem]">
          {content}
        </Button>
      )}
      {variant == "" && <Button>{content}</Button>}{" "}
      {variant == "" && <Button>{content}</Button>}
    </div>
  );
}
