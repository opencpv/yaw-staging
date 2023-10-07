import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@nextui-org/react";
import { HiOutlineExclamationCircle } from "react-icons/hi";

type Props = {
  isOpen: boolean;
  onOpen: () => void;
  onOpenChange: () => void;
};

const BlockUserModal = ({ isOpen ,onOpenChange }: Props) => {
  const { onClose } = useDisclosure();

  return (
    <>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <div className="bg-[#FEF3F2] rounded-full w-16 h-16 flex items-center justify-center">
                    <div className="flex items-center justify-center rounded-full w-11 h-11 bg-neutral-200">
                        <HiOutlineExclamationCircle className="text-xl rotate-180" />
                    </div>
                </div>
              </ModalHeader>
              <ModalBody>
                <h2 className="text-neutral-900 font-[700]">Notice</h2>
                <p className="text-sm text-neutral-500">
                  Are you sure you want to block this user?
                </p>
              </ModalBody>
              <ModalFooter>
                <button className="bg-red-500 text-white font-[500] py-1 max-w-[8rem] w-32 rounded-lg" >
                  Yes
                </button>
                <button className="bg-neutral-200 text-neutral-500 font-[500] py-1 max-w-[8rem] w-32 rounded-lg" onClick={onClose}>
                  No
                </button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default BlockUserModal;
