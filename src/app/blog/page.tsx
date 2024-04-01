import React from "react";
import OtherPosts from "./components/post/OtherPosts";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import CategoryCard from "./components/CategoryCard";
import Authors from "./components/author/Authors";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import SubscribeToBlogButton from "./components/SubscribeToBlogButton";
import PostSlider from "./components/post/PostSlider";
import { loadQuery } from "@sanity/react-loader";
// import { SanityDocument } from "next-sanity";
// import {
//   AUTHORS,
//   BLOG_CATEGORIES,
//   BLOG_QUERY,
// } from "@/lib/utils/sanity/queries";
import { urlForImage } from "@/lib/utils/sanity/utils";
import slugify from "@/lib/utils/slugify";

const page = async () => {
  // const initialBlogData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  // const blogData = initialBlogData.data;
  // const blogCategoriesData: any =
  //   await loadQuery<SanityDocument[]>(BLOG_CATEGORIES);
  // const categories = blogCategoriesData.data;
  // const initialAuthorsData: any = await loadQuery<SanityDocument[]>(AUTHORS);
  // const sliderBlogData = blogData.slice(0, 3);
  // const postsCount = blogData.length;
  // const recentPosts =
  //   blogData.length > 3
  //     ? blogData.slice(postsCount - 3, postsCount + 1)
  //     : blogData;
  // const sortedBlogPosts = blogData.sort((a: any, b: any) => a.view - b.views);
  // const popularPosts = sortedBlogPosts.slice(0, 3);
  // console.log(categories);

  return <div className="wrapper pb-0 sm:pb-0"></div>;
};

export default page;
