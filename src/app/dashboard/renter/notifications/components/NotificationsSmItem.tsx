import React, { useRef } from "react";
import * as Dialog from "@radix-ui/react-dialog";
import { Cross2Icon } from "@radix-ui/react-icons";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import MessageIcon from "./icons/CaMessageIcon";
import { IoPersonOutline } from "react-icons/io5";
import NotificationDetailsFull from "./NotificationDetails";
import NotificationItem from "./NotificationItem";
import { NotificationType } from "./types";
import NotificationsSmModal from "./NotificationsSmModal";
import MarkAndDeletePopup from "./MarkAndDeletePopup";

type Props = {
  notification: NotificationType;
 
};

const NotificationsSmItem: React.FC<Props> = ({ notification }) => {
  return (
    <div className="flex w-full items-start justify-between gap-2 hover:bg-[#E6EBEB]">
      <NotificationsSmModal currentNotification={notification} />
      <div className="pt-5 ">
        <MarkAndDeletePopup read={notification?.read} />
      </div>
    </div>
  );
};

export default NotificationsSmItem;
