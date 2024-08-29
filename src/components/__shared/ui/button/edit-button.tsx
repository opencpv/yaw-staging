import React from "react";
import { Button } from "./";
import { cn } from "@/lib/utils";
import { MdOutlineEdit } from "react-icons/md";

type Props = {
  onOpen: () => void;
  className?: string;
};

const EditButton = ({ onOpen, className }: Props) => {
  return (
    <Button
      size={"icon"}
      title="Edit"
      className={cn(className)}
      onClick={onOpen}
    >
      <MdOutlineEdit size={24} className="text-neutral-700" />
    </Button>
  );
};

export default EditButton;
