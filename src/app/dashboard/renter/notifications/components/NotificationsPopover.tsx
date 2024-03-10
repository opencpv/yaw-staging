import React, { useContext, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { styled, keyframes } from "@stitches/react";

import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { IoMdNotifications } from "react-icons/io";
import NotificationItem from "./NotificationItem";
import { demoNotifications } from "./content/demoNotifications";
import CaMarkAsRead from "./icons/CaMarkAsRead";
import { CustomScroll } from "./CustomScroll";
import { useNotificationStore } from "@/store/dashboard/notificationStore";
import useNotifications from "@/app/dashboard/renter/notifications/useNotifications";
import NtfSkeleton from "@/app/dashboard/renter/notifications/components/NtfSkeleton";
import { useRouter } from "next/navigation";
import { Button } from "@nextui-org/react";

const NotificationsPopover = () => {
  const { unreadNotifications, unreadIsLoading } = useNotifications();
  const { setCurrentNotification } = useNotificationStore();
  const router = useRouter();
  const [open, setOpen] = useState<boolean>(false);

  return (
    <Popover.Root onOpenChange={setOpen} open={open}>
      <Popover.Trigger asChild>
        <button className="relative flex aspect-square min-h-[52px] w-full min-w-[52px] items-center justify-center">
          <div
            className="absolute right-[0px] top-0
          flex h-[26px] w-[26px] items-center justify-center rounded-full
          bg-[#B71851] text-[14px] text-[#fff]"
          >
            {unreadNotifications?.length}
          </div>
          <IconButton aria-label="Update dimensions">
            <IoMdNotifications color="white" size="28" />
          </IconButton>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent
          sideOffset={5}
          className="z-[99999] w-[90vw] md:w-fit lg:min-w-[400px] bg-[#fefefe] "
        >
          <div className="flex items-center justify-between ">
            <p className="text-20 font-semibold 2xl:text-25 ">Notifications</p>
            <p
              className="cursor-pointer text-[10px] font-bold text-[#DDB771]"
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
            <div className="flex w-full justify-end mb-2">
              <Button className="bg-unset focus:!unset active:unset flex items-center justify-end gap-2 p-2 text-black hover:bg-[#073b3a12]">
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
      </Popover.Portal>
    </Popover.Root>
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

const PopoverContent = styled(Popover.Content, {
  borderRadius: 17,
  padding: 20,
  backgroundColor: "white",
  width: "100%%",
  maxWidth: "540px",
  boxShadow:
    "hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px",
  animationDuration: "400ms",
  animationTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
  willChange: "transform, opacity",
  '&[data-state="open"]': {
    '&[data-side="top"]': { animationName: slideDownAndFade },
    '&[data-side="right"]': { animationName: slideLeftAndFade },
    '&[data-side="bottom"]': { animationName: slideUpAndFade },
    '&[data-side="left"]': { animationName: slideRightAndFade },
  },

  "@madia screen and (max-width: 1024px)": {
    width: "75%",
  },
});

const PopoverArrow = styled(Popover.Arrow, {
  fill: "white",
});

const PopoverClose = styled(Popover.Close, {
  all: "unset",
  fontFamily: "inherit",
  borderRadius: "100%",
  height: 25,
  width: 25,
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  // color: violet.violet11,
  position: "absolute",
  top: 5,
  right: 5,
});

const IconButton = styled("button", {});

export default NotificationsPopover;
