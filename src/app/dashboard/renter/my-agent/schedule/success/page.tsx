import Loader from "@/components/__shared/ui/loader/Loader";
import supabase from "@/lib/utils/supabase/supabaseClient";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import React from "react";

type Props = {
  searchParams: { [key: string]: string | string[] | undefined };
};

const page = async ({ searchParams }: Props) => {
  const cookieStore = cookies();
  const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  const matchId = scheduleInfo?.split(",")[0];
  const actionType = scheduleInfo?.split(",")[1];
  const previousPath = scheduleInfo?.split(",")[2];

  if (!matchId || !actionType || !previousPath) {
    redirect("/dashboard/renter/my-agent/agent");
  }

  if (searchParams?.["meeting_type[id]"]) {
    const { data } = await supabase
      .from("agent_request_matches")
      .upsert({
        id: Number(matchId) || 0,
        meeting_id: Number(searchParams?.["meeting_type[id]"]),
        type: actionType,
      })
      .select("id")
      .maybeSingle();

    if (data?.id) {
      redirect(previousPath || "/dashboard/renter/my-agent/agent");
    }
  }

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
