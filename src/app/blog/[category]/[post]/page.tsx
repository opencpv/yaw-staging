import Image from "next/image";
import React from "react";
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
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";
import { headers } from "next/headers";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Rate from "@/components/__shared/ui/Rate";
import Rating from "../../components/post/Rating";
import SideContentGroup from "../../components/post/SideContentGroup";
import Survey from "@/components/__shared/ui/survey";
import { Metadata, ResolvingMetadata } from "next";

type Props = {
  params: { slug: string };
  searchParams: { [key: string]: string | string[] | undefined };
};

export async function generateMetadata(
  { params, searchParams }: Props,
  parent: ResolvingMetadata,
): Promise<Metadata> {
  // fetch data
  const res = await loadQuery<SanityDocument>(
    SINGLE_BLOG_POST(searchParams?.id as string),
  );
  const post = res.data[0];

  // optionally access and extend (rather than replace) parent metadata
  const previousImages = (await parent).openGraph?.images || [];
  const categoryImage = urlForImage(post?.featured_image)?.url() || "";

  return {
    title: post?.title || "",
    openGraph: {
      images: [categoryImage, ...previousImages],
    },
  };
}

const StoryPage = async ({ params, searchParams }: Props) => {
  const origin = headers().get("x-origin") || "https://www.rentrightgh.com";
  const sanityClient = client;
  const initialPostData = await loadQuery<SanityDocument[]>(
    SINGLE_BLOG_POST(searchParams?.id as string),
  );
  const post = initialPostData.data[0];
  const { images } = useAssets();
  sanityClient
    .patch(post._id)
    .inc({ views: 1 })
    .commit()
    .then((update) => {
      console.log(`Blog ${post.title} view count updated to ${update.views}`);
    })
    .catch((err) => {
      console.log(err);
    });
  const SampleImageComponent = ({
    value,
    isInline = false,
  }: {
    value: any;
    isInline: boolean;
  }) => {
    return (
      <div className="relative mb-8 mt-2 aspect-video w-full">
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
            objectFit: "cover",
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
    <div className="wrapper overflow-x-hidden pb-0 text-neutral-500">
      <div className="flex items-center gap-3">
        <div className="relative size-[48px] rounded-full">
          <Image
            src={
              (urlForImage(post.author.profile_image)?.url() as string) ||
              images.NoProfileOthers
            }
            alt={post.author.name}
            fill
            className="rounded-[inherit] object-cover"
          />
        </div>
        <h3 className="text-xl font-[500]">
          {post && <span className="text-primary">{post.author.name}</span>}
        </h3>
      </div>
      <h1 className="mb-3 mt-5 text-2xl font-[700] text-primary md:text-3xl">
        {post.title}
      </h1>
      <Rate disabled value={post.rating} />
      <FramerWrapper className="mt-10">
        <div className="shape-polygon relative mb-16 h-60 w-full lg:h-[30rem]">
          <Image
            src={urlForImage(post.featured_image)?.url() as string}
            alt="" // FIXME: fix alt
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
      </FramerWrapper>
      <section className="print-content grid-cols-4 gap-5 md:grid">
        <div className="col-span-3">
          {/* Blog content --- CMS */}
          <div className="blog mb-20">
            <PortableText value={post.content} components={components} />
          </div>
          {/* Rate blog */}
          <h3 className="no-print mb-3 text-xl font-[500] text-neutral-800">
            Rate this story
          </h3>
          <div className="no-print mb-16 flex flex-wrap items-center justify-between gap-5">
            <Rating rating={post.rating} rating_number={post.ratings_number} />
            <div className="flex items-center gap-3 text-2xl text-primary-200">
              <Share
                title={post?.title}
                className="text-neutral-800"
                content={post?.summary}
              />
              <Print />
            </div>
          </div>
        </div>
        {/* Side content -- right side of Grid */}
        <aside className="col-span-1 max-md:hidden">
          <SideContentGroup ads={post.blog_ad} />
        </aside>
      </section>
      <section className="no-print grid-cols-2 gap-5 xs:grid md:hidden">
        <SideContentGroup />
      </section>
      <Survey />
    </div>
  );
};

export default StoryPage;
