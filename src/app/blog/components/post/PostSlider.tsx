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
    <section className="relative h-fit w-full">
      <SliderWide
        navigation
        images={posts.map((post) => ({
          src: urlForImage(post.featured_image)?.url() as string,
          name: post.title,
          href: `/blog/${slugify(post.category.category_title)}/${slugify(
            post.title,
          )}$id=${post._id}`,
        }))}
        className="shape-polygon rounded-none sm:h-[27rem]"
        onSlideChange={handleSlideChange}
      />
      <div className="absolute -left-10 bottom-5 z-10 space-y-2 px-20 text-white sm:bottom-20">
        <h3 className="line-clamp-1 text-xl font-[700]">
          {posts[activeIndex].title}
        </h3>
        <div className="line-clamp-1 flex flex-wrap gap-2">
          <span className="">Category</span>
          <span className="hidden xs:inline">|</span>
          <span className="">By {posts[activeIndex].author.name}</span>
        </div>
      </div>
    </section>
  );
};

export default PostSlider;
