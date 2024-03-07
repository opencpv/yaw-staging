import React from "react";
import Button from "./Button";
import { FiTrash2 } from "react-icons/fi";
import { cn } from "@/lib/utils";
import DestructiveModal from "../../modals/DestructiveModal";
import { useDisclosure } from "@nextui-org/react";

type Props = {
  className?: string;
  table: string;
  id: string;
};

const ButtonDelete = ({ className, table, id }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        id=""
        table=""
      />
      <Button
        isIconOnly
        title="Delete"
        className={cn("", className)}
        onClick={onOpen}
      >
        <FiTrash2 size={24} className="text-neutral-700" />
      </Button>
    </>
  );
};

export default ButtonDelete;
