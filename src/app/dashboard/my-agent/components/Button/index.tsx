"use client";

import { Button } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";
import CaLearnMore from "../icons/CaLearnMore";

type Props = {
  variant: any;
  content: string;
  onClick?: any;
};

export default function AgentButtons({ variant, content, onClick }: Props) {
  return (
    <div className="font-semibold w-full">
      {variant == "agent" && (
        <Button
          className="bg-success-100 flex items-center justify-center rounded-2xl h-[52px] w-full max-w-[184px] text-[1.25rem]"
          onPress={onClick}>
          {content}
        </Button>
      )}
      {variant == "price" && (
        <Button
          className="bg-[#E6F6EE] flex items-center justify-center rounded-2xl  px-[0.63rem] font-bold h-[3rem] lg:w-[260px] text-[1.25rem] text-shade-300 w-full max-w-md"
          onPress={onClick}>
          {content}
        </Button>
      )}
      {variant == "green-dark" && (
        <Button
          className="h-[52px] flex items-center justify-center  rounded-lg bg-[#073B3A] text-white font-semibold w-full max-w-md lg:max-w-[218px] px-8"
          onPress={onClick}>
          {content}
          <GoArrowRight size={20} color="white" />
        </Button>
      )}
      {variant == "green-light" && (
        <Button
          className="h-[52px] px-[2.5rem]  rounded-lg border-[#073B3A] text-[#073B3A] border-[1px] bg-transparent font-semibold"
          onPress={onClick}>
          {content}
        </Button>
      )}
      {variant == "learn-more" && (
        <Button
          className="h-[52px] flex items-center justify-center  rounded-lg border-[#073B3A] text-[#073B3A] border-[1px] bg-transparent font-semibold w-full max-w-[218px]"
          onPress={onClick}>
          {content}
          <CaLearnMore />
        </Button>
      )}
      {variant == "explore" && (
        <Button
          className="h-[52px] flex itemsc-center justify-center  rounded-lg border-[#073B3A] text-[#073B3A] border-[1px] bg-transparent font-semibold w-full lg:max-w-[218px] lg:px-10"
          onPress={onClick}>
          {content}
        </Button>
      )}
      {variant == "green-fade-light" && (
        <Button
          className="h-[52px] px-[2.5rem]  rounded-lg bg-[#99B3B2] text-white font-semibold"
          onPress={onClick}>
          {content}
        </Button>
      )}
      {variant == "how-it-works" && (
        <Button
          className="h-[52px] px-[1.5rem]  rounded-[2rem] border-l-[#33B874] border-l-8 bg-[#FBE9C8] text-black text-[1.25rem]"
          onPress={onClick}>
          {content}
        </Button>
      )}
      {variant == "" && <Button>{content}</Button>}{" "}
      {variant == "" && <Button>{content}</Button>}
    </div>
  );
}
