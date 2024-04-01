import React from "react";
import PostSummary from "../components/post/PostSummary";
import Link from "next/link";
import { LuChevronsRight } from "react-icons/lu";
import BackgroundImage from "../components/category/BackgroundImage";
import TabsAndSearch from "../components/category/TabsAndSearch";
import AOSWrapper from "@/components/__shared/AOSWrapper";
// import {
//   AUTHORS,
//   BLOG_CATEGORIES,
//   BLOG_QUERY,
// } from "@/lib/utils/sanity/queries";
import slugify from "@/lib/utils/slugify";
// import { SanityDocument } from "next-sanity";
import { loadQuery } from "@sanity/react-loader";
import { headers } from "next/headers";
import { usePathname } from "next/navigation";
import PostsGrid from "../components/post/PostsGrid";

type Props = {};

const page = async (props: Props) => {
  // const blogCategoriesData: any =
  //   await loadQuery<SanityDocument[]>(BLOG_CATEGORIES);
  // const categories = blogCategoriesData.data;
  // const blogPostsData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  // const posts = blogPostsData.data;

  return <></>;
};

export default page;
