import React, { useContext, useState } from "react";
import * as Popover from "@radix-ui/react-popover";
import { styled, keyframes } from "@stitches/react";
import { violet, mauve, blackA } from "@radix-ui/colors";
import { MixerHorizontalIcon, Cross2Icon } from "@radix-ui/react-icons";
import { IoMdNotifications } from "react-icons/io";
import NotificationItem from "./NotificationItem";
import { demoNotifications } from "./content/demoNotifications";
import CaMarkAsRead from "./icons/CaMarkAsRead";
import { CustomScroll } from "./CustomScroll";

import { useAppStore } from "@/store/dashboard/AppStore";
import { useNotificationStore } from "@/store/dashboard/notificationStore";

const NotificationsPopover = () => {
  const [currentNotification, setCurrentNotification] = useState("");
  const notifications = useNotificationStore((state) => state.notifications);

  return (
    <Popover.Root>
      <Popover.Trigger asChild>
        <button className="relative flex aspect-square min-h-[52px] w-full min-w-[52px] items-center justify-center">
          <div
            className="absolute right-[0px] top-0
          flex h-[26px] w-[26px] items-center justify-center rounded-full
          bg-[#B71851] text-[14px] text-[#fff]"
          >
            3
          </div>
          <IconButton aria-label="Update dimensions">
            <IoMdNotifications color="white" size="28" />
          </IconButton>
        </button>
      </Popover.Trigger>
      <Popover.Portal>
        <PopoverContent sideOffset={5}>
          <div className="flex items-center justify-between ">
            <p className="text-[25px] font-bold ">Notifications</p>
            <p className="text-[10px] font-bold text-[#DDB771]">See All</p>
          </div>

          <div className="flex w-full justify-end">
            <button className="flex items-center justify-end gap-2 p-2 hover:bg-[#073b3a12]">
              <div className="flex gap-0">
                <CaMarkAsRead />
              </div>
              <p className="text-[10px] font-bold">Mark all as read</p>
            </button>
          </div>
          <CustomScroll className="flex max-h-[60vh] flex-col gap-8 overflow-y-scroll">
            {notifications?.map((r: any, index: number) => (
              <div key={index} onClick={(e) => setCurrentNotification(r?.name)}>
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
          <PopoverClose aria-label="Close">
            <Cross2Icon />
          </PopoverClose>
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
  "&:focus": {
    boxShadow: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px, hsl(206 22% 7% / 20%) 0px 10px 20px -15px, 0 0 0 2px ${violet.violet7}`,
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
  color: violet.violet11,
  position: "absolute",
  top: 5,
  right: 5,

  "&:hover": { backgroundColor: violet.violet4 },
  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet7}` },
});

const Flex = styled("div", { display: "flex" });

const IconButton = styled("button", {});
const Fieldset = styled("fieldset", {
  all: "unset",
  display: "flex",
  gap: 20,
  alignItems: "center",
});

const Label = styled("label", {
  fontSize: 13,
  color: violet.violet11,
  width: 75,
});

const Input = styled("input", {
  all: "unset",
  width: "100%",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  flex: "1",
  borderRadius: 4,
  padding: "0 10px",
  fontSize: 13,
  lineHeight: 1,
  color: violet.violet11,
  boxShadow: `0 0 0 1px ${violet.violet7}`,
  height: 25,

  "&:focus": { boxShadow: `0 0 0 2px ${violet.violet8}` },
});

const Text = styled("p", {
  margin: 0,
  color: mauve.mauve12,
  fontSize: 15,
  lineHeight: "19px",
  fontWeight: 500,
});

export default NotificationsPopover;
