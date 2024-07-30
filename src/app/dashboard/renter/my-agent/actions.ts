"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getConfirmationPage = (data: {
  matchId: number;
  actionType: string;
  currentPath: string;
  requestId: number;
}) => {
  cookies().set({
    name: "bma-schedule-info",
    value: `${data.matchId},${data.actionType},${data.currentPath},${data.requestId}`,
    path: "/dashboard/renter/my-agent/schedule/",
    maxAge: 20 * 60,
    httpOnly: true,
  });

  redirect(
    `/dashboard/renter/my-agent/schedule/confirm?m=814${data.matchId}&t=${data.actionType}&r=106${data.requestId}`,
  );
};

export const deleteScheduleCookie = (previousPath: string) => {
  cookies().delete("bma-schedule-info");

  redirect(previousPath || `/dashboard/renter/my-agent/agent`);
};
