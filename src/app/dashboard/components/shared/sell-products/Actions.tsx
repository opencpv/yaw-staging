import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { PiChatCenteredDots } from "react-icons/pi";
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";
import { createClient } from "@/lib/utils/supabase/auth/client";
import { useRouter } from "next/navigation";

type Props = {
  id: string | number;
  table: TableNames;
  refetch: () => void;
};

const Actions = ({ id, table, refetch }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);
  const router = useRouter();
  const supabase = createClient();
  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        handleDestruction={async () => {
          const { data, error } = await supabase
            .from("products")
            .update({
              is_deleted: true,
              deletion_date: new Date().toDateString(),
            })
            .eq("id", id);
          if (!error) {
            refetch();
          }
        }}
      />
      <Popover
        style={{ zIndex: "99999" }}
        placement="left"
        isOpen={popoverIsOpen}
        onOpenChange={setPopoverIsOpen}
      >
        <PopoverTrigger
          className="h-fit w-fit"
          onClick={() => setPopoverIsOpen(true)}
        >
          <button className="col-span-1 ml-auto h-fit w-fit p-2">
            <BiDotsVerticalRounded />
          </button>
        </PopoverTrigger>
        <PopoverContent className="rounded-md bg-[#fefefe] px-0 py-0">
          <div className="flex flex-col divide-y rounded-md">
            <button
              className="deep-green-hover flex w-full  items-center gap-2 px-4 py-2"
              onClick={() => router.push(`sell-products/update-product/${id}`)}
            >
              <span className="mr-auto">Edit</span>
              <MdOutlineEdit />
            </button>
            <button
              className="deep-green-hover flex w-full items-center gap-2 px-4 py-2"
              onClick={onOpen}
            >
              <span className="mr-auto">Delete</span>

              <FiTrash2 />
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default Actions;
