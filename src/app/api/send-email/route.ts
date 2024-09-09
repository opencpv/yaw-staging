import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/auth/server";
import withErrorHandler from "../withErrorHandler";
import sgMail from "@sendgrid/mail";
sgMail.setApiKey(process.env.SENDGRID_API_KEY as string);

interface PostProps {
  to: string;
  text: string;
  html: string;
  subject: string;
}
export const POST = withErrorHandler(async (request: NextRequest) => {
  const res: PostProps = await request.json(); // res now contains body
  const to = res.to;
  const text = res.text;
  const html = res.html;
  const subject = res.subject;

  const msg = {
    to,
    from: "sulemanaadams375@gmail.com",
    subject,
    text,
    html,
  };

  try {
    const res = await sgMail.send(msg);
    return new NextResponse(JSON.stringify({ message: " message sent" }), {
      status: 200,
    });
  } catch (error: any) {
    return new NextResponse(JSON.stringify({ message: error.message }), {
      status: 200,
    });
  }
});
