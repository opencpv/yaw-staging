import React, { useState } from "react";
import { styled, keyframes } from "@stitches/react";
import NotificationItem from "./NotificationItem";
import CaMarkAsRead from "./icons/CaMarkAsRead";
import { useNotificationStore } from "@/store/dashboard/notificationStore";
import useNotifications from "@/app/dashboard/renter/notifications/useNotifications";
import NtfSkeleton from "@/app/dashboard/renter/notifications/components/NtfSkeleton";
import { useRouter } from "next/navigation";
import Button from "@/components/__shared/ui/button/Button";
import { GoBellFill } from "react-icons/go";
import dynamic from "next/dynamic";
import {
  PopoverContent,
  PopoverTrigger,
} from "@/components/__shared/ui/popover";
import { PopoverArrow } from "@radix-ui/react-popover";

const Popover = dynamic(() =>
  import("@/components/__shared/ui/popover").then((mod) => mod.Popover),
);

const NotificationsPopover = () => {
  const { unreadNotifications, unreadIsLoading } = useNotifications();
  const { setCurrentNotification } = useNotificationStore();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover onOpenChange={setOpen} open={open}>
      <PopoverTrigger asChild>
        <button className="relative flex aspect-square min-h-[52px] w-full min-w-[52px] items-center justify-center">
          <div className="absolute right-1 top-2 grid size-6 place-items-center rounded-full bg-[#B71851] text-xs font-semibold text-white">
            {unreadNotifications?.length}
          </div>
          <IconButton aria-label="Update dimensions">
            <GoBellFill color="white" size="28" />
          </IconButton>
        </button>
      </PopoverTrigger>

      <PopoverContent
        sideOffset={5}
        className="w-[90vw] md:w-fit lg:min-w-[400px]"
      >
        <div className="flex items-center justify-between">
          <p className="text-20 2xl:text-25 font-semibold">Notifications</p>
          <p
            className="cursor-pointer text-[10px] font-bold text-accent"
            onClick={() => {
              router.push("/dashboard/renter/notifications");
              setOpen(false);
            }}
          >
            See All
          </p>
        </div>

        {unreadIsLoading && <NtfSkeleton />}

        {unreadNotifications && (
          <div className="mb-2 flex w-full justify-end">
            <Button className="bg-unset focus:!unset active:unset flex items-center justify-end gap-2 p-2 text-black hover:bg-[#11605E12]">
              <div className="flex gap-0">
                <CaMarkAsRead />
              </div>
              <p className="text-[10px] font-bold">Mark all as read</p>
            </Button>
          </div>
        )}
        <div className="scrollbar-hide flex max-h-[60vh] flex-col gap-5 overflow-y-scroll 2xl:gap-8">
          {unreadNotifications?.map((r: any, index: number) => (
            <div
              key={index}
              onClick={(e) => {
                router.push("/dashboard/renter/notifications");
                setCurrentNotification(r);
                setOpen(false);
              }}
            >
              <NotificationItem popover={true} notification={r} />
            </div>
          ))}
        </div>
        {/* <PopoverClose aria-label="Close">
            <Cross2Icon />
          </PopoverClose> */}
        <PopoverArrow />
      </PopoverContent>
    </Popover>
  );
};

const slideUpAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideRightAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(-2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

const slideDownAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateY(-2px)" },
  "100%": { opacity: 1, transform: "translateY(0)" },
});

const slideLeftAndFade = keyframes({
  "0%": { opacity: 0, transform: "translateX(2px)" },
  "100%": { opacity: 1, transform: "translateX(0)" },
});

//const PopoverContent = styled(Popover.Content, {
//  borderRadius: 17,
//  padding: 20,
//  backgroundColor: "white",
//  width: "100%%",
//  maxWidth: "540px",
//  boxShadow:
//    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
//  animationDuration: "400ms",
//  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
//  willChange: "transform, opacity",
//  '&[data-state="open"]': {
//    '&[data-side="top"]': { animationName: slideDownAndFade },
//    '&[data-side="right"]': { animationName: slideLeftAndFade },
//    '&[data-side="bottom"]': { animationName: slideUpAndFade },
//    '&[data-side="left"]': { animationName: slideRightAndFade },
//  },
//
//  "@madia screen and (max-width: 1024px)": {
//    width: "75%",
//  },
//});
//
//const PopoverArrow = styled(Popover.Arrow, {
//  fill: "white",
//});
//
//const PopoverClose = styled(Popover.Close, {
//  all: "unset",
//  fontFamily: "inherit",
//  borderRadius: "100%",
//  height: 25,
//  width: 25,
//  display: "inline-flex",
//  alignItems: "center",
//  justifyContent: "center",
//  // color: violet.violet11,
//  position: "absolute",
//  top: 5,
//  right: 5,
//});
//
const IconButton = styled("div", {});

export default NotificationsPopover;
