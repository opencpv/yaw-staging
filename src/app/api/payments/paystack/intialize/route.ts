import { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { createClient } from "@/lib/utils/supabase/auth/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import axios from "axios";

interface PostProps {
  firstname: string;
  lastname: string;
  email: string;
  address: string;
  address2: string;
  phone: string;
  amount: number;
  status: string;
  cartItems: string;
}
export const POST = withErrorHandler(async (request: NextRequest) => {
  const res: PostProps = await request.json(); // res now contains body
  const supabaseClient = createClient();
  // intializes payment
  const paymentInit = await axios.post(
    "https://api.paystack.co/transaction/initialize",
    {
      amount: res.amount,
      fullname: res.firstname + " " + res.lastname,
      email: res.email,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.PAYSTACK_API_KEY}`,
        "Content-Type": "application/json",
      },
    },
  );

  const data: {
    status: boolean;
    message: string;
    data: {
      authorization_url: string;
      access_code: string;
      reference: string;
    };
  } = paymentInit.data;
  // create payment with status init
  const { data: paymentData, error } = await supabaseClient
    .from("payments")
    .insert({
      firstname: res.firstname,
      lastname: res.lastname,
      email: res.email,
      amount: res.amount,
      reference: data.data.reference,
      address: res.address,
      address2: res.address2,
      phone: res.phone,
      status: res.status,
      cart_items: res.cartItems,
    });

  if (error) {
    throw new Error(error.message);
  }
  // return payment information - authorization url and reference included
  return new NextResponse(JSON.stringify({ message: " message sent", data }), {
    status: 200,
  });
});
