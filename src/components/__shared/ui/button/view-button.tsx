import React from "react";
import { Button } from "./Button";
import { cn } from "@/lib/utils";
import { AiOutlineEye } from "react-icons/ai";

type Props = {
  onOpen: () => void;
  className?: string;
};

const ViewButton = ({ onOpen, className }: Props) => {
  return (
    <Button
      size="icon"
      title="View"
      className={cn("bg-secondary-50 p-4 text-shade-500", className)}
      onClick={onOpen}
    >
      <AiOutlineEye size={16} />
    </Button>
  );
};

export default ViewButton;
