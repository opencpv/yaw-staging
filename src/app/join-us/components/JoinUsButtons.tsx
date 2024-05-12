"use client";
import { MdArrowRightAlt } from "react-icons/md";
import { HiOutlineArrowNarrowLeft } from "react-icons/hi";
import CaJoinUsIconLeft from "../open-positions/components/icons/CaJoinUsIconLongLeft";
import Button from "@/components/__shared/ui/button/Button";

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
  href?: string;
};

function JoinUsButtons({
  variant,
  content,
  icon,
  iconType,
  reverseIcon,
  href,
}: Props) {
  const buttonClasses: any = {
    "filled-green": "bg-secondary-400 text-white",
    "outline-green":
      "border-[1px] border-[#99B3B2] text-[#99B3B2] bg-transparent",
    "filled-yellow": "bg-accent text-white",
    "text-yellow":
      "text-accent bg-white w-fit hover:border-accent hover:border-2",
    "text-yellow-accent": "bg-transparent text-accent",
    "outline-yellow-accent":
      "border-[1px] border-[#AD842A] bg-transparent text-accent",
  };
  const iconTypeOptions: any = {
    "arrow-right": <MdArrowRightAlt size="20" color="#AD842A" />,
    "arrow-left": <CaJoinUsIconLeft />,
  };

  return (
    <Button
      href={href}
      variant={variant === "text-yellow-accent" ? "ghost" : undefined}
      className={`${buttonClasses[variant]} ${
        reverseIcon && "flex-row-reverse"
      }`}
    >
      {content}
      {icon && iconType && iconTypeOptions[iconType]}
    </Button>
  );
}

export default JoinUsButtons;
