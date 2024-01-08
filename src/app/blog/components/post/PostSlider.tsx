"use client";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import { useBlogPostSlider } from "@/store/blog/blogStore";
import Link from "next/link";
import React from "react";
import { Swiper } from "swiper/types";

type Props = {};

const blogPostDemoDB = [
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non.",
    author: "John Doe",
    image: "/assets/images/about/about-slider-img.webp",
  },
  {
    title:
      "Loremc, cadipisicing elit. ipsum dolor sit amet consectetur Deleniti, non.",
    author: "Jane Drow",
    image: "/assets/images/about/about-slider-img.webp",
  },
  {
    title:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deleniti, non.",
    author: "Mary Asante",
    image: "/assets/images/about/about-slider-img.webp",
  },
];

const PostSlider = (props: Props) => {
  const activeIndex = useBlogPostSlider((state) => state.activeIndex);
  const setActiveIndex = useBlogPostSlider((state) => state.setActiveIndex);

  const handleSlideChange = (swiper: Swiper) => {
    setActiveIndex(swiper.activeIndex);
  };

  return (
    <section className="relative w-full h-fit mt-28 md:mt-0">
      <SliderWide
        navigation
        images={blogPostDemoDB.map((blog) => ({
          src: blog.image,
          name: blog.title,
          href: `/blog/c/${blog.title}`,
        }))}
        className="sm:h-96"
        onSlideChange={handleSlideChange}
      />
      <Link
        href={`/blog/c/${blogPostDemoDB[activeIndex].title}`}
        className="absolute inset-0 block rounded-3xl z-10 bg-neutral-800 bg-opacity-30"
      ></Link>
      <div className="absolute bottom-8 px-20 z-10 text-white space-y-2">
        <h3 className="text-xl font-[700] line-clamp-4">
          {blogPostDemoDB[activeIndex].title}
        </h3>
        <div className="flex gap-2 flex-wrap">
          <span className="">Category</span>
          <span className="hidden xs:inline">|</span>
          <span className="">
            Posted by {blogPostDemoDB[activeIndex].author}
          </span>
        </div>
      </div>
    </section>
  );
};

export default PostSlider;
