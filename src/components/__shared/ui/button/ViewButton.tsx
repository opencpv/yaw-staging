import React from "react";
import Button from "./Button";
import { cn } from "@/lib/utils";
import { AiOutlineEye } from "react-icons/ai";

type Props = {
  onOpen: () => void;
  className?: string;
};

const ViewButton = ({ onOpen, className }: Props) => {
  return (
    <Button
      isIconOnly
      title="Edit"
      className={cn(
        "flex w-full items-center justify-center rounded-md bg-secondary-50 px-4 text-neutral-800",
        className,
      )}
      onClick={onOpen}
    >
      <AiOutlineEye size={16} />
    </Button>
  );
};

export default ViewButton;
