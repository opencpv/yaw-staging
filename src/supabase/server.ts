"use server";

import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { Database } from "../../database.types";

const cookiesStore = cookies();

export const supabase = createServerComponentClient<Database>({
  cookies: () => cookiesStore,
});
