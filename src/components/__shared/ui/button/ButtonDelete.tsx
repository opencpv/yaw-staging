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
        "group flex w-full max-w-[200px] items-center justify-center rounded-md bg-secondary-500 px-4 text-neutral-800 hover:bg-primary-200",
        className,
      )}
      onClick={onOpen}
    >
      <FiTrash2 size={16} className="text-red-500 group-hover:text-white" />
    </Button>
  );
};

export default ButtonDelete;
