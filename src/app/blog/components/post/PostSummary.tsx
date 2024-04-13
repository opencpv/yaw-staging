import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { fadeUp } from "@/lib/animations";
import FramerWrapper from "@/components/__shared/FramerWrapper";

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
    <FramerWrapper {...fadeUp}>
      <div className="grid gap-x-10 gap-y-5 lg:grid-cols-3">
        <div className="relative min-h-[13rem] w-full md:h-full lg:col-span-1 lg:max-w-full">
          <Image
            src={image ? image : "/assets/images/Stock.jpg"}
            alt={title}
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" max-w-3xl xs:min-w-[25rem] lg:col-span-2">
          <h3 className="text-lg font-[500] text-neutral-800">
            Posted By {author}
          </h3>
          <small className="mb-2 inline-block text-neutral-400">
            {postedAt}
          </small>
          <div className="mb-3">
            <Rate value={rating} allowHalf disabled />
          </div>
          <h2 className="mb-3 text-2xl font-[700] text-neutral-800">{title}</h2>
          <p className="mb-3 line-clamp-4 text-neutral-500">{body}</p>
          <Link
            href={`${href}`}
            className="inline-flex items-center gap-2 text-primary-400 transition-all hover:scale-105"
          >
            Read More <FaChevronRight />{" "}
          </Link>
        </div>
      </div>
    </FramerWrapper>
  );
};

export default PostSummary;
