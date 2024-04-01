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
// import { SanityDocument } from "next-sanity";
// import { SINGLE_BLOG_POST } from "@/lib/utils/sanity/queries";
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
  // const intialPostData: any = await loadQuery<SanityDocument[]>(
  //   SINGLE_BLOG_POST(searchParams.id),
  // );
  // const post = intialPostData.data[0];
  // handlePageViewCounter(post);

  return <div className="wrapper overflow-x-hidden text-neutral-500"></div>;
};

export default page;
