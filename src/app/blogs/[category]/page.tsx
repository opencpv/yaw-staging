import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import { RiTwitterXLine } from "react-icons/ri";
import { FaFacebookF, FaRegStar, FaShare, FaWhatsapp } from "react-icons/fa";
import { HiPrinter } from "react-icons/hi2";
import Link from "next/link";
import socialLinks from "@/enum/links/socials";
import OtherPosts from "../components/OtherPosts";
import Button from "@/components/__shared/Button";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/app/components/Footer";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import SliderWide from "@/components/__shared/sliders/SliderWide";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="section text-neutral-400 mt-10 overflow-x-hidden">
        <h3 className="text-xl font-[500] mb-8">
          Blog - Posted by <span className="text-primary-500">Jane Doe</span>
        </h3>
        <h1 className="text-2xl font-[700] text-primary-200 mb-5 md:text-4xl">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores.
        </h1>
        <div className="relative w-full h-60 shape-3 mb-16 lg:h-[30rem]">
          <Image
            src="/assets/images/niceHome.png"
            alt=""
            className=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <h3 className="text-xl font-[500] mb-8">Category / Blog title</h3>
        <section className="grid-cols-4 gap-5 sm:grid">
          <div className="col-span-3">
            {/* Blog content */}
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
              <div className="flex gap-3 text-2xl items-center text-primary-200">
                <p className="text-neutral-800 text-base font-[500]">Share</p>
                <FaShare />
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
            <Button className="bg-accent-50 text-white text-lg uppercase mb-14 px-8 py-8 md:hidden">
              Subscribe to our blog
            </Button>
          </div>
          {/* Other posts -- right side of Grid */}
          <div className="col-span-1 space-y-5">
            {/* Recent posts */}
            <OtherPosts
              className="hidden sm:block"
              title="Recent posts"
              posts={[1, 2, 3].map((post, idx) => ({
                title: "Market Voice: Interview with the wild bunch",
                postedBy: "Jane Doe",
              }))}
            />
            {/* Popular posts */}
            <OtherPosts
              className="hidden md:block"
              title="Popular posts"
              posts={[1, 2, 3].map((post, idx) => ({
                title: "Market Voice: Interview with the wild bunch",
                postedBy: "Jane Doe",
              }))}
            />
            {/* Related posts */}
            <OtherPosts
              className="hidden md:block"
              title="Related posts"
              posts={[1, 2, 3].map((post, idx) => ({
                title: "Market Voice: Interview with the wild bunch",
                postedBy: "Jane Doe",
              }))}
            />
            <Button className="bg-accent-50 text-white text-lg uppercase w-full py-8 mb-10 min-h-fit hidden md:inline-flex">
              Subscribe to our blog
            </Button>
          </div>
        </section>
        <section className="grid gap-5 mb-10 xs:grid-cols-2 md:hidden">
          {/* Recent posts */}
          <OtherPosts
            title="Recent posts"
            posts={[1, 2, 3].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              postedBy: "Jane Doe",
            }))}
          />
          {/* Popular posts */}
          <OtherPosts
            title="Popular posts"
            posts={[1, 2, 3].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              postedBy: "Jane Doe",
            }))}
          />
          {/* Related posts */}
          <OtherPosts
            title="Related posts"
            posts={[1, 2, 3].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              postedBy: "Jane Doe",
            }))}
          />
        </section>
        <section className="h-fit w-full md:hidden">
          <SliderWide
            images={[1, 2, 3, 4, 5].map((image) => ({
              src: "/assets/images/niceHome.png",
              name: "",
            }))}
          />
        </section>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default page;
