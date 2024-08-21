"use client";
import { useEffect, useRef } from "react";
import { CustomScroll } from "./components/CustomScroll";
import CaMarkAsRead from "./components/icons/CaMarkAsRead";
import useNotifications from "./useNotifications";
import NtfSkeleton from "./components/NtfSkeleton";
import Button from "@/components/__shared/ui/button/Button";
import dynamic from "next/dynamic";
const NotificationItem = dynamic(() => import("./components/NotificationItem"));
const NotificationDetailsFull = dynamic(
  () => import("./components/NotificationDetails"),
);
const NotificationsSmItem = dynamic(
  () => import("./components/NotificationsSmItem"),
);

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
    if (scElement) {
      scElement.scrollIntoView({ behavior: "smooth" });
    }
  }, [currentNotification?.id]);

  const ref = useRef(null);

  return (
    <div className={`flex grid-cols-2 gap-5 lg:grid lg:grid-cols-4`}>
      <div className="w-full lg:col-span-2">
        <div className="mb-1">
          <h2>Notifications</h2>

          {isLoading && <NtfSkeleton />}

          {notifications?.length > 0 && (
            <div className="flex w-full justify-end">
              <Button className="bg-unset flex items-center justify-end gap-2 p-2 text-black hover:bg-[#11605E12]">
                <div className="flex gap-0">
                  <CaMarkAsRead />
                </div>
                <p className="text-[10px] font-bold">Mark all as read</p>
              </Button>
            </div>
          )}
        </div>
        <CustomScroll className="hidden max-h-[70vh] flex-col gap-6 overflow-y-scroll lg:flex">
          {notifications?.map(
            // notifications exist on user?
            (r: any, index: number) => (
              <div
                className="w-full"
                key={index}
                onClick={(e) => {
                  setCurrentNotification(r);
                }}
              >
                <NotificationItem notification={r} />
              </div>
            ),
          )}
        </CustomScroll>
        <div className="lex-col flex w-full flex-col gap-8 overflow-y-scroll lg:hidden">
          {notifications?.map(
            // notifications exists on user ?
            (r: any, index: number) => (
              <div
                key={index}
                onClick={(e) => {
                  setCurrentNotification(r);
                }}
              >
                <NotificationsSmItem notification={r} />
              </div>
            ),
          )}
        </div>
      </div>
      <div className="col-span-2 mt-14 hidden h-full w-full lg:flex">
        <div className="w-full">
          <NotificationDetailsFull currentNotification={currentNotification} />
        </div>
      </div>
    </div>
  );
};

export default Page;
