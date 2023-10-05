"use client";
import { styled } from "@stitches/react";
import { Field, Form, Formik } from "formik";

type Props = {
  name: string;
};

export const Data = {
  subject: "Emergency Maintenace Required",
  date: "25 september 2023 3 min ago",
  notification:
    "Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.  Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.Urgent! There is an issue in [Property Name] that requires immediate attention. Please contact us as soon as possible.",
};

const NotificationDetailsFull: React.FC<Props> = ({ name }) => {
  return (
    <Root className="flex flex-col h-full justify-start gap-5">
      <div className="flex flex-col gap-3">
        <div className="text-[31px] font-bold">
          <p>{Data["subject"]}</p>
        </div>
        <div className="text-[10px] font-semibold leading-[14px] uppercase">
          Date : {Data["date"]}
        </div>
      </div>
      <div className="text-[16px] text-[#00000066] leading-[22.4px]">
        {Data["notification"]}
      </div>
    </Root>
  );
};

const Root = styled("div", {});

export default NotificationDetailsFull;
