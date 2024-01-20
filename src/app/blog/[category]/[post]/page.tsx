import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import SliderPaginationOnly from "@/components/__shared/sliders/SliderPaginationOnly";
import SliderWide from "@/components/__shared/sliders/SliderWide";
import OtherPostsGroup from "../../components/post/OtherPostsGroup";
import AOSWrapper from "@/components/__shared/AOSWrapper";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import SubscribeToBlogButton from "../../components/SubscribeToBlogButton";
import Share from "@/components/__shared/ui/share/Share";
import Print from "@/components/__shared/ui/Print";

type Props = {};

const page = (props: Props) => {
  return (
    <div className="wrapper overflow-x-hidden text-neutral-500">
      <h3 className="mb-8 text-xl font-[500]">
        <BreadCrumbPreLink label="Blog" href="/blog" /> - Posted by{" "}
        <span className="text-primary-500">Jane Doe</span>
      </h3>
      <h1 className="mb-5 text-2xl font-[700] text-primary-200 md:text-4xl">
        Mastering the Art of Home Decor: Simple Tips for a Cozy Living Space
      </h1>
      <AOSWrapper animation="fade-up">
        <div className="shape-3 relative mb-16 h-60 w-full lg:h-[30rem]">
          <Image
            src="/assets/images/about/about-slider-img.webp"
            alt=""
            className=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </AOSWrapper>

      <h3 className="no-print mb-8 text-xl font-[500]">
        <BreadCrumbPreLink label="Category" href="/blog/Category" /> /
        <span className=""> Blog title</span>
      </h3>
      <section className="print-content mb-20 grid-cols-4 gap-5 sm:grid">
        <div className="col-span-3">
          {/* Blog content --- CMS */}
          <div className="mb-20">
            <p className="mb-5 leading-7">
              One of the easiest ways to add coziness to your home is by
              incorporating soft textures and fabrics. Consider investing in
              plush throw blankets, fluffy pillows, and soft area rugs. These
              elements not only introduce warmth but also invite you to unwind
              after a long day. Opt for neutral tones for a timeless look or
              experiment with muted pastels to create a soothing ambiance.
            </p>
            <p className="mb-5 leading-7">
              The right lighting can significantly impact the atmosphere of your
              living space. Choose warm-toned light bulbs to create a cozy glow
              that mimics natural sunlight. Strategically place floor lamps,
              table lamps, or string lights to achieve a well-lit yet inviting
              ambiance. Consider installing dimmer switches for flexibility,
              allowing you to adjust the lighting based on different moods and
              occasions.
            </p>
            <p className="mb-5 leading-7">
              Infuse your living space with personal touches that tell a story.
              Display cherished photos, artwork, or sentimental items that hold
              special memories. These pieces not only add character to your home
              but also contribute to a sense of belonging. Arrange them
              thoughtfully, creating a gallery wall or incorporating them into
              your decor to foster a welcoming and personal atmosphere.
            </p>
            <p className="mb-5 leading-7">
              A clutter-free space is essential for a cozy environment.
              Streamline your decor by decluttering surfaces and organizing
              belongings. Invest in stylish storage solutions like baskets or
              decorative boxes to keep essentials within reach yet neatly tucked
              away. A tidy living space not only promotes a serene atmosphere
              but also allows the beauty of your decor to shine through.
            </p>
          </div>
          {/* Rate blog */}
          <h3 className="no-print mb-3 text-xl font-[500] text-neutral-800">
            Rate this blog
          </h3>
          <div className="no-print mb-16 flex flex-wrap items-center justify-between gap-5">
            <Rate allowHalf allowClear defaultValue={0} />
            <div className="flex items-center gap-3 text-2xl text-primary-200">
              <p className="cursor-pointer text-base font-[500] text-neutral-800">
                Share
              </p>
              <Share
                url="https://rentright.com.gh"
                title="Mastering the Art of Home Decor: Simple Tips for a Cozy Living Space"
                className="text-neutral-800"
              />
              <Print />
            </div>
          </div>
          <AOSWrapper animation="fade-up" duration="1000">
            <section className="no-print hidden h-fit w-full flex-col gap-8 md:flex min-[1000px]:flex-row">
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
          </AOSWrapper>
          <SubscribeToBlogButton
            animation="fade-right"
            className="no-print mb-14 px-8 md:hidden"
          />
        </div>
        {/* Other posts -- right side of Grid */}
        <div className="col-span-1 space-y-5  ">
          <div className="hidden md:block">
            <OtherPostsGroup />
          </div>
          <SubscribeToBlogButton
            animation="fade-left"
            className="hidden md:inline-flex"
          />
        </div>
      </section>
      <section className="no-print mb-10 grid-cols-2 gap-5 xs:grid md:hidden">
        <OtherPostsGroup />
      </section>
      <section className="no-print mb-20 h-fit w-full md:hidden">
        <SliderWide
          pagination
          navigation
          images={[1, 2, 3, 4, 5].map((image) => ({
            src: "/assets/images/niceHome.png",
            name: "",
          }))}
        />
      </section>
    </div>
  );
};

export default page;
