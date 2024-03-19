"use server";

import { createServerComponentClient as _createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../database.types";
import { cache } from "react";

// export const dynamic = "force-dynamic"

const createServerComponentClient = cache(() => {
  const cookieStore = cookies();
  return _createServerComponentClient<Database>({
    cookies: () => cookieStore,
  });
});

export const supabase = createServerComponentClient();
