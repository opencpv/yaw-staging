"use client";
import { openSans } from "@/app/styles/font";
import { useEffect, useState } from "react";
import NotificationItem from "./components/NotificationItem";
import NotificationDetailsFull from "./components/NotificationDetails";
import { demoNotifications } from "./content/demoNotifications";
import NotificationsSmDialog from "./components/NotificationsSmItem";
import NotificationsSmItem from "./components/NotificationsSmItem";
import { styled } from "@stitches/react";

type Notification = {
  date: string;
  time: string;
  notification: string;
  subject: string;
  type: string;
};

const Page = () => {
  const [currentNotification, setCurrentNotification] =
    useState<Notification>();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    setCurrentNotification(demoNotifications[0]);
  }, []);
  return (
    <div className={`flex lg:grid grid-cols-3 gap-5 `}>
      <div className=" lg:col-span-1  ">
        <div className="mb-5">
          <p className="text-[31px] font font-semibold">Notifications</p>
        </div>
        <CustomScroll className="hidden lg:flex flex-col gap-6 max-h-[70vh] overflow-y-scroll ">
          {demoNotifications.map((r, index) => (
            <div
              key={index}
              onClick={(e) => {
                setCurrentNotification(r);
              }}>
              <NotificationItem
                type={r?.type}
                subject={r?.subject}
                time={r?.time}
                notification={r?.notification}
              />
            </div>
          ))}
        </CustomScroll>
        <div className="flex flex-col lg:hidden lex-col gap-8  w-full overflow-y-scroll ">
          {demoNotifications.map((r, index) => (
            <div
              key={index}
              onClick={(e) => {
                setCurrentNotification(r);
              }}>
              <NotificationsSmItem currentNotification={r} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex col-span-2 h-full min-h-[50vh]">
        <NotificationDetailsFull currentNotification={currentNotification} />
      </div>
    </div>
  );
};

export const CustomScroll = styled("div", {
    "&::-webkit-scrollbar-track": {
      width: "4px",
      backgroundColor: "#F1F1F1",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar-thumb": {
      width: "2px",
      maxHeight: "181px",
      backgroundColor: "#073B3A88",
      borderRadius: "4px",
    },
    "&::-webkit-scrollbar": {
      width: "4px",
      borderRadius: "4px",
      backgroundColor: "#F1F1F1",
    },
  
});

export default Page;
