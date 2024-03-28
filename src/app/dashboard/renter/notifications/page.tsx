// @ts-nocheck
"use client";
import { useContext, useEffect, useRef, useState } from "react";
import NotificationItem from "./components/NotificationItem";
import NotificationDetailsFull from "./components/NotificationDetails";
import { demoNotifications } from "./components/content/demoNotifications";
import NotificationsSmItem from "./components/NotificationsSmItem";
import { styled } from "@stitches/react";
import { CustomScroll } from "./components/CustomScroll";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";
import { redirect } from "next/navigation";
import CaMarkAsRead from "./components/icons/CaMarkAsRead";
import supabase from "@/lib/utils/supabaseClient";
import { NotificationType } from "./components/types";
import { useAppStore } from "@/store/dashboard/AppStore";
import useNotifications from "./useNotifications";
import NtfSkeleton from "./components/NtfSkeleton";
import { Button } from "@nextui-org/react";

const Page = () => {
  const {
    notifications,
    isLoading,
    currentNotification,
    setCurrentNotification,
  } = useNotifications();

  useEffect(() => {
    const scElement: any = document.querySelector(
      `.sc-${currentNotification?.id}`,
    );
    console.log(scElement);
    if (scElement) {
      scElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentNotification?.id]);

  const ref = useRef(null);

  return (
    <div className={`flex grid-cols-2 gap-5 lg:grid lg:grid-cols-4  `}>
      <div className=" w-full lg:col-span-2 ">
        <div className="mb-1">
          <h2>Notifications</h2>

          {isLoading && <NtfSkeleton />}

          {notifications?.length > 0 && (
            <div className="flex w-full justify-end">
              <Button className="bg-unset flex items-center justify-end gap-2 p-2 text-black hover:bg-[#073b3a12]">
                <div className="flex gap-0">
                  <CaMarkAsRead />
                </div>
                <p className="text-[10px] font-bold">Mark all as read</p>
              </Button>
            </div>
          )}
        </div>
        <CustomScroll className="hidden max-h-[70vh] flex-col gap-6 overflow-y-scroll lg:flex ">
          {user?.notifications?.map(
            // notifications exist on user?
            (r: any, index: number) => (
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
            ),
          )}
        </CustomScroll>
        <div className="lex-col flex w-full flex-col gap-8  overflow-y-scroll lg:hidden ">
          {user?.notifications?.map(
            // notifications exists on user ?
            (r: any, index: number) => (
              <div
                key={index}
                onClick={(e) => {
                  setCurrentNotification(r);
                }}
              >
                <NotificationsSmItem currentNotification={r} />
              </div>
            ),
          )}
        </div>
      </div>
      <div className="col-span-2 mt-14 hidden h-full  w-full  lg:flex">
        <div className="w-full">
          <NotificationDetailsFull currentNotification={currentNotification} />
        </div>
      </div>
    </div>
  );
};

export default Page;
