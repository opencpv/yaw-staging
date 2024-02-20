import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import makePayment from "./makePayment";
import { cookies } from "next/headers";
import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";

interface PostProps {
    amount: number;
    phone: string;
    title: string;
    description: string;
    clientReference: string;

}

export const POST = withErrorHandler(async (request: Request) => {
    // const requestBody = await request.json(); // To read request data


    const res: PostProps = await request.json(); // res now contains body
    const amount = res.amount;
    const phone = res.phone;
    const title = res.title;
    const description = res.description;
    const clientReference = res.clientReference;


    try {
        const messageRes = await makePayment(phone, amount, title, description, clientReference)
        return NextResponse.json({
            data: messageRes, statusCode: 200
        })
    } catch (error: any) {
        console.log(error.message);
        return NextResponse.json({
            error: error
        })
    }





});
