import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

const page = ({ children }: { children: React.ReactNode }) => {
  const cookieStore = cookies();
  const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  const matchId = scheduleInfo?.split(",")[0];
  const actionType = scheduleInfo?.split(",")[1];
  const previousPath = scheduleInfo?.split(",")[2];

  if (!matchId || !actionType || !previousPath) {
    redirect("/dashboard/renter/my-agent/agent");
  }
  return <>{children}</>;
};

export default page;
