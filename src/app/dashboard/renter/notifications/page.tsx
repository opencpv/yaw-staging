"use client";
import { useContext, useEffect, useState } from "react";
import NotificationItem from "../../components/shared/notifications/NotificationItem";
import NotificationDetailsFull from "../../components/shared/notifications/NotificationDetails";
import { demoNotifications } from "../../components/shared/notifications/content/demoNotifications";
import NotificationsSmItem from "../../components/shared/notifications/NotificationsSmItem";
import { styled } from "@stitches/react";
import { CustomScroll } from "../../components/shared/notifications/CustomScroll";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import CaMarkAsRead from "../../components/shared/notifications/icons/CaMarkAsRead";
import supabase from "@/lib/utils/supabaseClient";
import { NotificationType } from "../../components/shared/notifications/types";
import { useAppStore } from "@/store/dashboard/AppStore";

const Page = () => {
  const [currentNotification, setCurrentNotification] =
    useState<NotificationType>();
  // const [notifications, setNotifications] = useState<NotificationType | any>();
  const { user } = useAppStore();

  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    }
  }, []);

  // useEffect(() => {
  //   setCurrentNotification(demoNotifications[0]);
  // }, []);

  return (
    <div className={`flex grid-cols-3 gap-5 lg:grid `}>
      <div className=" lg:col-span-1  ">
        <div className="mb-2 px-3">
          <h2>Notifications</h2>

          <div className="flex w-full justify-end">
            <button className="flex items-center justify-end gap-2 p-2 hover:bg-[#073b3a12]">
              <div className="flex gap-0">
                <CaMarkAsRead />
              </div>
              <p className="text-[10px] font-bold">Mark all as read</p>
            </button>
          </div>
        </div>
        <CustomScroll className="hidden max-h-[70vh] flex-col gap-6 overflow-y-scroll lg:flex ">
          {user?.notifications?.map((r: any, index: number) => (
            <div
              className="w-full"
              key={index}
              onClick={(e) => {
                setCurrentNotification(r);
              }}
            >
              <NotificationItem
                type={r?.type}
                sender={r?.sender_name}
                subject={r?.subject}
                time={r?.sent}
                content={r?.content}
              />
            </div>
          ))}
        </CustomScroll>
        <div className="lex-col flex w-full flex-col gap-8  overflow-y-scroll lg:hidden ">
          {user?.notifications?.map((r: any, index: number) => (
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
      <div className="col-span-2 mt-14 hidden h-full min-h-[50vh] lg:flex">
        <NotificationDetailsFull currentNotification={currentNotification} />
      </div>
    </div>
  );
};

export default Page;
