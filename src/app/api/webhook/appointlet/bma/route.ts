import supabase from "@/lib/utils/supabase/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    const matchId = body.entity.attendees[0].field_submissions.find(
      (submission: any) => submission.name.toLowerCase() === "match",
    ).value;
    const actionType = body.entity.attendees[0].field_submissions.find(
      (submission: any) => submission.name.toLowerCase() === "type",
    ).value;

    if (body.action === "Meeting.scheduled") {
      await supabase
        .from("agent_request_matches")
        .update({
          meeting_id: body.entity.id,
          start_date: body.entity.start,
          end_date: body.entity.end,
          cancel_url: body.entity.attendees[0].cancel_url,
          reschedule_url: body.entity.attendees[0].reschedule_url,
          type: actionType,
        })
        .eq("id", Number(matchId));
    } else if (body.action === "Meeting.rescheduled") {
      await supabase
        .from("agent_request_matches")
        .update({
          start_date: body.entity.start,
          end_date: body.entity.end,
          cancel_url: body.entity.attendees[0].cancel_url,
          reschedule_url: body.entity.attendees[0].reschedule_url,
        })
        .eq("meeting_id", body.entity.id);
    } else if (body.action === "Meeting.cancelled") {
      await supabase
        .from("agent_request_matches")
        .update({
          start_date: "",
          end_date: "",
          meeting_id: null,
          cancel_url: "",
          reschedule_url: "",
          type: "",
        })
        .eq("meeting_id", body.entity.id);
    }
  } catch (error: any) {
    console.log(error);
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
  return new NextResponse(
    JSON.stringify({ message: "Processed successfully" }),
    { status: 200 },
  );
};
