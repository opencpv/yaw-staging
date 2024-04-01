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
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { SINGLE_BLOG_POST } from "@/lib/utils/sanity/queries";
import slugify from "@/lib/utils/slugify";
import { urlForImage } from "@/lib/utils/sanity/utils";
import BlogTextComponent from "../../components/BlogTextComponent";
import { PortableText } from "@portabletext/react";
import "../../style.css";
import handlePageViewCounter from "@/lib/utils/handlePageViewCounter";

type Props = {
  params: { slug: string };
  searchParams: { id: string };
};

const page = async ({ params, searchParams }: Props) => {
  const intialPostData: any = await loadQuery<SanityDocument[]>(
    SINGLE_BLOG_POST(searchParams.id),
  );
  const post = intialPostData.data[0];
  handlePageViewCounter(post);

  return (
    <div className="wrapper overflow-x-hidden text-neutral-500">
      <h3 className="mb-8 text-xl font-[500]">
        <BreadCrumbPreLink
          label="Blog"
          href={`/blog/${slugify(post.category.category_title)}/${slugify(
            post.title,
          )}`}
        />
        - Posted by <span className="text-primary-500">{post.author.name}</span>
      </h3>
      <h1 className="mb-5 text-2xl font-[700] text-primary-200 md:text-4xl">
        {post.title}
      </h1>
      <AOSWrapper animation="zoom-in">
        <div className="shape-3 relative mb-16 h-60 w-full lg:h-[30rem]">
          <Image
            src={urlForImage(post.featured_image)?.url() as string}
            alt=""
            className=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </AOSWrapper>
      <h3 className="no-print mb-8 text-xl font-[500]">
        <BreadCrumbPreLink label="Category" href="/blog/Category" /> /
        <span className="">{post.title}</span>
      </h3>
      <section className="print-content mb-20 grid-cols-4 gap-5 sm:grid">
        <div className="col-span-3">
          {/* Blog content --- CMS */}
          <div className="blog mb-20">
            <PortableText value={post.content} />
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
      <section className="no-print h-fit w-full md:hidden">
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
