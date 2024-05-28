import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import axios from "axios";

export const POST = withErrorHandler(async (request: NextRequest) => {
  const data: { ref: string } = await request.json(); // res now contains body
  const res = await axios.get(
    `https://api.paystack.co/transaction/verify/${data.ref}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_API_KEY}`,
      },
    },
  );

  console.log(res.data.data);
  return new NextResponse(
    JSON.stringify({ message: " message sent", data: res.data.data }),
    {
      status: 200,
    },
  );
});
