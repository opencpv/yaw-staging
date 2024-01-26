import { NextResponse } from "next/server";
import getSummary from "@/app/api/summary/getSummary";
import withErrorHandler from "@/app/api/withErrorHandler";
import AWS from 'aws-sdk';
import fs from 'fs';
import { error } from "console";


interface PostProps {
    text: string
}
export const POST = withErrorHandler(async (request: Request) => {
    const formData = await request.formData();
    const file = formData.get('file') as File
    console.log(file)
    const spacesEndpoint = new AWS.Endpoint(process.env.DO_SPACES_ENDPOINT as string)
    const s3 = new AWS.S3({
        endpoint: spacesEndpoint,
        accessKeyId: process.env.DO_SPACES_KEY,
        secretAccessKey: process.env.DO_SPACES_SECRET
    })

    const text = "hello man"

    const buffer = Buffer.from(await file.arrayBuffer());
    console.log(buffer)
    s3.putObject({
        Bucket:process.env.DO_SPACES_NAME as string,
        Key:file.name,
        Body:buffer,
        ACL:"public-read"
    },(err,data)=>{
        if(err) return console.log(err)
        console.log("uploaded")
    })
    return NextResponse.json({
        summary: text,
        message: "text less than 100 words"
    });

});
