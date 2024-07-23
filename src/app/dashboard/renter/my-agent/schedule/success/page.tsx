import Loader from "@/components/__shared/ui/loader/Loader";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
}

const page = async ({ searchParams }: Props) => {
  const cookieStore = cookies();
  const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  const matchId = scheduleInfo?.split(",")[0];
  const actionType = scheduleInfo?.split(",")[1];
  
  //if (!matchId || !actionType) {
  //  redirect("/dashboard/renter/my-agent/agent"); 
  //}
  //
  //const {data, error} = await supabase.from("agent_request_matches").upsert({
  //      id: Number(matchId) || 0,
  //      meeting_id: searchParams?.entity.id,
  //      start_date: body.entity.start,
  //      end_date: body.entity.end,
  //      cancel_url: body.entity.attendees[0].cancel_url,
  //      reschedule_url: body.entity.attendees[0].reschedule_url,
  //      type: actionType,
  //    });


  return (
    <main className="grid min-h-screen place-items-center">
      <section className="flex flex-col items-center gap-5">
        <Loader />
        <p>Saving your meeting...</p>
      </section>
    </main>
  );
};

export default page;
