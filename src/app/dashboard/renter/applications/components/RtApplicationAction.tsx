// import {
//   Popover,
//   PopoverContent,
//   PopoverTrigger,
//   useDisclosure,
// } from "@nextui-org/react";
import React, { useState } from "react";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { FiTrash2 } from "react-icons/fi";
import { MdOutlineEdit } from "react-icons/md";
import { PiChatCenteredDots } from "react-icons/pi";
import { RenterApplicationStatus } from "./RtApplicationStatus";
import dynamic from "next/dynamic";
const PopupModal = dynamic(
  () => import("@/components/__shared/ui/modals/PopupModal"),
);

type Props = {
  status: RenterApplicationStatus;
  id: string;
  table: TableNames;
};

const RtApplicationAction = ({ status, id, table }: Props) => {
  // const { onClose, isOpen, onOpenChange, onOpen } = useDisclosure();
  const [popoverIsOpen, setPopoverIsOpen] = useState(false);

  return (
    <>
      {/* <PopupModal
        isOpen={isOpen}
        onClose={onClose}
        onOpenChange={onOpenChange}
        label="Are you sure you want to delete this application?"
        handleAction={() => {}}
      /> */}
      {/* <Popover
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
            {status === "incomplete" && (
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
      </Popover> */}
    </>
  );
};

export default RtApplicationAction;
