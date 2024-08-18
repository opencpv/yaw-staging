import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withErrorHandler from "../../withErrorHandler";
import { createClient } from "@/lib/utils/supabase/auth/server";
import axios from "axios";
import { route } from "@/lib/utils/routes";
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const GET = withErrorHandler(async (request: NextRequest) => {
  try {
    const supabaseClient = createClientComponentClient();
    const { data, error } = await supabaseClient
      .from("subscribers")
      .select("*");
    const modifiedData = data?.map((item: any) => {
      return {
        label: item.campaign,
        key: item.campaign.toLowerCase(),
      };
    });
    modifiedData?.push({ label: "All", key: "all" });
    return new NextResponse(JSON.stringify({ data: modifiedData }), {
      status: 200,
    });
  } catch (error: any) {
    throw new Error(error.message);
  }
});
