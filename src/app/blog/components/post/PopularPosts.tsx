import React from "react";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { BLOG_QUERY } from "@/lib/utils/sanity/queries";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";
import dynamic from "next/dynamic";
const OtherPosts = dynamic(() => import("../OtherPosts"));

const PopularPosts = async ({ className }: { className?: string }) => {
  const initialBlogData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  const blogData = initialBlogData?.data;
  const sortedBlogPosts = blogData?.sort(
    (a: any, b: any) => a?.views - b?.views,
  );
  const popularPosts = sortedBlogPosts?.slice(0, 3);

  return (
    <OtherPosts
      className={className}
      title="Popular posts"
      posts={popularPosts
        .slice()
        /**
         * Sort the recent posts array by date in descending order,
         * i.e. newest first.
         *
         * @param a First post
         * @param b Second post
         * @returns Negative number if a is newer than b, positive number if b is newer than a, 0 if equal
         */
        .sort(
          (a: { date: string }, b: { date: string }) =>
            new Date(b.date).getTime() - new Date(a.date).getTime(),
        )
        .map((post: any) => ({
          title: post.title,
          author: post.author.name,
          image: urlForImage(post.featured_image)?.url() as string,
          href: `/blog/${slugify(post.category.category_title)}/${slugify(
            post.title,
          )}?id=${post._id}`,
        }))}
    />
  );
};

export default PopularPosts;
