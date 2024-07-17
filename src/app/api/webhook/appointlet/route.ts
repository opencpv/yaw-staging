import supabase from "@/lib/utils/supabase/supabaseClient";
import { NextRequest, NextResponse } from "next/server";

export const POST = async (req: NextRequest) => {
  try {
    const body = await req.json();
    await supabase.from("agent_request_matches").insert({
      request_id: 2,
      property_id: 50,
      id: body.entity.id,
    });
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
