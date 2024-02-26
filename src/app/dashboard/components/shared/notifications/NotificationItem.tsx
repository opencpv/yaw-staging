"use client";
import { styled } from "@stitches/react";
import Image from "next/image";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import MessageIcon from "./icons/CaMessageIcon";
import { IoPersonOutline } from "react-icons/io5";
import MarkAndDeletePopup from "./MarkAndDeletePopup";
import { motion } from "framer-motion";
import { ReactHTMLElement } from "react";

type Props = {
  type: "message" | "admin" | "alert";
  content?: string;
  subject?: string;
  time?: string;
  sender?: string;
};

const notificationItems: {
  admin: React.JSX.Element;
  message: React.JSX.Element;
  alert: React.JSX.Element;
} = {
  admin: <MdOutlineAdminPanelSettings size={24} color="#E32636" />,

  message: <MessageIcon width={"24"} color="#DCA847" />,

  alert: <IoPersonOutline size={24} color="#00974A" />,
};

const NotificationItem: React.FC<Props> = ({
  type,
  content,
  time,
  subject,
  sender,
}) => {
  return (
    <Root className="flex w-full items-start justify-between p-4">
      <motion.div
        className="flex w-full justify-between gap-4"
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
          <div className="pt-1">{notificationItems[type]}</div>

          <div className="flex flex-col gap-1">
            <div className="flex items-center gap-2 text-[10px] uppercase text-[#0000008F]">
              <div className="font-semibold">
                {type == "message" && type}
                {type == "admin" && type}
                {type == "alert" && sender}
              </div>
              <div className="h-[3px] w-[3px] rounded-full bg-[#0000008F]">
                .
              </div>
              <div className="font-bold">{time}</div>
            </div>
            <div className="flex flex-col items-start gap-1 text-left text-[16px]">
              <div className="text-[16px] font-[400] text-black">{subject}</div>
              <div
                className="max-h-[36px] overflow-hidden text-[13px]
              leading-[18.2px] text-[#0000008F]"
              >
                {content}
              </div>
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
