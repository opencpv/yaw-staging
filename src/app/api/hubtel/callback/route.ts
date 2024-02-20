import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";

interface CallbackData {
    message: string;
    code: string;
    data: DataProp;

}

interface DataProp {
    paylinkId: string,
    clientReferenc: string;
    paylinkUrl: string;
    expiresAt: number;

}

export const POST = withErrorHandler(async (request: Request) => {
    // const requestBody = await request.json(); // To read request data

    const res: PostProps = await request.json(); // res now contains body

    console.log(res);



    return NextResponse.json({
        data: res
    })


});
