import React from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { MdOutlineRemoveRedEye } from "react-icons/md";

import { MdInfoOutline } from "react-icons/md";
import CaAgentMessage from "./icons/CaAgentMessage";
import CaDelete from "../../saved-search/components/CaDelete";

export default function ViewModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-[#F1F1F1] w-full py-4">
        <MdOutlineRemoveRedEye size={24}/>
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" py-3">
                <div className="flex flex-col gap-8">
                  <div className="rounded-[1.75rem] border-[8px] border-error-50 bg-[#E9ECEF] max-w-[48px] aspect-square flex items-center justify-center">
                    <MdInfoOutline size={24} />
                  </div>
                  <div>
                    <p className="text-[1.125rem] font-semibold">Delete</p>
                    <p className="text-[#475467] text-[0.875rem]">
                      Are you sure you want to delete this saved search?
                    </p>
                  </div>
                </div>
                <div className="flex gap-4 mt-6 ">
                  <Button
                    onPress={onClose}
                    className="px-5 py-2 bg-[#E9515E] rounded-lg flex items-center justify-center h-[38px] min-w-[149px] text-white font-semibold">
                    Yes
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    className="px-5 py-2 bg-[#F1F1F1] rounded-lg flex items-center justify-center h-[38px] min-w-[149px] text-shade-200 font-semibold">
                    No
                  </Button>
                </div>
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}
