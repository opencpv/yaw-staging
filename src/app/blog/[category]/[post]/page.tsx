import { Rate } from "antd";
import Image from "next/image";
import React from "react";
import SliderPaginationOnly from "@/components/__shared/ui/sliders/SliderPaginationOnly";
import SliderWide from "@/components/__shared/ui/sliders/SliderWide";
import OtherPostsGroup from "../../components/post/OtherPostsGroup";
import BreadCrumbPreLink from "@/components/__shared/ui/BreadCrumbPreLink";
import SubscribeToBlogButton from "../../components/SubscribeToBlogButton";
import Share from "@/components/__shared/ui/share/Share";
import Print from "@/components/__shared/ui/Print";
import { loadQuery } from "@sanity/react-loader";
import { SanityDocument } from "next-sanity";
import { SINGLE_BLOG_POST } from "@/lib/utils/sanity/queries";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { PortableText } from "@portabletext/react";
import "../../style.css";
import urlBuilder from "@sanity/image-url";
import { client } from "@/lib/utils/sanity/client";
import { fadeIn } from "@/lib/animations";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import slugify from "@/lib/utils/slugify";

type Props = {
  params: { slug: string };
  searchParams: { id: string };
};

const page = async ({ params, searchParams }: Props) => {
  const sanityClient = client;
  const intialPostData = await loadQuery<SanityDocument[]>(
    SINGLE_BLOG_POST(searchParams.id),
  );
  const post = intialPostData.data[0];

  const SampleImageComponent = ({
    value,
    isInline = false,
  }: {
    value: any;
    isInline: boolean;
  }) => {
    return (
      <div className="relative mb-8 mt-2 aspect-square w-full md:aspect-video">
        <Image
          src={urlBuilder(sanityClient)
            .image(value)
            .width(isInline ? 100 : 800)
            .fit("max")
            .auto("format")
            .url()}
          alt={value.alt || " "}
          loading="lazy"
          fill
          style={{
            display: isInline ? "inline-block" : "block",
          }}
        />
      </div>
    );
  };

  const components = {
    types: {
      image: SampleImageComponent,
    },
  };
  return (
    <>
      {
        <div className="wrapper overflow-x-hidden text-neutral-500">
          <h3 className="mb-8 text-xl font-[500]">
            By{" "}
            {post && (
              <span className="text-primary-500">{post.author.name}</span>
            )}
          </h3>
          <h1 className="mb-5 text-2xl font-[700] text-primary-200 md:text-4xl">
            {post.title}
          </h1>
          <FramerWrapper {...fadeIn}>
            <div className="shape-polygon relative mb-16 h-60 w-full lg:h-[30rem]">
              <Image
                src={urlForImage(post.featured_image)?.url() as string}
                alt=""
                className=""
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          </FramerWrapper>
          <h3 className="no-print mb-8 text-xl font-[500]">
            <BreadCrumbPreLink label="Category" href={`/blog/${params.slug}`} />{" "}
            /<span className="">{post.title}</span>
          </h3>
          <section className="print-content mb-20 grid-cols-4 gap-5 sm:grid">
            <div className="col-span-3">
              {/* Blog content --- CMS */}
              <div className="blog mb-20">
                <PortableText value={post.content} components={components} />
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
                    url={
                      `/blog/${slugify(
                        post?.category?.category_title,
                      )}/${slugify(post?.title)}?id=${post?._id}` as string
                    }
                    title={post?.title}
                    className="text-neutral-800"
                    content={post?.summary}
                  />
                  <Print />
                </div>
              </div>
              <FramerWrapper {...fadeIn}>
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
              </FramerWrapper>
              <SubscribeToBlogButton className="no-print mb-14 px-8 md:hidden" />
            </div>
            {/* Other posts -- right side of Grid */}
            <div className="col-span-1 space-y-5  ">
              <div className="hidden md:block">
                <OtherPostsGroup />
              </div>
              <SubscribeToBlogButton className="hidden md:inline-flex" />
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
      }
    </>
  );
};

export default page;
