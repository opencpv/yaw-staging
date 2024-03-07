"use client";
import { styled } from "@stitches/react";
import { Field, Form, Formik } from "formik";
import { NotificationType } from "./types";
import NtfDetailsSkeleton from "@/app/dashboard/renter/notifications/components/NtfDetailsSkeleton";
import moment from "moment";
import { CustomScroll } from "./CustomScroll";

type Props = {
  currentNotification?: NotificationType
};

const NotificationDetailsFull: React.FC<Props> = ({ currentNotification }) => {
  return (
    <CustomScroll className="w-full max-h-[80vh] overflow-y-scroll">
      {currentNotification ? (
        <Root className="flex h-full flex-col justify-start gap-4 2xl:gap-8 pr-1">
          <div className="flex flex-col gap-2 2xl:gap-4">
            <div className=" text-black font-bold capitalize ">
              <h2>{currentNotification?.subject}</h2>
            </div>
            <div className="flex  gap-2 text-[10px] uppercase 2xl:leading-[14px] text-[#0000008F]">
              <p className="font-bold">Date</p>
              <p className="font-semibold">{moment(currentNotification?.sent).fromNow()} </p>
              <p className="font-bold">{moment(currentNotification?.time).fromNow()}</p>
            </div>
          </div>
          <div className="text-[16px] font-[400] 2xl:leading-[22.4px] text-[#00000066]">
            {currentNotification?.content}
          </div>
          {currentNotification?.type == "message" && (
            <button
              className="flex px-4 py-3.5 w-full max-w-[199px] items-center justify-center rounded-lg border-[1px] border-[#99B3B2] h-[52px]
          text-[16px] font-semibold text-[#99B3B2] hover:bg-secondary-400 hover:text-white
          "
            >
              Reply message
            </button>
          )}
        </Root>
      ) : (
        <NtfDetailsSkeleton />
      )}
    </CustomScroll>
  );
};

const Root = styled("div", {});

export default NotificationDetailsFull;
