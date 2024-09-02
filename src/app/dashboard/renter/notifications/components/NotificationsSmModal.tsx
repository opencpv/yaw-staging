import React from "react";
import NotificationDetailsFull from "./NotificationDetails";
import NotificationItem from "./NotificationItem";
import { NotificationType } from "../types";
import {
  Dialog,
  DialogContent,
  DialogTrigger,
} from "@/components/__shared/ui/modals/dialog";

type Props = {
  notification: NotificationType;
};

const NotificationsSmModal: React.FC<Props> = ({ notification }) => (
  <Dialog>
    <DialogTrigger asChild>
      <button className="w-full">
        <NotificationItem notification={notification} />
      </button>
    </DialogTrigger>
    <DialogContent className="max-w-7xl p-0">
      <NotificationDetailsFull currentNotification={notification} />
    </DialogContent>
  </Dialog>
);

export default NotificationsSmModal;
