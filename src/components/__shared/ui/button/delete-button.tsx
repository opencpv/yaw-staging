import React from "react";
import { Button } from ".";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
const PopupModal = dynamic(() =>
  import("../alert-dialog").then((mod) => mod.PopupModal),
);

type Props = {
  className?: string;
  /**
   * For the styling the icon
   */
  classNames?: {
    icon?: string;
  };
  handleDestruction: () => void;
  /**
   * Indicates if the modal's action button is loading
   */
  loading: boolean;
  /**
   * The content of the modal
   */
  label?: string;
  variant?: "default" | "ghost";
};

const DeleteButton = ({
  className,
  loading,
  label,
  handleDestruction,
  classNames,
  variant = "default",
}: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <PopupModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={label ?? "Are you sure you want to delete this item?"}
        onAction={handleDestruction}
        loading={loading}
      />
      <Button
        size="icon"
        title="Delete"
        className={cn(
          {
            "bg-secondary-50 p-4": variant === "default",
            "bg-transparent p-0": variant === "ghost",
          },
          className,
        )}
        onClick={onOpen}
      >
        <FiTrash2
          size={variant === "default" ? 16 : 24}
          className={cn("text-error", classNames?.icon)}
        />
      </Button>
    </>
  );
};

export default DeleteButton;
