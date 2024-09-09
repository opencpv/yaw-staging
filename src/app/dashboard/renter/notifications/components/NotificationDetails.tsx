"use client";
import { styled } from "@stitches/react";
import { NotificationType } from "../types";
import NtfDetailsSkeleton from "@/app/dashboard/renter/notifications/components/NtfDetailsSkeleton";
import moment from "moment";
import { CustomScroll } from "./CustomScroll";

type Props = {
  currentNotification?: NotificationType;
};

const NotificationDetailsFull: React.FC<Props> = ({ currentNotification }) => {
  return (
    <CustomScroll className="max-h-[80vh] w-full overflow-y-scroll">
      {currentNotification ? (
        <Root className="flex h-full flex-col justify-start gap-4 pr-1 2xl:gap-8">
          <div className="flex flex-col gap-2 2xl:gap-4">
            <div className="font-bold capitalize text-black">
              <h2 className="font-bold">{currentNotification?.subject}</h2>
            </div>
            <div className="flex gap-2 text-[10px] uppercase text-[#0000008F] 2xl:leading-[14px]">
              <span className="font-bold">Date</span>
              <span className="font-semibold">
                {moment(currentNotification?.sent).format("DD MMMM, YYYY")}{" "}
              </span>
              <span className="font-bold">
                {moment(currentNotification?.created_at).fromNow()}
              </span>
            </div>
          </div>
          <div className="text-[16px] font-[400] text-[#00000066] 2xl:leading-[22.4px]">
            {currentNotification?.content}
          </div>
          {currentNotification?.type == "message" && (
            <button className="flex h-[52px] w-full max-w-[199px] items-center justify-center rounded-lg border-[1px] border-[#99B3B2] px-4 py-3.5 text-[16px] font-semibold text-[#99B3B2] hover:bg-secondary-400 hover:text-white">
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
