import React from "react";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { FaBan, FaEllipsisV } from "react-icons/fa";
import BlockUserModal from "./BlockUserModal";

const BlockUserPopOver = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>    
      <Popover placement="right"
        classNames={{
          base: "flex items-center py-2 px-6 gap-2 top-8 min-[1977px]:translate-x-[-120%]",
        }}
      >
        <PopoverTrigger>
          <Button className="bg-transparent" isIconOnly>
            <FaEllipsisV className="text-white" />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="bg-primary-400 text-white cursor-pointer font-[300]"
          onClick={onOpen}
        >
          <div className="flex items-center gap-2">
            Block this user
            <FaBan />
          </div>
        </PopoverContent>
      </Popover>

      <BlockUserModal onOpen={onOpen} isOpen={isOpen} onOpenChange={onOpenChange} />
    </>
  );
};

export default BlockUserPopOver;
