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
import DestructiveModal from "@/components/__shared/ui/modals/DestructiveModal";
import { cn } from "@/lib/utils";

type Props = {
  data: any;
};

const Actions = ({ data }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this item?"
        handleDestruction={() => {}}
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
              className={cn(
                "deep-green-hover flex w-full items-center gap-2 px-4 py-2",
                {
                  "pointer-events-none cursor-not-allowed text-shade-200":
                    data.status === "Suspended",
                },
              )}
              onClick={() => ""}
            >
              <span className="mr-auto">Edit</span>
              <MdOutlineEdit />
            </button>
            <button
              className={cn(
                "deep-green-hover flex w-full items-center gap-2 px-4 py-2",
                {
                  "pointer-events-none cursor-not-allowed text-shade-200":
                    data.status === "Suspended",
                },
              )}
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
