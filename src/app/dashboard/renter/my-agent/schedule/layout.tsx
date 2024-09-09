import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  children: React.ReactNode;
};

const page = ({ children }: Props) => {
  const cookieStore = cookies();
  const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  const matchId = scheduleInfo?.split(",")[0];
  const actionType = scheduleInfo?.split(",")[1];
  const previousPath = scheduleInfo?.split(",")[2];
  const requestId = scheduleInfo?.split(",")[3];
  const renterId = scheduleInfo?.split(",")[4];

  if (
    !matchId ||
    !actionType ||
    !previousPath ||
    !requestId ||
    !renterId
  ) {
    redirect(previousPath || "/dashboard/renter/my-agent/agent");
  }
  return <>{children}</>;
};

export default page;
