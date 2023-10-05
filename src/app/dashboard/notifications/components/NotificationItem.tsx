"use client";
import { styled } from "@stitches/react";
import Image from "next/image";
import { MdOutlineAdminPanelSettings } from "react-icons/md";
import MessageIcon from "../icons/MessageIcon";
import { IoPersonOutline } from "react-icons/io5";

type Props = {
  type: string | "message" | "emergency" | "contact";
  notification: string;
  subject: string;
  time: string;
};

const notificationItems = {
  emergency: <MdOutlineAdminPanelSettings size={24} color="#E32636"/>,

  message: <MessageIcon width={"24"} color="#DCA847"/>,

  contact: <IoPersonOutline size={24} color="#00974A"/>,
};

const NotificationItem: React.FC<Props> = ({
  type,
  notification,
  time,
  subject,
}) => {
  return (
    <Root className="flex items-start justify-between w-full p-2">
      <div className="flex gap-3 ">
        <div className="pt-1">{notificationItems[type]}</div>

        <div className="flex flex-col gap-3">
          <div className="flex text-[10px] uppercase gap-3">
            <div className="">{type}</div>
            <div>.</div>
            <div>{time}</div>
          </div>
          <div className="flex flex-col items-start text-[16px] gap-3 text-left">
            <div>{subject}</div>
            <div className="text-[#0000008F]">{notification}</div>
          </div>
        </div>
      </div>
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
