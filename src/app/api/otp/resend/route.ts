import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import resend from "./resend";

interface PostProps {
    requestId: string;

}

export const POST = withErrorHandler(async (request: Request) => {
    // const requestBody = await request.json(); // To read request data

    const res: PostProps = await request.json(); // res now contains body
    const requestId = res.requestId;

    const messageRes = await resend(requestId)
    return NextResponse.json({
        data: messageRes, statusCode: 200
    })



});

