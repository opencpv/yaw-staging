import React from "react";
import OtherPosts from "./components/post/OtherPosts";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import CategoryCard from "./components/CategoryCard";
import Authors from "./components/author/Authors";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import SubscribeToBlogButton from "./components/SubscribeToBlogButton";
import PostSlider from "./components/post/PostSlider";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import {
  AUTHORS,
  BLOG_CATEGORIES,
  BLOG_QUERY,
} from "@/lib/utils/sanity/queries";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";

const page = async () => {
  const initialBlogData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  const blogData = initialBlogData.data;
  const blogCategoriesData: any =
    await loadQuery<SanityDocument[]>(BLOG_CATEGORIES);
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
      <section className="relative h-fit w-full">
        <SliderWide
          pagination
          autoplay
          className="shape-3 h-60 rounded-none sm:h-[30rem]"
          images={sliderBlogData.map((post: any, index: number) => ({
            src: urlForImage(post.featured_image)?.url() as string,
            name: post.title,
            href: `/blog/${slugify(post.category.category_title)}/${slugify(
              post.title,
            )}$id=${post._id}`,
          }))}
        />
      </section>
      <section className="grid-cols-4 gap-x-5 md:pt-28 lg:grid">
        <div className="col-span-3">
          <OtherPosts
            className="section md:hidden"
            title="Recent posts"
            posts={recentPosts.map((post: any, index: number) => ({
              title: post.title,
              author: post.author.name,
              image: "",
              href: `/blog/${slugify(post.category.category_title)}/${slugify(
                post.title,
              )}$id=${post._id}`,
            }))}
          />
          <PostSlider posts={sliderBlogData} />
          <AOSWrapper animation="fade-up" className="section">
            <section className="grid gap-x-3.5 gap-y-7 xs:grid-cols-2 md:grid-cols-3">
              {categories.map((category: any, index: number) => (
                <CategoryCard
                  key={index + 1}
                  href={`/blog/${slugify(category.category_title)}`}
                  category={category.category_title}
                  image={urlForImage(category.category_image)?.url() as string}
                  className="w-full"
                />
              ))}
            </section>
          </AOSWrapper>
        </div>

        {/* Other posts -- right side of Grid */}
        <div className="col-span-1 space-y-5">
          {/* Recent posts */}
          <div className="space-y-28 pt-28 lg:pt-0">
            <OtherPosts
              title="Recent posts"
              posts={recentPosts.map((post: any, idx: any) => ({
                title: post.title,
                author: post.author.name,
                image: "",
                href: `/blog/${slugify(post.category.category_title)}/${slugify(
                  post.title,
                )}$id=${post._id}`,
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
              posts={popularPosts.map((post: any, idx: number) => ({
                title: post.title,
                author: post.author.name,
                image: "",
                href: `/blog/${post.category.category_title}/${slugify(
                  post.title,
                )}$id=${post._id}`,
              }))}
            />
          </div>
        </div>
      </section>
    </div>
  );
};

export default page;
