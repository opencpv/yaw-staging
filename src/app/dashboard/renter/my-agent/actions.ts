"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getSchedulePage = (data: {
  matchId: number;
  actionType: string;
  currentPath: string;
}) => {
  cookies().set({
    name: "bma-schedule-info",
    value: `${data.matchId},${data.actionType},${data.currentPath}`,
    path: "/dashboard/renter/my-agent/schedule/",
    maxAge: 20 * 60,
    httpOnly: true,
  });

  redirect(
    `/dashboard/renter/my-agent/schedule?m=814${data.matchId}&t=${data.actionType}`,
  );
};
