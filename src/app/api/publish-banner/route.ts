import { NextResponse } from "next/server";
import withErrorHandler from "@/app/api/withErrorHandler";
import { createClient } from "@sanity/client";
import isDateExceeded from "@/lib/utils/isDateExceeded";
import { set } from "sanity";



export const GET = withErrorHandler(async (request: Request) => {
    const sanityClient = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        token: process.env.SANITY_API_READ_TOKEN,
        useCdn: false,
        apiVersion: "v2021-10-21",
    });

    const url = new URL(request.url);
    const { item } = Object.fromEntries(url.searchParams);
    const drafts = await sanityClient.fetch(
        `*[_type == '${item}']{...}`,
    );


    drafts.forEach(async (draft: any) => {
        const isPublishable = isDateExceeded(draft.startDate) && !isDateExceeded(draft.endDate) && !draft.isPublished
        if (isPublishable) {
            try {
                const patch = sanityClient
                    .patch(draft._id)
                    .set({ isPublished: true });

                await patch.commit();
                console.log(`Publish document with ID: ${draft._id}`);
            } catch (error) {
                console.error(`Error unpublishing document with ID: ${draft._id}`, error);
            }
        }
    });

    return NextResponse.json({
        message: "success",
        statusCode: 200,
    });
});
