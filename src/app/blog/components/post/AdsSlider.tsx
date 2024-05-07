"use client";
import SliderWide from "@/components/__shared/ui/sliders/SliderWide";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";
import { useBlogPostSlider } from "@/store/blog/blogStore";
import React from "react";
import { Swiper } from "swiper/types";

type Props = { posts: any[] };

const AdsSlider = ({ posts }: Props) => {
  const setActiveIndex = useBlogPostSlider((state) => state.setActiveIndex);

  const handleSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="relative mt-10 h-fit w-full lg:mt-0">
      <SliderWide
        pagination
        images={posts.map((post) => ({
          src: urlForImage(post.featured_image)?.url() as string,
          name: post.title,
          href: `/blog/${slugify(post.category.category_title)}/${slugify(
            post.title,
          )}$id=${post._id}`,
        }))}
        className="sm:h-[27rem]"
        onSlideChange={handleSlideChange}
      />
    </section>
  );
};

export default AdsSlider;
