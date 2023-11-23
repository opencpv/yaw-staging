import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import { FaShare } from "react-icons/fa";
import { HiPrinter } from "react-icons/hi2";
import Link from "next/link";
import socialLinks from "@/enum/links/socials";
import OtherPosts from "../../components/post/OtherPosts";
import Button from "@/components/__shared/Button";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/app/components/Footer";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import ListingCard from "@/components/__shared/listing/ListingCard";
import listingsdb from "@/enum/demodb/listings";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="pb-20 mt-10 section text-neutral-500">
        <h3 className="text-xl font-[500] mb-8">
          Blog - Posted by <span className="text-primary-500">Jane Doe</span>
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
            <Button color="accent" className="px-8 py-8 text-lg uppercase mb-14 md:hidden">
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
                author: "Jane Doe",
                image: "/assets/images/about/about-slider-img.webp",
              }))}
            />
            {/* Popular posts */}
            <OtherPosts
              className="hidden md:block"
              title="Popular posts"
              posts={[1, 2, 3].map((post, idx) => ({
                title: "Market Voice: Interview with the wild bunch",
                author: "Jane Doe",
                image: "/assets/images/about/about-slider-img.webp",
              }))}
            />
            {/* Related posts */}
            <OtherPosts
              className="hidden md:block"
              title="Related posts"
              posts={[1, 2, 3].map((post, idx) => ({
                title: "Market Voice: Interview with the wild bunch",
                author: "Jane Doe",
                image: "/assets/images/about/black-businessman.webp",
              }))}
            />
            <Button className="hidden w-full py-8 mb-10 text-lg text-white uppercase bg-accent-50 min-h-fit md:inline-flex">
              Subscribe to our blog
            </Button>
          </div>
        </section>
        <section className="grid-cols-2 gap-5 mb-10 space-y-5 xs:grid md:hidden">
          {/* Recent posts */}
          <OtherPosts
            title="Recent posts"
            posts={[1, 2, 3].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              author: "Jane Doe",
              image: "/assets/images/about/about-slider-img.webp",
            }))}
          />
          {/* Popular posts */}
          <OtherPosts
            title="Popular posts"
            posts={[1, 2, 3].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              author: "Jane Doe",
              image: "/assets/images/about/black-businessman.webp",
            }))}
          />
          {/* Related posts */}
          <OtherPosts
            title="Related posts"
            posts={[1, 2, 3].map((post, idx) => ({
              title: "Market Voice: Interview with the wild bunch",
              author: "Jane Doe",
              image: "",
            }))}
          />
        </section>
        <section className="w-full mb-20 h-fit md:hidden">
          <SliderWide
            images={[1, 2, 3, 4, 5].map((image) => ({
              src: "/assets/images/niceHome.png",
              name: "",
            }))}
          />
        </section>
        <section className="w-full h-fit">
          {
            <SliderMultiItems
              hasNavAndPagination={false}
              slidesPerView={1}
              breakpoints={{
                500: {
                  slidesPerView: 1.5,
                },
                768: {
                  slidesPerView: 2.5,
                },
                1200: {
                  slidesPerView: 3,
                },
                1300: {
                  slidesPerView: 3.5,
                },
                1536: {
                  slidesPerView: 4,
                },
              }}
              items={listingsdb.map((listing) => (
                <ListingCard
                  key={listing.id}
                  propertyType={listing.propertyType}
                  propertyDescription={listing.propertyDescription}
                  images={listing.images}
                  price={listing.price}
                  paymentStructure={
                    listing.paymentStructure as PaymentStructure
                  }
                  monthlyAmount={listing.monthlyAmount}
                  deal={listing.deal as Deal}
                  membership={listing.membership as Membership}
                  rating={listing.rating}
                  ratingCount={listing.ratingCount}
                  liked={listing.liked}
                  href={listing.href}
                />
              ))}
            />
          }
        </section>
      </main>
      <Footer />
    </>
  );
};

export default page;
