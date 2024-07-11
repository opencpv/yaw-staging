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
  const file = formData.get("file") as File;

  if (!file) {
    return NextResponse.json({ message: "file not available", error: null });
  }

  const maxFileSizeMB = 50;
  const maxFileSizeBytes = maxFileSizeMB * 1024 * 1024;

  if (file.size > maxFileSizeBytes) {
    return NextResponse.json({
      message: "File size exceeds 50MB",
      error: true,
    });
  }

  const fileBuffer = await file.arrayBuffer();

  try {
    const uploadRes = await s3Client.putObject({
      Bucket: process.env.DO_SPACES_NAME as string,
      Key: file.name,
      ACL: "public-read",
      Body: Buffer.from(fileBuffer),
    });

    return NextResponse.json({
      message: "uploaded successfully",
    });
  } catch (error: any) {
    throw new Error(error.messaage);
  }
});

export const DELETE = withErrorHandler(async (request: any) => {
  const { searchParams } = new URL(request.url);
  const fileName = searchParams.get("file");
  // const fileName = query.file as string;
  // console.log(fileName);
  try {
    await s3Client.deleteObject({
      Bucket: process.env.DO_SPACES_NAME as string,
      Key: fileName as string,
    });
    return NextResponse.json({
      message: "uploaded successfully",
    });
  } catch (error: any) {
    console.error(error);
    throw new Error(error.messaage);
  }
});
