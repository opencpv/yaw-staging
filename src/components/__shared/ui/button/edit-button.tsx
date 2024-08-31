import React from "react";
import { Button } from "./";
import { cn } from "@/lib/utils";
import { MdOutlineEdit } from "react-icons/md";

type Props = {
  onClick?: () => void;
  className?: string;
  variant?: "default" | "ghost";
};

const EditButton = ({ onClick, variant = "default", className }: Props) => {
  return (
    <Button
      size={"icon"}
      title="Edit"
      className={cn(
        {
          "bg-secondary-50 p-4": variant === "default",
        },
        className,
      )}
      onClick={onClick}
    >
      <MdOutlineEdit
        size={variant === "default" ? 16 : 24}
        className="text-shade-500"
      />
    </Button>
  );
};

export default EditButton;
