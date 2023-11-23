import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import OtherPosts from "./components/post/OtherPosts";
import Button from "@/components/__shared/Button";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/app/components/Footer";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import CategoryCard from "./components/CategoryCard";
import Authors from "./components/author/Authors";
import ListingCard from "../../components/__shared/listing/ListingCard";
import listingsdb from "@/enum/demodb/listings";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";

type Props = {};

const page = (props: Props) => {
  return (
    <>
      <Navbar />
      <main className="pb-40 mt-10 section">
        <div className="relative w-full h-60 shape-3 mb-16 lg:h-[30rem]">
          <Image
            src="/assets/images/about/about-slider-img.webp"
            alt=""
            className=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <section className="grid-cols-4 mb-20 gap-x-5 lg:grid">
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
            {/* Post slider */}
            <section className="w-full mb-10 h-fit">
              <SliderWide
                images={[1, 2, 3, 4, 5].map((image) => ({
                  src: "/assets/images/about/about-slider-img.webp",
                  name: "",
                  href: "/blog/c/p",
                }))}
              />
            </section>
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
            <Button color="accent" className="w-full py-8 mb-20 text-lg uppercase min-h-fit">
              Subscribe to our blog
            </Button>
            {/* Authors */}
            <Authors />
          </div>
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
