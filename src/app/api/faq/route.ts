import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/auth/server";
import withErrorHandler from "../withErrorHandler";

export const GET = withErrorHandler(async (request: NextRequest) => {
  const supabaseClient = createClient();

  let { data, error } = await supabaseClient.from("faq").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
});
