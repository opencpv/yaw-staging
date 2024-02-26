import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";

export const POST = withErrorHandler(async (request: any) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  const user: any = await supabase.auth.getUser();
  console.log(user);
  let reqError: any = null;
  const errors = [];
  const data = await request.formData();
  const incorporation_cert: File = data.get("incorporation_cert");
  const commencement_cert: File = data.get("commencement_cert");
  const address = data.get("address");
  const name = data.get("name");
  const location = data.get("location");
  const phone = data.get("phone");
  const tin = data.get("tin");

  return new NextResponse(JSON.stringify({ message: "success" }), {
    status: 200,
  });
});

export const PUT = withErrorHandler(async (request: any) => {
  const cookieStore = cookies();
  const supabase = createServerComponentClient({
    cookies: () => cookieStore,
  });
  return new NextResponse(JSON.stringify({ message: "success" }), {
    status: 200,
  });
});
