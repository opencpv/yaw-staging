import React from "react";
import Navbar from "@/components/__shared/Navbar";
import Footer from "@/app/components/Footer";
import PostSummary from "../components/post/PostSummary";
import Link from "next/link";
import { LuChevronsRight } from "react-icons/lu";
import ListingCard from "@/components/__shared/listing/ListingCard";
import listingsdb from "@/enum/demodb/listings";
import SliderMultiItems from "@/components/__shared/sliders/SliderMultiItems";
import SearchInput from "@/components/__shared/form/SearchInput";
import CategoryTabs from "../components/category/CategoryTabs";
import BackgroundImage from "../components/category/BackgroundImage";

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
          <div className="flex-1">
            <CategoryTabs />  
          </div>
          <div className="flex-1 w-full md:w-9/12">
            <SearchInput />
          </div>
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
      <section className="w-full mb-40 h-fit section">
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
                paymentStructure={listing.paymentStructure as PaymentStructure}
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
      <Footer />
    </>
  );
};

export default page;
