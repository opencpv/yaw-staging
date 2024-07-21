"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const getMeetingPage = (data: {
  matchId: number;
  actionType: string;
}) => {
  cookies().set({
    name: "bma-schedule-info",
    value: `${data.matchId},${data.actionType}`,
    path: "/",
    maxAge: 20 * 60,
    httpOnly: true,
  });

  redirect(`/dashboard/renter/my-agent/schedule`);
};
