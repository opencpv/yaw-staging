import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withErrorHandler from "../withErrorHandler";
import { createClient } from "@/lib/utils/supabase/auth/server";

export const GET = withErrorHandler(async (request: NextRequest) => {
  const filter = request.nextUrl.searchParams.get("filter");
  const supabaseClient = createClient();

  if (filter && filter !== "all") {
    let { data: feedback, error } = await supabaseClient
      .from("contact_us")
      .select("*")
      .eq("contact_type", filter);
    if (error) {
      throw new Error(error.message);
    }
    return new NextResponse(JSON.stringify(feedback), {
      status: 200,
    });
  } else {
    let { data, error } = await supabaseClient.from("contact_us").select("*");
    if (error) {
      throw new Error(error.message);
    }

    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  }
});
