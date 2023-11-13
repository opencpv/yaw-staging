import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import MessageIcon from "../icons/CaMessageIcon";
import { IoPersonOutline } from "react-icons/io5";
import NotificationDetailsFull from "./NotificationDetails";
import NotificationItem from "./NotificationItem";
import { NotificationType } from "./types";

type Props = {
  currentNotification: NotificationType;
};

const NotificationsSmItem: React.FC<Props> = ({ currentNotification }) => (
  <Dialog.Root>
    <Dialog.Trigger asChild>
      <button className="">
        <NotificationItem
          type={currentNotification?.type}
          subject={currentNotification?.message}
          time={currentNotification?.sent}
          notification={currentNotification?.message}
        />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="bg-[#000000AD] data-[state=open]:animate-overlayShow fixed inset-0" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed top-[50%] left-[50%]  max-h-[85vh] overflow-y-scroll w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <NotificationDetailsFull currentNotification={currentNotification} />
        <Dialog.Close asChild>
          <button
            className="text-violet11 hover:bg-violet4 focus:shadow-violet7 absolute top-[10px] right-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full focus:shadow-[0_0_0_2px] focus:outline-none"
            aria-label="Close"
          >
            <Cross2Icon />
          </button>
        </Dialog.Close>
      </Dialog.Content>
    </Dialog.Portal>
  </Dialog.Root>
);

export default NotificationsSmItem;
