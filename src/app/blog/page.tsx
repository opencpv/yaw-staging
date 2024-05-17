import React from "react";
import OtherPosts from "./components/OtherPosts";
import CategoryCard from "./components/CategoryCard";
import Authors from "./components/author/Authors";
import SubscribeToBlogButton from "./components/SubscribeToBlogButton";
import PostSlider from "./components/post/PostSlider";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import {
  AUTHORS,
  BLOG_CATEGORY_QUERY,
  BLOG_QUERY,
} from "@/lib/utils/sanity/queries";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";
import { fadeIn } from "@/lib/animations";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import AdsSlider from "./components/post/AdsSlider";
import { cookies } from "next/headers";

const page = async () => {
  const initialBlogData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  const blogData = initialBlogData.data;
  const blogCategoriesData: any =
    await loadQuery<SanityDocument[]>(BLOG_CATEGORY_QUERY);
  const categories = blogCategoriesData.data;
  const initialAuthorsData: any = await loadQuery<SanityDocument[]>(AUTHORS);
  const sliderBlogData = blogData.slice(0, 3);
  const postsCount = blogData.length;
  const recentPosts =
    blogData.length > 3
      ? blogData.slice(postsCount - 3, postsCount + 1)
      : blogData;
  const sortedBlogPosts = blogData.sort((a: any, b: any) => a.view - b.views);
  const popularPosts = sortedBlogPosts.slice(0, 3);

  return (
    <div className="wrapper pb-0 sm:pb-0">
      <PostSlider posts={sliderBlogData} />
      <section className="grid-cols-4 gap-x-5 lg:grid lg:pt-28">
        <div className="col-span-3">
          <OtherPosts
            className="section lg:hidden"
            title="Recent posts"
            posts={recentPosts
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
          <AdsSlider posts={sliderBlogData} />
          <FramerWrapper {...fadeIn} className="section">
            <section
              className={
                "grid gap-x-3.5 gap-y-7 max-xs:hidden xs:grid-cols-2 md:grid-cols-3"
              }
            >
              {categories.map((category: any) => (
                <CategoryCard
                  key={category._id}
                  href={`/blog/${slugify(category.category_title)}`}
                  category={category.category_title}
                  image={urlForImage(category.category_image)?.url() as string}
                  className="w-full"
                />
              ))}
            </section>
            <section className="space-y-3 xs:hidden">
              <h3>Category</h3>
              <div className="hidden-scrollbar flex w-full gap-3.5 overflow-x-auto">
                {categories.map((category: any) => (
                  <CategoryCard
                    key={category._id}
                    href={`/blog/${slugify(category.category_title)}`}
                    category={category.category_title}
                    image={
                      urlForImage(category.category_image)?.url() as string
                    }
                    className="flex-1"
                  />
                ))}
              </div>
            </section>
          </FramerWrapper>
        </div>

        {/* Other posts -- right side of Grid */}
        <div className="col-span-1 space-y-5">
          {/* Recent posts */}
          <div className="space-y-28 pt-28 lg:pt-0">
            <OtherPosts
              title="Recent posts"
              posts={recentPosts
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
                  href: `/blog/${slugify(
                    post.category.category_title,
                  )}/${slugify(post.title)}?id=${post._id}`,
                }))}
            />
            <div className="space-y-10 lg:pt-16">
              {/* Authors */}
              <Authors authors={initialAuthorsData.data} />
              <SubscribeToBlogButton />
            </div>
            {/* Popular posts */}
            <OtherPosts
              title="Popular posts"
              posts={popularPosts
                .slice()
                .sort(
                  (a: { rating: number }, b: { rating: number }) =>
                    b.rating - a.rating,
                )
                .map((post: any) => ({
                  title: post.title,
                  author: post.author.name,
                  image: urlForImage(post.featured_image)?.url() as string,
                  href: `/blog/${post.category.category_title}/${slugify(
                    post.title,
                  )}?id=${post._id}`,
                }))}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
