import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withErrorHandler from "../withErrorHandler";
import { createClient } from "@/lib/utils/supabase/auth/server";

export const GET = withErrorHandler(async (request: NextRequest) => {
  const supabaseClient = createClient();

  let { data, error } = await supabaseClient.from("agent_request").select("*,renter_id (*)");
  if (error) {
    throw new Error(error.message);
  }

  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
});
