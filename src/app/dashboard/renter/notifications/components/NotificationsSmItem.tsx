import React from "react";
import { NotificationType } from "../types";
import NotificationsSmModal from "./NotificationsSmModal";
import MarkAndDeletePopup from "./MarkAndDeletePopup";

type Props = {
  notification: NotificationType;
};

const NotificationsSmItem: React.FC<Props> = ({ notification }) => {
  return (
    <div className="flex w-full items-start justify-between gap-2 hover:bg-[#E6EBEB]">
      <NotificationsSmModal notification={notification} />
      <div className="pt-5">
        <MarkAndDeletePopup read={notification?.read} />
      </div>
    </div>
  );
};

export default NotificationsSmItem;
