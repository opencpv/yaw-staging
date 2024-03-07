"use client";
import { useContext, useEffect, useState } from "react";
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
import { useProtectedRoute } from "@/lib/custom-hooks/useProtectedRoute";
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
    const scElement : any = document.querySelector(`.sc-${currentNotification?.id}`);
    console.log(scElement)
    if (scElement) {
      scElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentNotification?.id]);

  return (
    <div className={`flex grid-cols-2 lg:grid-cols-4 gap-5 lg:grid  `}>
      <div className=" lg:col-span-2 w-full ">
        <div className="mb-1">
          <h2>Notifications</h2>

          {isLoading && <NtfSkeleton />}

          {notifications?.length > 0 && (
            <div className="flex w-full justify-end">
              <Button className="flex items-center justify-end gap-2 bg-unset p-2 hover:bg-[#073b3a12] text-black">
                <div className="flex gap-0">
                  <CaMarkAsRead />
                </div>
                <p className="text-[10px] font-bold">Mark all as read</p>
              </Button>
            </div>
          )}
        </div>
        <CustomScroll className="max-h-[80vh] hidden flex-col gap-4 2xl:gap-6 overflow-y-scroll lg:flex ">
          {notifications?.map((r: any, index: number) => (
            <div
              className={`w-full sc-${index}`}
              key={index}
            >
              <NotificationItem
                selected={currentNotification?.id == r?.id}
                notification={r}
           
              />
            </div>
          ))}
        </CustomScroll>
        <div className="lex-col flex w-full flex-col gap-8  overflow-y-scroll lg:hidden ">
          {notifications?.map((r: any, index: number) => (
            <div
              className="w-full"
              key={index}
         
            >
              <NotificationsSmItem currentNotification={r} />
            </div>
          ))}
        </div>
      </div>
      <div className="col-span-2 mt-14 hidden h-full  lg:flex  w-full">
        <div className="w-full">
          <NotificationDetailsFull
          
          currentNotification={currentNotification} />
        </div>
      </div>
    </div>
  );
};

export default Page;
