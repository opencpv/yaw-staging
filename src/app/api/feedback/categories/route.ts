import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withErrorHandler from "../../withErrorHandler";
import { createClient } from "@/lib/utils/supabase/auth/server";
import axios from "axios";
import { route } from "@/lib/utils/routes";

export const GET = withErrorHandler(async (request: NextRequest) => {
  try {
    const res = await axios.get(route.feedbackTypesSanity);
    const data = await res.data.result;
    const modifiedData = data.map((item: any) => {
      return {
        label: item.feedbackType,
        key: item.feedbackType.toLowerCase(),
      };
    });
    modifiedData.push({ label: "All", key: "all" });
    return new NextResponse(JSON.stringify({ data: modifiedData }), {
      status: 200,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
});
