import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import React, { useContext, useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import ProductStatus from "./ProductStatus";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "../../../../../components/__shared/ui/popover/action-popover";
import { ItemPublicationStatus } from "./PublicationStatus";
import { ItemContext } from "@/app/dashboard/contexts/ItemContext";
import dynamic from "next/dynamic";
const PopupModal = dynamic(() =>
  import("@/components/__shared/ui/alert-dialog/alert-dialog").then(
    (mod) => mod.PopupModal,
  ),
);

interface Props {
  refetch: () => void;
  id: number;
}
const ActionsMobile = ({ refetch, id }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  const item = useContext(ItemContext)?.item;
  const handleDestruction = () => {};

  return (
    <>
      <PopupModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this item?"
        onAction={handleDestruction}
      />
      <ActionPopover isOpen={popoverIsOpen} onOpenChange={setPopoverIsOpen}>
        <ActionItemTrigger
          className="col-span-1 ml-auto h-fit w-fit p-2"
          onClick={() => setPopoverIsOpen(true)}
        >
          <BiDotsVerticalRounded />
        </ActionItemTrigger>
        <ActionContent>
          <ActionItem>
            {item?.is_available
              ? "Available"
              : item?.status === "Suspended"
                ? "Suspended"
                : "Unavailable"}
            <ProductStatus
              status={item?.status as ItemPublicationStatus}
              isAvailable={item?.is_available as boolean}
              id={id}
              refetch={refetch}
            />
          </ActionItem>
          <ActionItem disabled={item?.status === "Suspended"}>
            <MdOutlineEdit />
            Edit
          </ActionItem>
          <ActionItem onClick={onOpen} disabled={item?.status === "Suspended"}>
            <FiTrash2 />
            Delete
          </ActionItem>
        </ActionContent>
      </ActionPopover>
    </>
  );
};

export default ActionsMobile;
