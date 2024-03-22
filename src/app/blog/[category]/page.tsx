import React from "react";
import PostSummary from "../components/post/PostSummary";
import Link from "next/link";
import { LuChevronsRight } from "react-icons/lu";
import BackgroundImage from "../components/category/BackgroundImage";
import TabsAndSearch from "../components/category/TabsAndSearch";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import {
  AUTHORS,
  BLOG_CATEGORIES,
  BLOG_QUERY,
} from "@/lib/utils/sanity/queries";
import slugify from "@/lib/utils/slugify";
import { SanityDocument } from "next-sanity";
import { loadQuery } from "@sanity/react-loader";
import { headers } from "next/headers";
import { usePathname } from "next/navigation";
import PostsGrid from "../components/post/PostsGrid";

type Props = {};

const page = async (props: Props) => {
  const blogCategoriesData: any =
    await loadQuery<SanityDocument[]>(BLOG_CATEGORIES);
  const categories = blogCategoriesData.data;
  const blogPostsData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  const posts = blogPostsData.data;

  return (
    <>
      <div className="relative mb-10 flex h-60 w-full items-center justify-center bg-gradient-to-b from-primary-500 to-primary-500/80 text-white lg:h-[27rem]">
        <BackgroundImage />
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Link href="/">Home</Link>
            <LuChevronsRight />
            <Link href="/blog">Blogs</Link>
          </div>
          <AOSWrapper animation="fade-up" duration="2000">
            <h1 className="text-5xl font-[700]">Blog</h1>
          </AOSWrapper>
        </div>
      </div>
      <div className="wrapper">
        <div className="mb-10 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <TabsAndSearch
            categories={categories.map(
              (category: any) => category.category_title,
            )}
          />
        </div>
        <div className="flex items-center justify-center pb-10 text-neutral-500">
          <PostsGrid posts={posts} />
        </div>
        {/* <p className="mb-20 text-center">pagination</p> */}
      </div>
    </>
  );
};

export default page;
