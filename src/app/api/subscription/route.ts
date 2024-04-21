import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withErrorHandler from "../withErrorHandler";
import { createClient } from "@/lib/utils/supabase/auth/server";

export const GET = withErrorHandler(async (request: NextRequest) => {
  const filter = request.nextUrl.searchParams.get("filter");
  const supabaseClient = createClient();

  if (filter && filter !== "all") {
    let { data, error } = await supabaseClient
      .from("subscribers")
      .select("*")
      .eq("campaign", filter);

    if (error) {
      throw new Error(error.message);
    }
    console.log(data);
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  } else {
    let { data, error } = await supabaseClient.from("subscribers").select("*");
    if (error) {
      throw new Error(error.message);
    }
    return new NextResponse(JSON.stringify(data), {
      status: 200,
    });
  }
});
