"use client";

import { Button } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";
import CaLearnMore from "../icons/CaLearnMore";
import { cn } from "@/lib/utils";

type Props = {
  variant: any;
  content: string;
  onClick?: any;
  className?: string;
};

export default function AgentButtons({
  variant,
  content,
  onClick,
  className,
}: Props) {
  return (
    <div className={cn("w-full font-semibold", className)}>
      {variant == "agent" && (
        <Button
          className="flex w-full max-w-[184px] items-center justify-center rounded-full bg-success-100 p-6 text-[1.25rem] text-primary-600"
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "price" && (
        <Button
          className="flex w-full max-w-fit items-center justify-center rounded-2xl  bg-[#E6F6EE] p-5 text-[1.25rem] font-bold text-shade-300 lg:min-w-[16rem]"
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "green-dark" && (
        <Button
          className="flex w-full max-w-fit items-center justify-center  rounded-lg bg-[#073B3A] p-6 px-8 font-semibold text-white lg:min-w-[8rem]"
          onPress={onClick}
        >
          {content}
          <GoArrowRight size={20} color="white" />
        </Button>
      )}
      {variant == "green-light" && (
        <Button
          className="h-[52px] rounded-lg  border-[1px] border-[#073B3A] bg-transparent px-[2.5rem] font-semibold text-[#073B3A]"
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "learn-more" && (
        <Button
          className="flex max-w-fit items-center justify-center rounded-lg border border-[#073B3A] bg-transparent p-6 font-semibold text-[#073B3A] lg:min-w-[12rem]"
          onPress={onClick}
        >
          {content}
          <CaLearnMore />
        </Button>
      )}
      {variant == "explore" && (
        <Button
          className="flex h-[52px] w-full items-center  justify-center rounded-lg border-[1px] border-[#073B3A] bg-transparent font-semibold text-[#073B3A] lg:max-w-[218px] lg:px-10"
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "green-fade-light" && (
        <Button
          className="h-[52px] rounded-lg  bg-[#99B3B2] px-[2.5rem] font-semibold text-white"
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "how-it-works" && (
        <Button
          className="h-[52px] rounded-[2rem]  border-l-8 border-l-[#33B874] bg-[#FBE9C8] px-[1.5rem] text-[1.25rem] text-black"
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "" && <Button>{content}</Button>}{" "}
      {variant == "" && <Button>{content}</Button>}
    </div>
  );
}
