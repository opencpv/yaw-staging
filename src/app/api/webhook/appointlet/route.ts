import supabase from "@/lib/utils/supabase/supabaseClient";
//import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  //const cookieStore = cookies();
  //const scheduleInfo = cookieStore.get("bma-schedule-info")?.value;
  //const matchId = scheduleInfo?.split(";")[0];
  //const actionType = scheduleInfo?.split(";")[1];

  try {
    const body = await req.json();
    await supabase.from("agent_request_matches").insert({
      meeting_id: body.entity.id,
      start_date: body.entity.start,
      end_date: body.entity.end,
      cancel_url: body.attendees[0].cancel_url,
      reschedule_url: body.attendees[0].reschedule_url,
      type: "Physical Tour",
    });

    //if (body.action === "Meeting.scheduled") {
    //  await supabase
    //    .from("agent_request_matches")
    //    .upsert({
    //      meeting_id: body.entity.id,
    //      start_date: body.entity.start,
    //      end_date: body.entity.end,
    //      cancel_url: body.attendees[0].cancel_url,
    //      reschedule_url: body.attendees[0].reschedule_url,
    //      type: "Physical Tour",
    //    })
    //    .eq("id", 3);
    //} else if (body.action === "Meeting.rescheduled") {
    //  await supabase
    //    .from("agent_request_matches")
    //    .update({
    //      start_date: body.entity.start,
    //      end_date: body.entity.end,
    //      cancel_url: body.attendees[0].cancel_url,
    //      reschedule_url: body.attendees[0].reschedule_url,
    //    })
    //    .match({ id: 3, meeting_id: body.entity.id });
    //} else if (body.action === "Meeting.cancelled") {
    //  await supabase
    //    .from("agent_request_matches")
    //    .update({
    //      start_date: null,
    //      end_date: null,
    //      meeting_id: null,
    //      cancel_url: null,
    //      reschedule_url: null,
    //      type: null,
    //    })
    //    .match({ id: 3, meeting_id: body.entity.id });
    //}

    return new NextResponse(
      JSON.stringify({ message: "Processed successfully" }),
      { status: 200 },
    );
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
};
