import Button from "@/components/__shared/ui/button/Button";
import Modal from "@/components/__shared/modals/Modal";
import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi";
import { useRouter } from "next/navigation";
import supabase from "@/lib/utils/supabase/supabaseClient";

type TableNames = keyof Database["public"]["Tables"];

type ModalProps = {
  isOpen: boolean;
  onOpenChange: () => void;
  onClose: () => void;
  id: string;
  table: TableNames;
  label?: string;
  backdropClassName?: string;
  handleDestruction?: () => void;
};

type ModalFooterProps = {
  onClose: () => void;
  id: string;
  table: TableNames;
};

type ModalBodyProps = {
  label?: string;
};

const DestructiveModal = ({
  isOpen,
  onOpenChange,
  onClose,
  label,
  backdropClassName,
  id,
  table,
}: ModalProps) => {
  return (
    <Modal
      header={<ModalHeader />}
      body={<ModalBody label={label} />}
      footer={<ModalFooter onClose={onClose} id={id} table={table} />}
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="md"
      backdropClassName={backdropClassName}
    />
  );
};

const ModalHeader = () => {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#FEF3F2]">
      <div className="flex h-11 w-11 items-center justify-center rounded-full bg-neutral-200">
        <HiOutlineExclamationCircle className="rotate-180 text-xl text-neutral-800" />
      </div>
    </div>
  );
};

const ModalBody = ({ label }: ModalBodyProps) => {
  return (
    <>
      <h2 className="font-[700] text-neutral-900">Notice</h2>
      <p className="text-sm text-neutral-500">
        {label ? label : "Are you sure you want to delete this item?"}
      </p>
    </>
  );
};

const ModalFooter = ({ onClose, table, id }: ModalFooterProps) => {
  const router = useRouter();

  const handleDestruction = async () => {
    const { error } = await supabase.from(table).delete().eq("id", id);

    if (!error) {
      router.refresh();
    }
  };

  return (
    <div className="flex w-full justify-end gap-2">
      <Button
        className="w-32 max-w-[8rem] rounded-lg bg-red-500 py-1 font-[500] text-white"
        onClick={handleDestruction}
      >
        Yes
      </Button>
      <Button
        className="w-32 max-w-[8rem] rounded-lg bg-neutral-200 py-1 font-[500] text-neutral-500"
        onClick={onClose}
      >
        No
      </Button>
    </div>
  );
};

export default DestructiveModal;
