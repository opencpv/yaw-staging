"use client";
import { openSans } from "@/app/styles/font";
import { useEffect, useState } from "react";
import NotificationItem from "./components/NotificationItem";
import NotificationDetailsFull from "./components/NotificationDetails";
import { demoNotifications } from "./content/demoNotifications";
import NotificationsSmDialog from "./components/NotificationsModal";
import NotificationsSmItem from "./components/NotificationsModal";

const Page = () => {
  const [currentNotification, setCurrentNotification] = useState();
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {}, []);
  return (
    <div className={`flex lg:grid grid-cols-3 gap-5 ${openSans.className}`}>
      <div className=" lg:col-span-1  ">
        <div className="mb-5">
          <p className="text-[31px] font font-semibold">Notifications</p>
        </div>
        <div className="hidden lg:flex flex-col gap-8 max-h-[60vh] overflow-y-scroll">
          {demoNotifications.map((r, index) => (
            <div
              key={index}
              onClick={(e) => {
                setShowModal(true);
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
        </div>
        <div className="flex flex-col lg:hidden lex-col gap-8 max-h-[60vh] overflow-y-scroll">
          {demoNotifications.map((r, index) => (
            <div
              key={index}
              onClick={(e) => {
                setShowModal(true);
                setCurrentNotification(r);
              }}>
              <NotificationsSmItem
                type={r?.type}
                subject={r?.subject}
                time={r?.time}
                notification={r?.notification}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="hidden lg:flex col-span-2 h-full min-h-[50vh]">
        <NotificationDetailsFull name={currentNotification?.name} />
      </div>
    </div>
  );
};

export default Page;
