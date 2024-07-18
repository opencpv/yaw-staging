"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getMeetingPage = (data: {
  requestId: number;
  propertyId: number;
  actionType: string;
}) => {
  console.log("Actions", data.requestId, data.propertyId);
  cookies().set({
    name: "bma-schedule-info",
    value: `${data.requestId};${data.propertyId};${data.actionType}`,
    //path: "/b2b/data",
    maxAge: 20 * 60,
  });

  redirect(`/dashboard/renter/my-agent/schedule`);
};
