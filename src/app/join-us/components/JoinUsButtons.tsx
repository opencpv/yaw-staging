"use client";
import { Button } from "@nextui-org/react";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import CaJoinUsIconLeft from "../open-positions/components/icons/CaJoinUsIconLongLeft";

type Props = {
  variant:
    | "filled-green"
    | "outline-green"
    | "filled-yellow"
    | "text-yellow"
    | "text-yellow-accent"
    | "outline-yellow-accent"
    | "outline-yellow-accent";
  content: string;
  icon?: boolean;
  iconType?: "arrow-right" | "arrow-left";
  reverseIcon?: boolean;
};

function JoinUsButtons({
  variant,
  content,
  icon,
  iconType,
  reverseIcon,
}: Props) {
  const buttonClasses: any = {
    "filled-green": "px-5 py-2.5 h-[38px] lg:h-[52px]  lg:px-[2.5rem] lg:py-[0.94rem] bg-[#99B3B2] text-white max-w-[197px] w-full",
    "outline-green":
      "border-[1px] border-[#99B3B2] text-[#99B3B2] bg-transparent max-w-[197px] w-full px-5 py-2.5 h-[38px] lg:h-[52px]  lg:px-[2.5rem] lg:py-[0.94rem]",
    "filled-yellow": "bg-[#DDB771] text-white max-w-[198px]",
    "text-yellow": "text-[#DDB771] max-w-[198px] bg-white",
    "text-yellow-accent": "bg-transparent text-[#DDB771] text-[1.125rem]",
    "outline-yellow-accent":
      "border-[1px] border-[#AD842A] max-w-[186px] bg-transparent text-[#DDB771]",
  };
  const iconTypeOptions: any = {
    "arrow-right": <MdArrowRightAlt size="20" color="#AD842A" />,
    "arrow-left": <CaJoinUsIconLeft />,
  };
  return (
    <Button
      className={`h-[52px] px-[2.5rem] py-[0.94rem]  rounded-lg font-semibold ${
        buttonClasses[variant]
      } gap-2.5 ${reverseIcon && "flex-row-reverse"}`}>
      {content}
      {icon && iconType && iconTypeOptions[iconType]}
    </Button>
  );
}

export default JoinUsButtons;
