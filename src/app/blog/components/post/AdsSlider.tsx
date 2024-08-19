"use client";
import { cn } from "@/lib/utils";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";
import { useBlogPostSlider } from "@/store/blog/blogStore";
import dynamic from "next/dynamic";
import React from "react";
import { Swiper } from "swiper/types";
const SliderWide = dynamic(
  () => import("@/components/__shared/ui/sliders/SliderWide"),
);

type Props = { posts: any[]; className?: string };

const AdsSlider = ({ posts, className }: Props) => {
  const setActiveIndex = useBlogPostSlider((state) => state.setActiveIndex);

  const handleSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className={cn("relative mt-10 h-fit w-full lg:mt-0", className)}>
      <SliderWide
        autoplay
        pagination
        images={posts.map((post) => ({
          src: urlForImage(post.featured_image)?.url() as string,
          name: post.title,
          href: `/blog/${slugify(post.category.category_title)}/${slugify(
            post.title,
          )}?id=${post._id}`,
        }))}
        className="sm:h-[27rem]"
        onSlideChange={handleSlideChange}
      />
    </section>
  );
};

export default AdsSlider;
