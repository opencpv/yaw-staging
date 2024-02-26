"use client";
import { styled } from "@stitches/react";
import { Field, Form, Formik } from "formik";
import { NotificationType } from "./types";

type Props = {
  currentNotification?: NotificationType;
};

const NotificationDetailsFull: React.FC<Props> = ({ currentNotification }) => {
  return (
    <div>
      <Root className="flex h-full flex-col justify-start gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-[24px] font-bold text-black 2xl:text-[31px]">
            <p>{currentNotification?.subject}</p>
          </div>
          <div className="flex  gap-2 text-[10px] uppercase leading-[14px] text-[#0000008F]">
            <p className="font-bold">Date</p>
            <p className="font-semibold">{currentNotification?.sent} </p>
            <p className="font-bold">{currentNotification?.time}</p>
          </div>
        </div>
        <div className="text-[16px] font-[400] leading-[22.4px] text-[#00000066]">
          {currentNotification?.content}
        </div>
        {currentNotification?.type == "message" && (
          <button
            className="flex aspect-[199/52] w-full max-w-[199px] items-center justify-center rounded-lg border-[1px] border-[#99B3B2]
          text-[16px] font-semibold text-[#99B3B2] hover:bg-secondary-400 hover:text-white
          "
          >
            Reply message
          </button>
        )}
      </Root>
    </div>
  );
};

const Root = styled("div", {});

export default NotificationDetailsFull;
