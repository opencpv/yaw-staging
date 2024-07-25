"use server";

import { cookies } from "next/headers";

export const saveInfoToCookie = (data: {
  matchId: number;
  actionType: string;
  currentPath: string;
}) => {
  cookies().set({
    name: "bma-schedule-info",
    value: `${data.matchId},${data.actionType},${data.currentPath}`,
    path: "/dashboard/renter/my-agent/schedule/success",
    maxAge: 20 * 60,
    httpOnly: true,
  });

};
