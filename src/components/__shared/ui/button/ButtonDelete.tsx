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
        className={cn(
          "group flex w-full max-w-[200px] items-center justify-center rounded-md bg-secondary-500 px-4 text-neutral-800 hover:bg-primary-200",
          className,
        )}
        onClick={onOpen}
      >
        <FiTrash2 size={16} className="text-red-500 group-hover:text-white" />
      </Button>
    </>
  );
};

export default ButtonDelete;
