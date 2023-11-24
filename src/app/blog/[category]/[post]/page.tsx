import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import { FaShare } from "react-icons/fa";
import { HiPrinter } from "react-icons/hi2";
import Link from "next/link";
import socialLinks from "@/enum/links/socials";
import Button from "@/components/__shared/Button";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/app/components/Footer";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import OtherPostsGroup from "../../components/post/OtherPostsGroup";
import RecommendedListings from "@/components/__shared/listing/RecommendedListings";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="pb-20 mt-10 section text-neutral-500">
        <h3 className="text-xl font-[500] mb-8">
          <Link href="/blog">Blog </Link>- Posted by{" "}
          <span className="text-primary-500">Jane Doe</span>
        </h3>
        <h1 className="text-2xl font-[700] text-primary-200 mb-5 md:text-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores.
        </h1>
        <div className="relative w-full h-60 shape-3 mb-16 lg:h-[30rem]">
          <Image
            src="/assets/images/about/about-slider-img.webp"
            alt=""
            className=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3 className="text-xl font-[500] mb-8">Category / Blog title</h3>
        <section className="grid-cols-4 gap-5 mb-20 sm:grid">
          <div className="col-span-3">
            {/* Blog content --- CMS */}
            <div className="mb-20">
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus cumque hic recusandae deleniti sed nam distinctio
                incidunt ratione voluptates, dolores veniam, dolorem provident
                mollitia. Autem, explicabo? Suscipit, deleniti. Pariatur, vero!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis error debitis quam recusandae aliquid ea odit tempore
                laboriosam doloremque fugiat tenetur sunt eum et, explicabo nisi
                at perferendis ab aspernatur.
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus cumque hic recusandae deleniti sed nam distinctio
                incidunt ratione voluptates, dolores veniam, dolorem provident
                mollitia. Autem, explicabo? Suscipit, deleniti. Pariatur, vero!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis error debitis quam recusandae aliquid ea odit tempore
                laboriosam doloremque fugiat tenetur sunt eum et, explicabo nisi
                at perferendis ab aspernatur.
              </p>
              <p className="mb-5">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Possimus cumque hic recusandae deleniti sed nam distinctio
                incidunt ratione voluptates, dolores veniam, dolorem provident
                mollitia. Autem, explicabo? Suscipit, deleniti. Pariatur, vero!
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis error debitis quam recusandae aliquid ea odit tempore
                laboriosam doloremque fugiat tenetur sunt eum et, explicabo nisi
                at perferendis ab aspernatur.
              </p>
            </div>
            {/* Rate blog */}
            <h3 className="text-xl font-[500] text-neutral-800 mb-3">
              Rate this blog
            </h3>
            <div className="flex flex-wrap items-center justify-between gap-5 mb-16">
              <Rate allowHalf allowClear defaultValue={0} />
              <div className="flex items-center gap-3 text-2xl text-primary-200">
                <p className="text-neutral-800 text-base font-[500]">Share</p>
                <FaShare className="text-neutral-800" />
                {socialLinks.map((link) => (
                  <Link key={link.name} href={link.href} title={link.name}>
                    {link.icon}
                  </Link>
                ))}
                <HiPrinter />
              </div>
            </div>
            <section className="h-fit w-full gap-8 flex-col hidden md:flex min-[1000px]:flex-row">
              <SliderPaginationOnly
                images={[1, 2, 3, 4, 5].map((image) => ({
                  src: "/assets/images/niceHome.png",
                  name: "",
                }))}
              />
              <SliderPaginationOnly
                images={[1, 2, 3, 4, 5].map((image) => ({
                  src: "/assets/images/niceHome.png",
                  name: "",
                }))}
              />
            </section>
            <Button
              color="accent"
              className="px-8 py-8 text-lg uppercase mb-14 md:hidden"
            >
              Subscribe to our blog
            </Button>
          </div>
          {/* Other posts -- right side of Grid */}
          <div className="col-span-1 space-y-5">
            <div className="hidden md:block">
              <OtherPostsGroup />
            </div>
            <Button className="hidden w-full py-8 mb-10 text-lg text-white uppercase bg-accent-50 min-h-fit md:inline-flex">
              Subscribe to our blog
            </Button>
          </div>
        </section>
        <section className="grid-cols-2 gap-5 mb-10 xs:grid md:hidden">
          <OtherPostsGroup />
        </section>
        <section className="w-full mb-20 h-fit md:hidden">
          <SliderWide
            images={[1, 2, 3, 4, 5].map((image) => ({
              src: "/assets/images/niceHome.png",
              name: "",
            }))}
          />
        </section>
        <RecommendedListings />
      </main>
      <Footer />
    </>
  );
};

export default page;
