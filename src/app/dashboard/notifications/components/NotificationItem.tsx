"use client";
import { styled } from "@stitches/react";
import Image from "next/image";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import MessageIcon from "../icons/CaMessageIcon";
import { IoPersonOutline } from "react-icons/io5";
import MarkAndDeletePopup from "./MarkAndDeletePopup";
import { motion } from "framer-motion";

type Props = {
  type: string | "message" | "admin" | "contact";
  notification: string;
  subject: string;
  time: string;
};

const notificationItems = {
  admin: <MdOutlineAdminPanelSettings size={24} color="#E32636" />,

  message: <MessageIcon width={"24"} color="#DCA847" />,

  contact: <IoPersonOutline size={24} color="#00974A" />,
};

const NotificationItem: React.FC<Props> = ({
  type,
  notification,
  time,
  subject,
}) => {
  return (
    <Root className="flex items-start justify-between w-full p-4">
      <motion.div
        className="flex gap-4 "
        initial={{ y: 100 }}
        animate={{ y: 0 }}
        transition={{
          duration:"5000ms",
          type: "spring",
          stiffness: 50,
          damping: 10,
        }}>
        <div className="pt-1">{notificationItems[type]}</div>

        <div className="flex flex-col gap-1">
          <div className="flex text-[10px] uppercase gap-2 items-center text-[#0000008F]">
            <div className="font-semibold">{type}</div>
            <div className="w-[3px] h-[3px] bg-[#0000008F] rounded-full">.</div>
            <div className="font-bold">{time}</div>
          </div>
          <div className="flex flex-col items-start text-[16px] gap-1 text-left">
            <div className="font-[400] text-[16px]">{subject}</div>
            <div
              className="text-[#0000008F] max-h-[36px] overflow-hidden
            text-[13px] leading-[18.2px]">
              {notification}
            </div>
          </div>
        </div>
        <div>
          <MarkAndDeletePopup />
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
