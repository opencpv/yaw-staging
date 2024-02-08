import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import { S3 } from "@aws-sdk/client-s3";

interface PostProps {
    text: string;
}

const s3Client = new S3({
    endpoint: process.env.DO_SPACES_ENDPOINT,
    region: "nyc3",
    credentials: {
        accessKeyId: process.env.DO_SPACES_KEY as string,
        secretAccessKey: process.env.DO_SPACES_SECRET as string,
    },
});

export const POST = withErrorHandler(async (request: any) => {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
        return NextResponse.json({ message: "file not available", error: null });
    }

    const maxFileSizeMB = 50;
    const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;

    if (file.size > maxFileSizeBytes) {
        return NextResponse.json({ message: "File size exceeds 50MB", error: true });
    }

    const fileBuffer = await file.arrayBuffer();

    const uploadRes = await s3Client.putObject({
        Bucket: process.env.DO_SPACES_NAME as string,
        Key: file.name,
        Body: Buffer.from(fileBuffer),
    });

    return NextResponse.json({
        message: "uploaded successfully",
    });

});
