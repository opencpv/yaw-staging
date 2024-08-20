"use client";

import { GoArrowRight } from "react-icons/go";
import CaLearnMore from "../icons/CaLearnMore";
import { cn } from "@/lib/utils";
import Button from "@/components/__shared/ui/button/Button";

type Props = {
  variant: any;
  content: string;
  onClick?: any;
  className?: string;
  href?: string;
};

export default function AgentButtons({
  variant,
  content,
  onClick,
  className,
  href,
}: Props) {
  return (
    <>
      {variant == "agent" && (
        <Button
          href={href}
          className={cn(
            "w-full max-w-[184px] whitespace-nowrap rounded-full bg-success-100 p-6 text-lg text-primary-600  sm:text-xl",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "price" && (
        <Button
          href={href}
          className={cn(
            "w-full max-w-fit rounded-2xl bg-[#E6F6EE] p-5 text-xl font-bold text-shade-300 lg:min-w-[16rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "green-dark" && (
        <Button
          href={href}
          className={cn(
            "w-full max-w-fit rounded-lg bg-primary p-6 px-8 font-semibold text-white lg:min-w-[8rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
          <GoArrowRight size={20} color="white" />
        </Button>
      )}
      {variant == "green-light" && (
        <Button
          href={href}
          className={cn(
            "h-[52px] rounded-lg border-[1px] border-primary  bg-transparent px-[2.5rem] font-semibold text-primary",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "learn-more" && (
        <Button
          href={href}
          className={cn(
            "max-w-fit rounded-lg border border-primary bg-transparent p-6 px-10 font-semibold text-primary lg:min-w-[8rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
          <CaLearnMore />
        </Button>
      )}
      {variant == "explore" && (
        <Button
          href={href}
          className={cn(
            "max-w-fit rounded-lg border border-primary bg-transparent p-6 px-10 font-semibold text-primary lg:min-w-[8rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "green-fade-light" && (
        <Button
          href={href}
          className={cn(
            "max-w-fit rounded-lg bg-secondary-400 p-6 px-8 font-semibold text-white lg:min-w-[9rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "how-it-works" && (
        <Button
          href={href}
          className={cn(
            "max-w-fit rounded-[2rem] border-l-8 border-l-[#33B874] bg-[#FBE9C8] p-5 text-xl text-black lg:min-w-[8rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "" && <Button href={href}>{content}</Button>}{" "}
      {variant == "" && <Button href={href}>{content}</Button>}
    </>
  );
}
