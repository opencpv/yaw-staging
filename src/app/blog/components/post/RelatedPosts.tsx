import React from "react";
import OtherPosts from "../OtherPosts";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { BLOG_QUERY } from "@/lib/utils/sanity/queries";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";
import { cn } from "@/lib/utils";

const RelatedPosts = async ({
  className,
  currentPost,
}: {
  className?: string;
  currentPost: any;
}) => {
  const initialBlogData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  const blogData = initialBlogData.data;
  const relatedPosts = blogData
    .filter(
      (post: any) =>
        post.category.category_title === currentPost.category.category_title &&
        post._id !== currentPost._id,
    )
    .slice(0, 3);

  console.log(relatedPosts);

  return (
    <OtherPosts
      className={cn(className, { hidden: relatedPosts?.length === 0 })}
      title="Related posts"
      posts={relatedPosts
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

export default RelatedPosts;
