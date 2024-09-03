"use client";

import { GoArrowRight } from "react-icons/go";
import CaLearnMore from "../icons/CaLearnMore";
import { cn } from "@/lib/utils";
import { LinkButton } from "@/components/__shared/ui/button/Button";

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
        <LinkButton
          href={href}
          className={cn(
            "w-full max-w-[184px] whitespace-nowrap bg-success-100 text-primary-600",
            className,
          )}
          radius={"full"}
          onClick={onClick}
        >
          {content}
        </LinkButton>
      )}
      {variant == "price" && (
        <LinkButton
          href={href}
          className={cn(
            "w-full max-w-fit rounded-2xl bg-[#E6F6EE] font-semibold text-shade-300 lg:min-w-[16rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </LinkButton>
      )}
      {variant == "green-dark" && (
        <LinkButton
          href={href}
          className={cn("w-full max-w-fit lg:min-w-[8rem]", className)}
          onClick={onClick}
        >
          {content}
          <GoArrowRight size={20} color="white" />
        </LinkButton>
      )}
      {variant == "green-light" && (
        <LinkButton
          variant={"outline"}
          href={href}
          className={cn(className)}
          onClick={onClick}
        >
          {content}
        </LinkButton>
      )}
      {variant == "learn-more" && (
        <LinkButton
          variant={"outline"}
          href={href}
          className={cn(className)}
          onClick={onClick}
        >
          {content}
          <CaLearnMore />
        </LinkButton>
      )}
      {variant == "explore" && (
        <LinkButton
          variant={"outline"}
          href={href}
          className={cn(className)}
          onClick={onClick}
        >
          {content}
        </LinkButton>
      )}
      {variant == "green-fade-light" && (
        <LinkButton
          href={href}
          className={cn(
            "max-w-fit bg-secondary-400 font-semibold text-white",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </LinkButton>
      )}
      {variant == "how-it-works" && (
        <LinkButton
          href={href}
          className={cn(
            "max-w-fit rounded-[2rem] border-l-8 border-l-[#33B874] bg-[#FBE9C8] text-black lg:min-w-[8rem]",
            className,
          )}
          onClick={onClick}
        >
          {content}
        </LinkButton>
      )}
      {variant == "" && <LinkButton href={href}>{content}</LinkButton>}
    </>
  );
}
