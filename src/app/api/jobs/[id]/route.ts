import { SINGLE_JOB_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { NextResponse } from "next/server";

export const GET = async (
  request: Request,
  { params }: { params: { id: string } },
) => {
  const jobId = params?.id;
  console.log(jobId);

  if (!jobId) {
    return NextResponse.json(
      { message: "Job ID is required" },
      { status: 400 },
    );
  }
  try {
    const jobResponse = await loadQuery<SanityDocument[]>(
      SINGLE_JOB_QUERY(jobId as string),
    );
    const job = jobResponse.data[0];
    console.log(job);
    return NextResponse.json(job);
  } catch (error) {
    return NextResponse.json({ message: error }, { status: 500 });
  }
};
