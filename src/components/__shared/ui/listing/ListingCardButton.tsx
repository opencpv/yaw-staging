import React from "react";
import Button from "../button/Button";
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
      variant="outline"
      color="white"
      href={props.href}
      className={cn(
        "min-h-unit-12 gap-3 rounded-xl px-6 text-lg font-semibold capitalize text-white",
        props.className,
      )}
    >
      {props.label}
      {props.icon === "eye open" && (
        <MdOutlineRemoveRedEye className="text-white" />
      )}
      {props.icon === "eye close" && <FaRegEyeSlash className="text-white" />}
    </Button>
  );
};

export default ListingCardButton;
