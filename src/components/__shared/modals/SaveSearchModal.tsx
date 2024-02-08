import React from "react";
import { HiSaveAs } from "react-icons/hi";
import Modal from "./Modal";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
  useDisclosure,
} from "@nextui-org/react";
import Button from "../ui/button/Button";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { IoIosCloseCircle } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import DestructiveModal from "./DestructiveModal";

type Props = {};

let recentSearchDemo = true;

const SaveSearchModal = (props: Props) => {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <>
      <HiSaveAs
        className="cursor-pointer text-[#21A19F]"
        title="saved search"
        size={20}
        onClick={onOpen}
      />
      <Modal
        closeButton={
          <IoIosCloseCircle
            className="cursor-pointer text-4xl text-red-500 xs:text-5xl"
            onClick={onClose}
          />
        }
        header={<ModalHeader />}
        body={<ModalBody />}
        footer={<ModalFooter />}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        size="xl"
        className="max-w-2xl"
      />
    </>
  );
};

const ModalHeader = () => {
  return <h2>Save search</h2>;
};

const ModalBody = () => {
  return (
    <div>
      <h3 className="font-normal text-neutral-500">Provide a search Name</h3>
      <div className="mt-4 grid grid-cols-5 gap-2">
        <input
          type="text"
          className="col-span-5 rounded-sm border p-3 outline-none xs:col-span-4"
          placeholder="Bantama search"
        />
        <Button color="primary" className="col-span-1 h-full">
          Save
        </Button>
      </div>
      <div className="mt-8 border-t pt-4">
        <h3 className="font-medium">Your recent searches</h3>
        <div className="mt-4 space-y-9 px-1.5 ssm:space-y-5">
          {recentSearchDemo ? (
            <>
              {[1, 2, 4].map((idx) => (
                <RecentSearch
                  key={idx}
                  title="Bantama Search One"
                  date="30 Jan, 2024"
                />
              ))}
            </>
          ) : (
            <div className="flex h-40 items-center justify-center">
              No Saved search
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const ModalFooter = () => {
  return (
    <Button
      variant="ghost"
      className="mb-5 font-medium text-neutral-800 underline"
    >
      View All
    </Button>
  );
};

const RecentSearch = ({ title, date }: { title: string; date: string }) => {
  const { isOpen, onOpenChange, onOpen, onClose } = useDisclosure();

  return (
    <div className="grid grid-cols-9 gap-6 ssm:items-center">
      <div className="col-span-8 ssm:col-span-4">
        <p className="truncate font-medium text-shade-300" title={title}>
          {title}
        </p>
        {/* shows on mobile */}
        <div className="mt-2 flex items-center justify-between gap-5 ssm:hidden ssm:justify-start">
          <p className="col-span-2 text-shade-200">{date}</p>
          <Button
            variant="outline"
            color="primary"
            className="col-span-2 px-1 font-normal"
          >
            Run Search
          </Button>
        </div>
      </div>
      <p className="col-span-2 hidden text-shade-200 ssm:inline-grid">{date}</p>
      <Button
        variant="outline"
        color="primary"
        className="col-span-2 hidden px-1 font-normal ssm:flex"
      >
        Run Search
      </Button>
      <Popover>
        <PopoverTrigger>
          <button className="col-span-1 ml-auto">
            <BiDotsVerticalRounded />
          </button>
        </PopoverTrigger>
        <PopoverContent className="rounded-md">
          <button className="flex items-center gap-2" onClick={onOpen}>
            Delete
            <FiTrash2 />
          </button>
        </PopoverContent>
      </Popover>

      <DestructiveModal
        label="Are you sure you want to delete this saved search?"
        onClose={onClose}
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        backdropClassName="z-[99999]"
      />
    </div>
  );
};

export default SaveSearchModal;
