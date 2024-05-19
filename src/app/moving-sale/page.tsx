import React from "react";
import ItemCard from "./components/item/ItemCard";
import SliderWide from "@/components/__shared/ui/sliders/SliderWide";
import Category from "./components/category/Category";
import CallOut from "@/components/__shared/ui/CallOut";
import SortFilter from "./components/SortFilter";

const MovingSalesPage = () => {
  return (
    <>
      <main className="wrapper overflow-x-hidden text-neutral-600">
        {/* Banner */}
        <section className="relative mb-20 w-full text-white max-sm:aspect-video sm:h-96">
          <SliderWide
            pagination
            autoplay
            className="absolute max-sm:aspect-video sm:h-96"
            images={[1, 2, 3].map((image) => ({
              src: "/assets/images/about/about-slider-img.webp",
              name: "",
              href: "/blog/c/p",
            }))}
            overlay
            classNames={{
              overlay: "bg-gradient-to-r from-primary-500 to-transparent",
            }}
          />
          <div className="pointer-events-none absolute inset-0 z-10 flex h-full w-full items-center rounded-l-3xl">
            {/* <div className="absolute -z-10 h-full w-full rounded-l-[inherit] bg-opacity-20 bg-gradient-to-r from-primary-500 to-transparent"></div> */}
            <h1 className="relative z-20 pl-5 text-4xl font-[700] xs:pl-20 sm:text-5xl">
              Shop
            </h1>
          </div>
        </section>
        {/* Categories */}
        <section className="mx-auto mb-10 flex justify-center gap-5 overflow-x-auto max-md:hidden">
          {[1, 2, 3, 4, 5, 6].map((_, idx) => (
            <Category
              key={idx + 1}
              category="Category"
              image="/assets/images/about/young-couple.webp"
              className="w-full min-[345px]:w-fit"
            />
          ))}
        </section>
        <div className="mb-20 flex items-center justify-center">
          <CallOut
            text="You may select more than one response"
            className="w-full md:w-9/12"
          />
        </div>

        <div className="mb-5 flex flex-wrap items-center justify-between gap-3 text-sm">
          <p className="text-base">Showing 12 results</p>
          <SortFilter />
        </div>
        {/* Items */}
        <section className="grid gap-x-4 gap-y-20 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {[1, 2, 3, 4, 5, 6, 12, 7, 8, 4, 20, 7].map((_, idx) => (
            <ItemCard
              key={idx + 1}
              href={`/moving-sale/${1}`}
              title="Lorem ipsum dolor sit amet"
              description="Lorem ipsum dolor sit amet consectetur. Viverra mattis lacus mi dolor sed et leo id mus ultrices."
              image="/assets/images/about/young-couple.webp"
              price={16.48}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default MovingSalesPage;
