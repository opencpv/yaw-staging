import supabase from "@/lib/utils/supabase/supabaseClient";
import { cookies } from "next/headers";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  const scheduleInfo = cookies().get("bma-schedule-info")?.value;
  const requestId = scheduleInfo?.split(";")[0];
  const propertyId = scheduleInfo?.split(";")[1];
  const actionType = scheduleInfo?.split(";")[2];

  console.log("route", requestId, propertyId);

  try {
    const body = await req.json();
    if (body.action === "Meeting.scheduled") {
      await supabase
        .from("agent_request_matches")
        .upsert({
          meeting_id: body.entity.id,
          start_date: body.entity.start,
          end_date: body.entity.end,
          cancel_url: body.attendees[0].cancel_url,
          reschedule_url: body.attendees[0].reschedule_url,
          type: actionType,
        })
        .match({ request_id: requestId, property_id: propertyId });
    } else if (body.action === "Meeting.rescheduled") {
      await supabase
        .from("agent_request_matches")
        .upsert({
          start_date: body.entity.start,
          end_date: body.entity.end,
          cancel_url: body.attendees[0].cancel_url,
          reschedule_url: body.attendees[0].reschedule_url,
        })
        .match({
          meeting_id: body.entity.id,
          property_id: propertyId,
          request_id: requestId,
        });
    } else if (body.action === "Meeting.cancelled") {
      await supabase
        .from("agent_request_matches")
        .upsert({
          start_date: null,
          end_date: null,
          meeting_id: null,
          cancel_url: null,
          reschedule_url: null,
          type: null,
        })
        .match({
          meeting_id: body.entity.id,
          property_id: propertyId,
          request_id: requestId,
        });
    }
    return new NextResponse(
      JSON.stringify({ message: "Processed successfully" }),
      { status: 200 },
    );
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ error: error.message }), {
      status: 400,
    });
  }
};
