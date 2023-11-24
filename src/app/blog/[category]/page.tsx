import React from "react";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/app/components/Footer";
import PostSummary from "../components/post/PostSummary";
import Link from "next/link";
import { LuChevronsRight } from "react-icons/lu";
import BackgroundImage from "../components/category/BackgroundImage";
import TabsAndSearch from "../components/category/TabsAndSearch";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <div className="relative flex items-center justify-center bg-gradient-to-b from-primary-500 to-primary-500/80 text-white w-full h-60 mb-10 lg:h-[27rem]">
        <BackgroundImage />
        <div className="flex flex-col items-center gap-3">
          <div className="flex items-center gap-3">
            <Link href="/">Home</Link>
            <LuChevronsRight />
            <Link href="/blog">Blogs</Link>
          </div>
          <h1 className="text-5xl font-[700]">Blog</h1>
        </div>
      </div>
      <main className="section">
        <div className="mb-14 flex flex-col items-center justify-between gap-5 sm:flex-row">
          <TabsAndSearch />
        </div>
        <div className="flex items-center justify-center pb-10 text-neutral-500">
          <section className="space-y-10">
            {[1, 2, 3, 4, 5, 6].map((post, idx) => (
              <PostSummary
                key={idx + 1}
                author="Jane Doe"
                image="/assets/images/about/about-slider-img.webp"
                title="Mastering the Art of Home Decor: Simple Tips for a Cozy Living Space"
                body=" Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                molestias nihil tenetur expedita deleniti fuga dicta in distinctio
                ipsam cupiditate. m.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                molestias nihil tenetur expedita deleniti fuga dicta in distinctio
                ipsam cupiditate.  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure
                molestias nihil tenetur expedita deleniti fuga dicta in distinctio
                ipsam cupiditate."
                postedAt="November 7th 2023"
                href="/blog/c/p"
              />
            ))}
          </section>
        </div>
        <p className="text-center mb-20">pagination</p>
      </main>
      <RecommendedListings className="section mb-40" />
      <Footer />
    </>
  );
};

export default page;
