import AOSWrapper from "@/components/__shared/AOSWrapper";
import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";

const PostSummary = ({
  author,
  title,
  href,
  postedAt,
  image,
  body,
  rating,
}: PostProps) => {
  return (
    <AOSWrapper animation="fade-up" >
      <div className="gap-x-10 gap-y-5 grid lg:grid-cols-3">
        <div className="relative w-full min-h-[13rem] sm:max-w-sm md:h-full lg:col-span-1 lg:max-w-full">
          <Image
            src={image ? image : "/assets/images/Stock.jpg"}
            alt={title}
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" xs:min-w-[25rem] max-w-3xl lg:col-span-2">
          <h3 className="text-lg font-[500] text-neutral-800">
            Posted By {author}
          </h3>
          <small className="text-neutral-400 mb-2 inline-block">
            {postedAt}
          </small>
          <div className="mb-3">
            <Rate value={rating} allowHalf disabled />
          </div>
          <h2 className="text-neutral-800 mb-3 text-2xl font-[600]">{title}</h2>
          <p className="line-clamp-4 mb-3 text-neutral-500">{body}</p>
          <Link
            href={`${href}`}
            className="text-primary-400 inline-flex items-center gap-2 transition-all hover:scale-105"
          >
            Read More <FaChevronRight />{" "}
          </Link>
        </div>
      </div>
    </AOSWrapper>
  );
};

export default PostSummary;
