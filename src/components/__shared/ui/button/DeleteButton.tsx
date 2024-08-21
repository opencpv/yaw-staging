import React from "react";
import Button from "./Button";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
// import { useDisclosure } from "@nextui-org/react";
// const PopupModal = dynamic(() => import("../modals/DestructiveModal"));

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
  // const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      {/* <PopupModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label={label ?? "Are you sure you want to delete this item?"}
        handleAction={handleDestruction}
        loading={loading}
      /> */}
      <Button
        isIconOnly
        title="Delete"
        className={cn(
          "",
          {
            "rounded-md bg-secondary-50 p-4": variant === "background",
          },
          className,
        )}
        // onClick={onOpen}
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
