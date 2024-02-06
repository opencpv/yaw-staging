import React from "react";
import Button from "./Button";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import { MdOutlineEdit } from "react-icons/md";

type Props = {
  onOpen: () => void;
  className?: string;
};

const EditButton = ({ onOpen, className }: Props) => {
  return (
    <Button
      isIconOnly
      title="Edit"
      className={cn(
        "flex w-full items-center justify-center rounded-md bg-[#F1F1F1] px-4 text-neutral-800",
        className,
      )}
      onClick={onOpen}
    >
      <MdOutlineEdit size={16} />
    </Button>
  );
};

export default EditButton;
