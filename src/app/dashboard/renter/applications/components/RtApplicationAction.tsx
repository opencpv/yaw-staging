import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { PiChatCenteredDots } from "react-icons/pi";
import { RenterApplicationStatus } from "./RtApplicationStatus";
import dynamic from "next/dynamic";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import {
  ActionContent,
  ActionItem,
  ActionItemTrigger,
  ActionPopover,
} from "@/components/__shared/ui/popover/action-popover";

const PopupModal = dynamic(() =>
  import("@/components/__shared/ui/alert-dialog").then((mod) => mod.PopupModal),
);

type Props = {
  status: RenterApplicationStatus;
  id: string;
  table: TableNames;
};

const RtApplicationAction = ({ status, id, table }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <PopupModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        handleAction={() => {}}
      />
      <ActionPopover>
        <ActionItemTrigger className="col-span-1 ml-auto p-2">
          <BiDotsVerticalRounded />
        </ActionItemTrigger>
        <ActionContent>
          <ActionItem>
            <MdOutlineEdit />
            Edit
          </ActionItem>
          <ActionItem onClick={onOpen}>
            <FiTrash2 />
            Delete
          </ActionItem>
          <ActionItem onClick={onOpen}>
            <PiChatCenteredDots />
            Message
          </ActionItem>
        </ActionContent>
      </ActionPopover>
    </>
  );
};

export default RtApplicationAction;
