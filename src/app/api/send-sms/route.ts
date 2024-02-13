import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import getSentiment from "@/app/api/sentiment/getSentimet";
import { SentimentResponse } from "../../../../interfaces";
import countItemInArray from "@/lib/utils/countItemInArray";
import sendSms from "./sendSms";

interface PostProps {
    phone: string;
    message: string;
}

export const POST = withErrorHandler(async (request: Request) => {
    // const requestBody = await request.json(); // To read request data

    const res: PostProps = await request.json(); // res now contains body
    const phone = res.phone;
    const message = res.message;

    try {
        const messageRes = await sendSms(phone, message)
        return NextResponse.json({
            data: messageRes, statusCode: 200
        })
    } catch (error: any) {
        console.log(error.message)
        return NextResponse.json(error)
    }


});

export async function GET(request: Request) {
    // Returning the query params & body
    return NextResponse.json({
        message: "success",
    });
}
