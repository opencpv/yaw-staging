import React from "react";
import { Button } from "./";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
const PopupModal = dynamic(() =>
  import("../alert-dialog").then((mod) => mod.PopupModal),
);

type Props = {
  className?: string;
  classNames?: {
    icon?: string;
  };
  handleDestruction: () => void;
  loading: boolean;
  label?: string;
  variant?: "background" | "ghost";
};

const DeleteButton = ({
  className,
  loading,
  label,
  handleDestruction,
  classNames,
  variant = "ghost",
}: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <PopupModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={label ?? "Are you sure you want to delete this item?"}
        handleAction={handleDestruction}
        loading={loading}
      />
      <Button
        size="icon"
        title="Delete"
        className={cn(
          {
            "bg-secondary-50 p-4": variant === "background",
          },
          className,
        )}
        onClick={onOpen}
      >
        <FiTrash2
          size={variant === "background" ? 16 : 24}
          className={cn("text-neutral-700", classNames?.icon)}
        />
      </Button>
    </>
  );
};

export default DeleteButton;
