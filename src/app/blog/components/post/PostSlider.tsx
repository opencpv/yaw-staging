"use client";
import SliderWide from "@/components/__shared/ui/sliders/SliderWide";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";
import { useBlogPostSlider } from "@/store/blog/blogStore";
import Link from "next/link";
import React from "react";
import { Swiper } from "swiper/types";

type Props = { posts: any[] };

const PostSlider = ({ posts }: Props) => {
  const activeIndex = useBlogPostSlider((state) => state.activeIndex);
  const setActiveIndex = useBlogPostSlider((state) => state.setActiveIndex);

  const handleSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="relative mt-10 h-fit w-full md:mt-0">
      <SliderWide
        navigation
        images={posts.map((post) => ({
          src: urlForImage(post.featured_image)?.url() as string,
          name: post.title,
          href: `/blog/${slugify(post.category.category_title)}/${slugify(
            post.title,
          )}$id=${post._id}`,
        }))}
        className="sm:h-96"
        onSlideChange={handleSlideChange}
      />
      <Link
        href={`/blog/c/${posts[activeIndex].title}`}
        className="absolute inset-0 z-10 block rounded-3xl bg-neutral-800 bg-opacity-30"
      ></Link>
      <div className="absolute bottom-8 z-10 space-y-2 px-20 text-white">
        <h3 className="line-clamp-4 text-xl font-[700]">
          {posts[activeIndex].title}
        </h3>
        <div className="flex flex-wrap gap-2">
          <span className="">Category</span>
          <span className="hidden xs:inline">|</span>
          <span className="">Posted by {posts[activeIndex].author.name}</span>
        </div>
      </div>
    </section>
  );
};

export default PostSlider;
