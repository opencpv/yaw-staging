import React from "react";
import DetailPage from "../components/pages/DetailPage";
import { Metadata, ResolvingMetadata } from "next";
import supabase from "@/lib/utils/supabase/supabaseClient";

type Props = {
  params: { item: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  const { data: item } = await supabase
    .from("products")
    .select("id, title, images")
    .eq("id", searchParams?.id as string)
    .maybeSingle();

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const itemImage = item?.images?.[0] || "";

  return {
    title: item?.title || "",
    openGraph: {
      images: [itemImage, ...previousImages],
    },
  };
}

const page = (props: Props) => {
  return <DetailPage id={parseInt(props.searchParams?.id as string)} />;
};

export default page;
