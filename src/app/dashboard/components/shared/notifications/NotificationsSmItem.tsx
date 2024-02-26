import React from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import MessageIcon from "./icons/CaMessageIcon";
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
          sender={currentNotification?.sender_name}
          type={currentNotification?.type}
          subject={currentNotification?.subject}
          time={currentNotification?.sent}
          content={currentNotification?.content}
        />
      </button>
    </Dialog.Trigger>
    <Dialog.Portal>
      <Dialog.Overlay className="data-[state=open]:animate-overlayShow fixed inset-0 bg-[#000000AD]" />
      <Dialog.Content className="data-[state=open]:animate-contentShow fixed left-[50%] top-[50%]  max-h-[85vh] w-[90vw] max-w-[450px] translate-x-[-50%] translate-y-[-50%] overflow-y-scroll rounded-[6px] bg-white p-[25px] shadow-[hsl(206_22%_7%_/_35%)_0px_10px_38px_-10px,_hsl(206_22%_7%_/_20%)_0px_10px_20px_-15px] focus:outline-none">
        <NotificationDetailsFull currentNotification={currentNotification} />
        <Dialog.Close asChild>
          <button
            className="absolute right-[10px] top-[10px] inline-flex h-[25px] w-[25px] appearance-none items-center justify-center rounded-full text-violet11 hover:bg-violet4 focus:shadow-[0_0_0_2px] focus:shadow-violet7 focus:outline-none"
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
