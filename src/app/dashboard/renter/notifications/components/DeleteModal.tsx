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
import CaDelete from "../../favourites/components/CaDelete";
import useNotifications from "../useNotifications";

export default function DeleteModal() {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const { deleteNotification } = useNotifications();

  return (
    <>
      <button
        onClick={onOpen}
        className=" bg-unset w-full appearance-none pb-2 pt-1 px-8  text-black hover:bg-primary-300 "
      >
        Delete
      </button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className=" py-3">
                <div className="flex flex-col gap-8">
                  <div className="flex aspect-square max-w-[48px] items-center justify-center rounded-[1.75rem] border-[8px] border-error-50 bg-[#E9ECEF]">
                    <MdInfoOutline size={24} />
                  </div>
                  <div>
                    <p className="text-[1.125rem] font-semibold">Delete</p>
                    <p className="text-[0.875rem] text-[#475467]">
                      Are you sure you want to delete this notification?
                    </p>
                  </div>
                </div>
                <div className="mt-6 flex gap-4 ">
                  <Button
                    onPress={() => {
                      deleteNotification(4);
                      onClose();
                    }}
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