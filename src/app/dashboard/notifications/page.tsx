"use client";
import { useEffect, useState } from "react";
import NotificationItem from "./components/NotificationItem";
import NotificationDetailsFull from "./components/NotificationDetails";
import { demoNotifications } from "./content/demoNotifications";
import NotificationsSmItem from "./components/NotificationsSmItem";
import { styled } from "@stitches/react";
import { CustomScroll } from "./components/CustomScroll";

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
              }}
            >
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
              }}
            >
              <NotificationsSmItem currentNotification={r} />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex col-span-2 h-full min-h-[50vh]">
        <NotificationDetailsFull
          currentNotification={currentNotification as Notification}
        />
      </div>
    </div>
  );
};

export default Page;
