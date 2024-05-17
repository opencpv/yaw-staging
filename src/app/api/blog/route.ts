import { client } from "@/lib/utils/sanity/client";
import { SEARCH_BLOG_QUERY } from "@/lib/utils/sanity/queries";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { NextRequest, NextResponse } from "next/server";

export const GET = async (request: NextRequest) => {
  const searchParams = request.nextUrl.searchParams;
  const searchText = searchParams.get("search");

  // const data = await loadQuery<SanityDocument[]>(
  //   SEARCH_BLOG_QUERY(searchText as string),
  // );

  const data = await client.fetch(SEARCH_BLOG_QUERY(searchText as string));

  console.log(data);
  // cookies().set({
  //   name: "searched_blog",
  //   value: JSON.stringify(data),
  //   path: "/",
  // });

  // console.log(cookies().getAll());
  // redirect("/blog");

  return NextResponse.json(data);
};
