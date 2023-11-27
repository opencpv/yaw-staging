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

import { MdInfoOutline } from "react-icons/md";
import { MdOutlineCall } from "react-icons/md";
import CaAgentCall from "./icons/CaAgentCall";


export default function ScheduleVirtualTourModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      <Button onPress={onOpen} className="bg-[#ECF2F3] font-semibold gap-2  text-shade-200 h-[60px] max-w-[284px] w-full">
        Schedule a virtual tour
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
