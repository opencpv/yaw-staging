import React, { Suspense } from "react";
import MatchDetail from "../../components/schedule/MatchDetail";
import Loader from "@/components/__shared/ui/loader/Loader";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = (props: Props) => {
  const cookieStore = cookies();
  const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  const cookieMatchId = scheduleInfo?.split(",")[0];
  const cookieActionType = scheduleInfo?.split(",")[1];
  const previousPath = scheduleInfo?.split(",")[2];
  const cookieRequestId = scheduleInfo?.split(",")[3];
  const matchId = Number(props.searchParams.m?.slice(3));
  const actionType = props.searchParams.t;
  const requestId = props.searchParams.r?.slice(3);

  console.log(scheduleInfo)
  console.log(matchId, actionType, requestId)

  if (
    cookieMatchId !== String(matchId) ||
    cookieActionType !== actionType ||
    cookieRequestId !== requestId
  ) {
    redirect(previousPath || "/dashboard/renter/my-agent/agent");
  }

  return (
    <main>
      <header className="bg-primary p-10 text-white max-sm:px-5">
        <div className="mx-auto max-w-screen-hd space-y-3">
          <h3>Confirm Your Rental Request</h3>
          <p className="text-base text-shade-50">
            Excellent! We are glad you found a match. Please confirm your
            details below to proceed.
          </p>
        </div>
      </header>
      <Suspense fallback={<Loader position="center" />}>
        <MatchDetail matchId={matchId} actionType={actionType as string} />
      </Suspense>
    </main>
  );
};

export default page;
