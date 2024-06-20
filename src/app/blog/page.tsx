import React from "react";
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
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import AdsSlider from "./components/post/AdsSlider";
import RecentPosts from "./components/post/RecentPosts";
import PopularPosts from "./components/post/PopularPosts";
import Survey from "@/components/__shared/ui/survey";

const page = async () => {
  const initialBlogData: any = await loadQuery<SanityDocument[]>(BLOG_QUERY);
  const blogData = initialBlogData.data;
  const blogCategoriesData: any =
    await loadQuery<SanityDocument[]>(BLOG_CATEGORY_QUERY);
  const categories = blogCategoriesData.data;
  const initialAuthorsData: any = await loadQuery<SanityDocument[]>(AUTHORS);
  const sliderBlogData = blogData.slice(0, 3);

  return (
    <div className="wrapper pb-0 sm:pb-0">
      <PostSlider posts={sliderBlogData} />
      <section className="grid-cols-4 gap-x-5 lg:grid lg:pt-20">
        <div className="col-span-3">
          <RecentPosts className="section lg:hidden" />
          <div className="max-lg:section flex flex-col gap-5">
            <AdsSlider posts={sliderBlogData} className="max-xs:order-2" />
            <FramerWrapper className="pt-7 max-xs:order-1">
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
                    image={
                      urlForImage(category.category_image)?.url() as string
                    }
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
        </div>

        {/* Other posts -- right side of Grid */}
        <div className="col-span-1 space-y-5">
          <div className="grid gap-x-10 gap-y-20 pt-20 sm:max-lg:grid-cols-2 lg:pt-0">
            <RecentPosts className="max-lg:hidden" />
            <div className="space-y-10">
              <Authors authors={initialAuthorsData.data} />
              <SubscribeToBlogButton />
            </div>
            <PopularPosts />
          </div>
        </div>
      </section>
      <Survey />
    </div>
  );
};

export default page;
