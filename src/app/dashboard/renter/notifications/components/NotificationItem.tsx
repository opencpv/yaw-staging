"use client";
import { styled } from "@stitches/react";
import Image from "next/image";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import MessageIcon from "./icons/CaMessageIcon";
import { IoPersonOutline } from "react-icons/io5";
import MarkAndDeletePopup from "./MarkAndDeletePopup";
import { motion } from "framer-motion";
import { ReactHTMLElement, useRef } from "react";
import moment from "moment";
import useNotifications from "../useNotifications";
import { NotificationType } from "./types";

type Props = {
  notification: NotificationType;
  selected?: boolean;
  popover?: boolean;
  containerRef?: React.RefObject<HTMLElement>; // Reference to the container
};

const notificationItems: any = {
  admin: <MdOutlineAdminPanelSettings size={24} color="#E32636" />,

  message: <MessageIcon width={"24"} color="#DCA847" />,

  alert: <IoPersonOutline size={24} color="#00974A" />,
};

const NotificationItem: React.FC<Props> = ({
  notification,
  selected,
  popover,
  containerRef,
}) => {
  const { setCurrentNotification } = useNotifications();
  return (
    <Root
      className={`flex w-full items-start justify-between `}
      onClick={(e) => {
        setCurrentNotification(notification);
      }}
    >
      <motion.div
        className={`flex w-full justify-between gap-4  ${
          selected && "bg-[#E6EBEB]"
        } p-4 `}
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration: "5000ms",
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}
      >
        <div className="flex gap-4">
          <div className={`pt-1 ${notification?.read && "opacity-50"}`}>
            {notificationItems[notification?.type]}
          </div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[10px] uppercase text-[#0000008F]">
              <div className={`font-semibold`}>
                {notification?.type == "message" && notification?.type}
                {notification?.type == "admin" && notification?.type}
                {notification?.type == "alert" && notification?.sender_name}
              </div>
              <div className="h-[3px] w-[3px] rounded-full bg-[#0000008F]">
                .
              </div>
              <div className="font-bold">
                {moment(notification?.time).fromNow()}
              </div>
            </div>
            <div className="flex flex-col items-start gap-1 text-left text-[16px]">
              <div
                className={`text-[16px] font-[400] text-black ${
                  !notification?.read && !popover && "font-bold"
                }`}
              >
                {notification?.subject}
              </div>
              <div
                className="max-h-[36px] overflow-hidden text-[13px]
              leading-[18.2px] text-[#0000008F]"
              >
                {notification?.content}
              </div>
            </div>
          </div>
        </div>
        <div className="hidden items-start lg:flex">
          <MarkAndDeletePopup
            containerRef={containerRef}
            read={notification?.read}
          />
        </div>
      </motion.div>
    </Root>
  );
};

const Root = styled("button", {
  borderBottom: "1px solid rgba(0, 0, 0, 0.10)",
  minHeight: "69px",

  "&:hover": {
    background: "var(--primary-primary-50, #E6EBEB)",
  },
});
export default NotificationItem;
