import { useDisclosure } from "@nextui-org/react";
import React, { useContext, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "../ui/ActionPopover";
import { ItemContext } from "@/app/dashboard/contexts/ItemContext";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";

interface Props {
  refetch: () => void;
  id: number;
}
const Actions = ({ refetch, id }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const item = useContext(ItemContext)?.item;
  const supabase = createClient();
  const router = useRouter();
  const handleDestruction = async () => {
    const { data, error } = await supabase
      .from("products")
      .update({
        is_deleted: true,
        deletion_date: new Date().toDateString(),
      })
      .eq("id", id);

    if (!error) {
      refetch();
    } else {
      toast.error(error.message);
    }
  };

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this item?"
        handleDestruction={handleDestruction}
      />

      <ActionPopover isOpen={popoverIsOpen} onOpenChange={setPopoverIsOpen}>
        <ActionItemTrigger
          className="col-span-1 ml-auto h-fit w-fit p-2"
          onClick={() => setPopoverIsOpen(true)}
        >
          <BiDotsVerticalRounded />
        </ActionItemTrigger>
        <ActionContent>
          <ActionItem
            onClick={() => router.push(`sell-products/update-product/${id}`)}
          >
            <MdOutlineEdit />
            Edit
          </ActionItem>
          <ActionItem onClick={onOpen}>
            <FiTrash2 />
            Delete
          </ActionItem>
        </ActionContent>
      </ActionPopover>
    </>
  );
};

export default Actions;
