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
import { MdOutlineModeEdit } from "react-icons/md";

import CaAgentMessage from "./icons/CaAgentMessage";
import CaDelete from "../../saved-search/components/CaDelete";
import EditButton from "@/components/__shared/ui/button/EditButton";

export default function EditModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <>
      {/* <Button onPress={onOpen} className="bg-secondary-50 p-4 aspect-square">
        <MdOutlineModeEdit size={24}/>
      </Button> */}
      <EditButton onOpen={onOpen} className="w-fit" />
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" py-3">
                <div className="flex flex-col gap-8">
                  <div
                    className="flex aspect-square max-w-[48px] items-center justify-center rounded-[1.75rem] border-[8px] border-error-50 bg-[#E9ECEF]"
                    title="Edit"
                  >
                    <MdInfoOutline size={24} />
                  </div>
                  <div>
                    <p className="text-[1.125rem] font-semibold">Delete</p>
                    <p className="text-[0.875rem] text-[#475467]">
                      Are you sure you want to delete this saved search?
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex gap-4 ">
                  <Button
                    onPress={onClose}
                    className="flex h-[38px] min-w-[149px] items-center justify-center rounded-lg bg-[#E9515E] px-5 py-2 font-semibold text-white"
                  >
                    Yes
                  </Button>
                  <Button
                    color="primary"
                    onPress={onClose}
                    className="flex h-[38px] min-w-[149px] items-center justify-center rounded-lg bg-secondary-50 px-5 py-2 font-semibold text-shade-200"
                  >
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
