import React from "react";
import PostSummary from "../components/post/PostSummary";
import Link from "next/link";
import { LuChevronsRight } from "react-icons/lu";
import BackgroundImage from "../components/category/BackgroundImage";
import TabsAndSearch from "../components/category/TabsAndSearch";
import {
  AUTHORS,
  BLOG_CATEGORY_QUERY,
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
  let blogCategoriesData: any, categories: any, blogPostsData: any, posts: any;
  try {
    blogCategoriesData = await loadQuery<SanityDocument[]>(BLOG_CATEGORY_QUERY);
    categories = blogCategoriesData.data;
    blogPostsData = await loadQuery<SanityDocument[]>(BLOG_QUERY);
    posts = blogPostsData.data;
  } catch (error) {
    blogCategoriesData = [];
    categories = [];
    posts = [];
  }

  return (
    <>
      {categories && posts && (
        <>
          <div className="relative mb-10 flex h-60 w-full items-center justify-center bg-gradient-to-b from-primary-500 to-primary-500/80 text-white lg:h-[27rem]">
            <BackgroundImage />
            <div className="flex flex-col items-center gap-3">
              <div className="flex items-center gap-3">
                <Link href="/">Home</Link>
                <LuChevronsRight />
                <Link href="/blog">Blogs</Link>
              </div>
              <h1 className="text-5xl font-[700]">Blog</h1>
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
      )}
    </>
  );
};

export default page;
