"use client";

import { Button } from "@nextui-org/react";
import { GoArrowRight } from "react-icons/go";
import CaLearnMore from "../icons/CaLearnMore";
import { cn } from "@/lib/utils";
import Link from "next/link";

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
          as={href ? Link : undefined}
          className={cn(
            "flex w-full max-w-[184px] items-center justify-center rounded-full bg-success-100 p-6 text-lg text-primary-600 transition-all hover:scale-[1.02] sm:text-xl",
            className,
          )}
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "price" && (
        <Button
          href={href}
          as={href ? Link : undefined}
          className={cn(
            "flex w-full max-w-fit items-center justify-center rounded-2xl bg-[#E6F6EE] p-5 text-xl font-bold text-shade-300 transition-all hover:scale-[1.02] lg:min-w-[16rem]",
            className,
          )}
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "green-dark" && (
        <Button
          href={href}
          as={href ? Link : undefined}
          className={cn(
            "flex w-full max-w-fit items-center justify-center rounded-lg bg-[#073B3A] p-6 px-8 font-semibold text-white transition-all hover:scale-[1.02] lg:min-w-[8rem]",
            className,
          )}
          onPress={onClick}
        >
          {content}
          <GoArrowRight size={20} color="white" />
        </Button>
      )}
      {variant == "green-light" && (
        <Button
          href={href}
          as={href ? Link : undefined}
          className={cn(
            "h-[52px] rounded-lg border-[1px] border-[#073B3A]  bg-transparent px-[2.5rem] font-semibold text-[#073B3A] transition-all hover:scale-[1.02]",
            className,
          )}
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "learn-more" && (
        <Button
          href={href}
          as={href ? Link : undefined}
          className={cn(
            "flex max-w-fit items-center justify-center rounded-lg border border-[#073B3A] bg-transparent p-6 px-10 font-semibold text-[#073B3A] transition-all hover:scale-[1.02] lg:min-w-[8rem]",
            className,
          )}
          onPress={onClick}
        >
          {content}
          <CaLearnMore />
        </Button>
      )}
      {variant == "explore" && (
        <Button
          href={href}
          as={href ? Link : undefined}
          className={cn(
            "lg:min-w-[8rem flex max-w-fit items-center justify-center rounded-lg border border-[#073B3A] bg-transparent p-6 px-10 font-semibold text-[#073B3A] transition-all hover:scale-[1.02]",
            className,
          )}
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "green-fade-light" && (
        <Button
          href={href}
          as={href ? Link : undefined}
          className={cn(
            "max-w-fit rounded-lg bg-[#99B3B2] p-6 px-8 font-semibold text-white  transition-all hover:scale-[1.02] lg:min-w-[9rem]",
            className,
          )}
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "how-it-works" && (
        <Button
          href={href}
          as={href ? Link : undefined}
          className={cn(
            "max-w-fit rounded-[2rem] border-l-8 border-l-[#33B874] bg-[#FBE9C8] p-5 text-xl text-black transition-all hover:scale-[1.02] lg:min-w-[8rem]",
            className,
          )}
          onPress={onClick}
        >
          {content}
        </Button>
      )}
      {variant == "" && (
        <Button href={href} as={href ? Link : undefined}>
          {content}
        </Button>
      )}{" "}
      {variant == "" && (
        <Button href={href} as={href ? Link : undefined}>
          {content}
        </Button>
      )}
    </>
  );
}
