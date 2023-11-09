"use client";
import { useContext, useEffect, useState } from "react";
import NotificationItem from "./components/NotificationItem";
import NotificationDetailsFull from "./components/NotificationDetails";
import { demoNotifications } from "./content/demoNotifications";
import NotificationsSmItem from "./components/NotificationsSmItem";
import { styled } from "@stitches/react";
import { CustomScroll } from "./components/CustomScroll";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import CaMarkAsRead from "./icons/CaMarkAsRead";
import supabase from "@/lib/utils/supabaseClient";
import { NotificationType } from "./components/types";
import { AppContext } from "../layout";


const Page = () => {
  const [currentNotification, setCurrentNotification] =
    useState<NotificationType>();
  // const [notifications, setNotifications] = useState<NotificationType | any>();
  const { notifications } = useContext(AppContext)?.user

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
    <div className={`flex lg:grid grid-cols-3 gap-5 `}>
      <div className=" lg:col-span-1  ">
        <div className="mb-2 px-3">
          <p className="text-[24px] 2xl:text-[31px] font font-semibold">
            Notifications
          </p>

          <div className="w-full flex justify-end">
            <button className="flex justify-end items-center gap-2 hover:bg-[#073b3a12] p-2">
              <div className="flex gap-0">
                <CaMarkAsRead />
              </div>
              <p className="text-[10px] font-bold">Mark all as read</p>
            </button>
          </div>
        </div>
        <CustomScroll className="hidden lg:flex flex-col gap-6 max-h-[70vh] overflow-y-scroll ">
          {notifications?.map((r : any, index : number) => (
            <div
              key={index}
              onClick={(e) => {
                setCurrentNotification(r);
              }}>
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
        <div className="flex flex-col lg:hidden lex-col gap-8  w-full overflow-y-scroll ">
          {notifications?.map((r : any, index: number) => (
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
      <div className="hidden lg:flex col-span-2 h-full min-h-[50vh] mt-14">
        <NotificationDetailsFull
          currentNotification={currentNotification}
        />
      </div>
    </div>
  );
};

export default Page;
