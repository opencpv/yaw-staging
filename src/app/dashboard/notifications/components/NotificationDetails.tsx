"use client";
import { styled } from "@stitches/react";
import { Field, Form, Formik } from "formik";

type Notification = {
  date: string,
  time: string, 
  notification: string, 
  subject: string
  type: string
}

type Props = {
  currentNotification: Notification
};



const NotificationDetailsFull: React.FC<Props> = ({ currentNotification }) => {
  return (
  <div>
      <Root className="flex flex-col h-full justify-start gap-8">
        <div className="flex flex-col gap-4">
          <div className="text-[24px] 2xl:text-[31px] text-black font-bold">
            <p>{currentNotification?.message}</p>
          </div>
          <div className="text-[10px]  leading-[14px] uppercase text-[#0000008F] flex gap-2">
            <p className="font-bold">Date</p> 
            <p className="font-semibold">{currentNotification?.sent} </p>
            <p className="font-bold">{currentNotification?.time}</p>
          </div>
        </div>
        <div className="text-[16px] text-[#00000066] leading-[22.4px] font-[400]">
          {currentNotification?.message}
        </div>
        {
          currentNotification?.type == "message" && 
          <button className="border-[1px] border-[#99B3B2] text-[#99B3B2] w-full max-w-[199px] aspect-[199/52] flex items-center justify-center
          text-[16px] font-semibold rounded-lg hover:bg-[#99B3B2] hover:text-white
          "> 
  
            Reply message
          </button>
        }
      </Root>
  </div>
  );
};

const Root = styled("div", {});

export default NotificationDetailsFull;
