import React from "react";
import OtherPosts from "./components/post/OtherPosts";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import CategoryCard from "./components/CategoryCard";
import Authors from "./components/author/Authors";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import SubscribeToBlogButton from "./components/SubscribeToBlogButton";
import PostSlider from "./components/post/PostSlider";

type Props = {};

const page = (props: Props) => {

  return (
    <div className="wrapper">
      <section className="relative mt-10 w-full h-fit">
        <SliderWide
          pagination
          autoplay
          className="h-60 shape-3 sm:h-[30rem] rounded-none"
          images={[1, 2, 3].map((image) => ({
            src: "/assets/images/about/about-slider-img.webp",
            name: "",
            href: "/blog/c/p",
          }))}
        />
      </section>
      <section className="grid-cols-4 gap-x-5 md:pt-28 lg:grid">
        <div className="col-span-3">
          {/* Recent posts */}
          <OtherPosts
            className="section md:hidden"
            title="Recent posts"
            posts={[1, 2, 3, 4, 5].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              author: "Jane Doe",
              image: "",
              href: "/blog/c/p",
            }))}
          />
          <PostSlider />
          <AOSWrapper animation="fade-up" className="section">
            <section className="grid gap-x-3.5 gap-y-7 xs:grid-cols-2 md:grid-cols-3">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((category, idx) => (
                <CategoryCard
                  key={idx + 1}
                  href="/blog/category"
                  category="Category"
                  image="/assets/images/about/black-businessman.webp"
                  className="w-full"
                />
              ))}
            </section>
          </AOSWrapper>
        </div>
        {/* Other posts -- right side of Grid */}
        <div className="col-span-1 space-y-5">
          {/* Recent posts */}
          <div className="space-y-5 pt-28 lg:pt-0">
            <OtherPosts
              title="Recent posts"
              posts={[1, 2, 3].map((post, idx) => ({
                title: "Market Voice: Interview with the wild bunch",
                author: "Jane Doe",
                image: "",
                href: "/blog/c/p",
              }))}
            />
            {/* Popular posts */}
            <OtherPosts
              title="Popular posts"
              posts={[1, 2, 3].map((post, idx) => ({
                title: "Market Voice: Interview with the wild bunch",
                author: "Jane Doe",
                image: "",
                href: "/blog/c/p",
              }))}
            />
          <SubscribeToBlogButton />
          </div>
          {/* Authors */}
          <Authors />
        </div>
      </section>
    </div>
  );
};

export default page;
