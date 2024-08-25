import React from "react";
import {
  PopoverTrigger,
  PopoverContent,
} from "@/components/__shared/ui/popover";
import { FaBan, FaEllipsisV } from "react-icons/fa";
import { MdLockOpen } from "react-icons/md";
import dynamic from "next/dynamic";
import { useDisclosure } from "@/lib/custom-hooks/useCustomDisclosure";
import { Button } from "@/components/__shared/ui/button";

const Popover = dynamic(() =>
  import("@/components/__shared/ui/popover").then((mod) => mod.Popover),
);
const PopupModal = dynamic(
  () => import("@/components/__shared/ui/modals/popup-modal"),
);

type Props = {
  isBlocked?: boolean;
};

const BlockUserPopOver = (props: Props) => {
  const { isOpen, onOpen, onOpenChange, onClose } = useDisclosure();

  return (
    <>
      <Popover>
        <PopoverTrigger>
          <Button className="bg-transparent" size="icon">
            <FaEllipsisV className="text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent
          side="right"
          className="top-8 flex cursor-pointer items-center gap-2 bg-primary-400 px-6 py-2 font-[300] text-white min-[1977px]:translate-x-[-120%]"
          onClick={onOpen}
        >
          {props.isBlocked ? (
            <div className="flex items-center gap-2">
              Unblock this user
              <MdLockOpen />
            </div>
          ) : (
            <div className="flex items-center gap-2">
              Block this user
              <FaBan />
            </div>
          )}
        </PopoverContent>
      </Popover>

      {/* <PopupModal
        label="Are you sure you want to block this user?"
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        handleAction={() => {}}
      /> */}
    </>
  );
};

export default BlockUserPopOver;
