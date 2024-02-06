import React from "react";
import Button from "./Button";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";

type Props = {
  onOpen: () => void;
  className?: string;
};

const ButtonDelete = ({ onOpen, className }: Props) => {
  return (
    <Button
      isIconOnly
      title="Delete"
      className={cn(
        "flex w-full items-center justify-center rounded-md bg-[#F1F1F1] px-4 text-neutral-800",
        className,
      )}
      onClick={onOpen}
    >
      <FiTrash2 size={16} className="text-red-500" />
    </Button>
  );
};

export default ButtonDelete;
