import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/auth/server";
import withErrorHandler from "../withErrorHandler";

export const GET = withErrorHandler(async (request: NextRequest) => {
  const supabaseClient = createClient();

  let { data, error } = await supabaseClient.from("join_us").select("*");
  if (error) {
    throw new Error(error.message);
  }

  return new NextResponse(JSON.stringify(data), {
    status: 200,
  });
});

export const POST = withErrorHandler(async (request: NextRequest) => {
  const supabaseClient = createClient();

  const formData = await request.formData();
  const firstname = formData.get("first_name");
  const lastname = formData.get("last_name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const coverLetter = formData.get("coverLetter");
  const resume = formData.get("resume");
  const link = formData.get("link");
  const job = formData.get("job");

  let { data, error } = await supabaseClient
    .from("join_us")
    .insert([
      {
        firstname,
        lastname,
        email,
        phone,
        cover_letter_url: coverLetter || "",
        resume_url: resume,
        additional_link: link || "",
        job: job ? job : "resume bank",
      },
    ])
    .select();

  if (error) {
    console.log(error);
    throw new Error(error.message);
  }

  return new NextResponse(JSON.stringify({ message: "success" }), {
    status: 200,
  });
});
