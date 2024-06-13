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
    <section className="shape-polygon-parent relative h-fit w-full">
      <SliderWide
        navigation
        images={posts.map((post) => ({
          src: urlForImage(post.featured_image)?.url() as string,
          name: post.title,
          href: `/blog/${slugify(post.category.category_title)}/${slugify(
            post.title,
          )}?id=${post._id}`,
        }))}
        className="shape-polygon sm:h-[27rem]"
        onSlideChange={handleSlideChange}
      />
       <svg class="flt_svg" xmlns="http://www.w3.org/2000/svg">
        <defs>
            <filter id="flt_tag">
                <feGaussianBlur in="SourceGraphic" stdDeviation="8" result="blur" />
                <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="flt_tag" />
                <feComposite in="SourceGraphic" in2="flt_tag" operator="atop"/>
            </filter>
        </defs>
      </svg>
      <div className="absolute -left-10 bottom-5 z-10 space-y-2 px-20 text-white sm:bottom-20">
        <p className="line-clamp-1">{posts[activeIndex].author.name}</p>
        <h3 className="line-clamp-1 font-bold">{posts[activeIndex].title}</h3>
      </div>
    </section>
  );
};

export default PostSlider;
