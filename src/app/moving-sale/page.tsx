import React from "react";
import SliderWide from "@/components/__shared/ui/sliders/SliderWide";
import CallOut from "@/components/__shared/ui/CallOut";
import Items from "./components/Items";

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
            <h1 className="relative z-20 pl-5 text-4xl font-[700] xs:pl-20 sm:text-5xl">
              Shop
            </h1>
          </div>
        </section>
        <div className="mb-20 flex items-center justify-center">
          <CallOut
            text="You may select more than one response"
            className="w-full md:w-9/12"
          />
        </div>

        <Items />
      </main>
    </>
  );
};

export default MovingSalesPage;
