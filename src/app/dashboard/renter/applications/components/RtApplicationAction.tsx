import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import React from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { PiChatCenteredDots } from "react-icons/pi";
import { Status } from "./RtApplicationStatus";
import DestructiveModal from "@/components/__shared/modals/DestructiveModal";

type Props = {
  status: Status;
  id: string;
  table: string;
};

const RtApplicationAction = ({ status, id, table }: Props) => {
  const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();

  return (
    <>
      <DestructiveModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        id={id}
        table={table}
      />
      <Popover style={{ zIndex: "99999" }} placement="left">
        <PopoverTrigger className="h-fit w-fit">
          <button className="col-span-1 ml-auto h-fit w-fit p-2">
            <BiDotsVerticalRounded />
          </button>
        </PopoverTrigger>
        <PopoverContent className="rounded-md bg-[#fefefe] px-0 py-0">
          <div className="flex flex-col divide-y rounded-md">
            {status === "not submitted" && (
              <>
                <button
                  className="deep-green-hover flex w-full  items-center gap-2 px-4 py-2"
                  onClick={() => ""}
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
              </>
            )}
            <button
              className="deep-green-hover flex w-full items-center  gap-2 px-4 py-2"
              onClick={() => ""}
            >
              <span className="mr-auto">Message</span>

              <PiChatCenteredDots />
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </>
  );
};

export default RtApplicationAction;
