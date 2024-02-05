import React from "react";
import Button from "../ui/button/Button";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { cn } from "@/lib/utils";
import { FaRegEyeSlash } from "react-icons/fa6";

type Props = {
  icon: "eye open" | "eye close";
  label: string;
  href?: string;
  className?: string;
};

const ListingCardButton = (props: Props) => {
  return (
    <Button
      href={props.href}
      className={cn(
        "group/btn min-h-unit-12 gap-3 rounded-xl bg-neutral-100 px-6 text-lg font-semibold capitalize text-neutral-400 hover:bg-primary-200 hover:text-white",
        props.className,
      )}
    >
      {props.label}
      {props.icon === "eye open" && (
        <MdOutlineRemoveRedEye className="text-neutral-800 group-hover/btn:text-white" />
      )}
      {props.icon === "eye close" && (
        <FaRegEyeSlash className="text-neutral-800 group-hover/btn:text-white" />
      )}
    </Button>
  );
};

export default ListingCardButton;
