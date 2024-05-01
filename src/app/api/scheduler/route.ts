import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { PROMOTIONS_QUERY } from "@/lib/utils/sanity/queries";
import axios from "axios";
import { createClient } from "@sanity/client";

const isDateExceeded = (dateStr: string) => {
  const datetime = new Date(dateStr);
  const currentDatetime = new Date();
  if (currentDatetime > datetime) {
    return true;
  } else {
    false;
  }
};

export const GET = withErrorHandler(async (request: Request) => {
  const sanityClient = createClient({
    projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
    dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
    token: process.env.SANITY_API_READ_TOKEN,
    useCdn: false,
    apiVersion: "v2021-10-21",
  });

  const drafts = await sanityClient.fetch(
    "*[_type == 'homeBanner' && (_id in path('drafts.**'))]",
  );

  drafts.forEach(async (draft: any) => {
    const isPublishable = isDateExceeded(draft.scheduleDate);
    if (isPublishable) {
      try {
        const publishedData = {
          ...draft,
          _id: draft._id.replace(/^drafts\./, ""),
          isCurent: true,
        }; // Copy all fields from draft and remove 'drafts.' prefix from _id
        await sanityClient
          .transaction()
          .createOrReplace(publishedData) // Create or replace the published document with the draft data
          .commit();
        console.log(`Published document with ID: ${draft._id}`);
      } catch (error) {
        console.error(`Error publishing document with ID: ${draft._id}`, error);
      }
    }
  });

  return NextResponse.json({
    message: "success",
    statusCode: 200,
  });
});
