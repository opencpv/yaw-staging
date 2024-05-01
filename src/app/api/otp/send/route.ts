import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import sendOtp from "./sendOtp";

interface PostProps {
    phone: string;
    code: string;
}

export const POST = withErrorHandler(async (request: Request) => {
    // const requestBody = await request.json(); // To read request data

    const res: PostProps = await request.json(); // res now contains body
    const phone = res.phone;
    const code = res.code;

    const messageRes = await sendOtp(phone, code)
    return NextResponse.json({
        data: messageRes, statusCode: 200
    })



});
