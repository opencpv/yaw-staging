import { client } from "@/lib/utils/sanity/client";
import { SEARCH_BLOG_QUERY } from "@/lib/utils/sanity/queries";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const searchText = searchParams.get("search");

  // const data = await loadQuery<SanityDocument[]>(
  //   SEARCH_BLOG_QUERY(searchText as string),
  // );

  const data = await client.fetch(SEARCH_BLOG_QUERY(searchText as string));

  return NextResponse.json(data);
};
