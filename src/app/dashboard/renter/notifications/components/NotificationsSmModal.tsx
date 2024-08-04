import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";

import NotificationDetailsFull from "./NotificationDetails";
import NotificationItem from "./NotificationItem";
import { NotificationType } from "./types";
import ModalCloseIcon from "@/components/__shared/ui/modals/ModalCloseIcon";
import CaNotificationsModalCloseIcon from "./icons/CaNotificationsModalClose";

type Props = {
  notification: NotificationType;
};

const NotificationsSmModal: React.FC<Props> = ({ notification }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="w-full ">
        <NotificationItem notification={notification} />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-[#000000AD]" />
      <Dialog.Content className="data-[state=open]:animate-contentShow shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl (206_22%_7%_/_20%)_0px_10px_20px_-15px] fixed  left-[50%]  top-[50%] z-[6100] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-hidden rounded-[6px] bg-white px-4 pb-4 pt-12 focus:outline-none">
        <NotificationDetailsFull currentNotification={notification} />
        <Dialog.Close asChild className="w-fit">
          <button
            className="absolute right-[6px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full  "
            aria-label="Close"
          >
            <CaNotificationsModalCloseIcon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default NotificationsSmModal;
