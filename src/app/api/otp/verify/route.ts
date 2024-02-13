import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import verifyOtp from "./verifyOTP";

interface PostProps {
    requestId: string;
    prefix: string;
    code: string;
}

export const POST = withErrorHandler(async (request: Request) => {
    // const requestBody = await request.json(); // To read request data

    const res: PostProps = await request.json(); // res now contains body
    const prefix = res.prefix;
    const code = res.code;
    const requestId = res.requestId

    const messageRes = await verifyOtp(requestId, code, prefix)
    return NextResponse.json({
        data: messageRes, statusCode: 200
    })



});

