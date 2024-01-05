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
    <main className="pb-20 mt-10 section">
      <div className="relative w-full mb-16 h-fit">
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
      </div>
      <section className="grid-cols-4 mb-5 gap-x-5 lg:grid">
        <div className="col-span-3 mb-10 lg:mb-0">
          {/* Recent posts */}
          <OtherPosts
            className="mb-10 md:hidden"
            title="Recent posts"
            posts={[1, 2, 3, 4, 5].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              author: "Jane Doe",
              image: "",
              href: "/blog/c/p",
            }))}
          />
          <PostSlider />
          <AOSWrapper animation="fade-up">
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
          <OtherPosts
            className=""
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
            className=""
            title="Popular posts"
            posts={[1, 2, 3].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              author: "Jane Doe",
              image: "",
              href: "/blog/c/p",
            }))}
          />
          <SubscribeToBlogButton />
          {/* Authors */}
          <Authors />
        </div>
      </section>
    </main>
  );
};

export default page;
