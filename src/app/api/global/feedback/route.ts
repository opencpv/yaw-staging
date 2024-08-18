import { HOME_PAGE_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@/lib/utils/sanity/sanityStore";
import { SanityDocument } from "next-sanity";
import { NextResponse } from "next/server";

export const GET = async (request: Request) => {
  try {
    const initial = await loadQuery<SanityDocument[]>(HOME_PAGE_QUERY);
    const data = initial.data[0];

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: error });
  }
};
