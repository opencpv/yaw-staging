"use client";
import { useEffect, useState } from "react";
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

type Notification = {
  date: string;
  time: string;
  notification: string;
  subject: string;
  type: string;
  sender: string;
};

const Page = () => {
  const [currentNotification, setCurrentNotification] =
    useState<Notification>();
  const [showModal, setShowModal] = useState(false);
  const [notifications, setNotifications] = useState();
  const [notificationsLoading, setNotificationsLoading] = useState();

  useEffect(() => {
    const supabase = createClientComponentClient();
    if (!supabase) {
      redirect("/");
    }
  }, []);

  useEffect(() => {
    setCurrentNotification(demoNotifications[0]);
  }, []);

  const getNotifications = async () => {
    try {
      const {
        data: data,
        error,
        status: dataStatus,
      } = await supabase.from("notifications").select("*");

      if (data) {
        setNotifications(data);
      }

      if (dataStatus === 200) {
        setNotificationsLoading(true);
      }
    } catch (error) {
      console.log(error);
      return error;
    }
  };

  // Scrolls to the bottom on mount
  useEffect(() => {
    getNotifications();
    const notifications = supabase
      .channel("custom-all-channel")
      .on(
        "postgres_changes",
        { event: "*", schema: "public", table: "notifications" },
        (payload) => {
          getNotifications();
        }
      )
      .subscribe();
  }, []);

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
          {notifications?.map((r, index) => (
            <div
              key={index}
              onClick={(e) => {
                setCurrentNotification(r);
              }}>
              <NotificationItem
                type={r?.type}
                sender={r?.sender}
                subject={r?.message}
                time={r?.sent}
                notification={r?.message}
              />
              {/* <NotificationItem
                type={r?.type}
                sender={r?.sender}
                subject={r?.subject}
                time={r?.time}
                notification={r?.notification}
              /> */}
            </div>
          ))}
        </CustomScroll>
        <div className="flex flex-col lg:hidden lex-col gap-8  w-full overflow-y-scroll ">
          {notifications?.map((r, index) => (
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
          currentNotification={currentNotification as Notification}
        />
      </div>
    </div>
  );
};

export default Page;
