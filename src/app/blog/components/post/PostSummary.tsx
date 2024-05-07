import { Rate } from "antd";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaChevronRight } from "react-icons/fa";
import { fadeIn } from "@/lib/animations";
import FramerWrapper from "@/components/__shared/hoc/FramerWrapper";

const PostSummary = ({
  author,
  title,
  href,
  postedAt,
  image,
  summary,
  rating,
}: PostProps) => {
  return (
    <FramerWrapper {...fadeIn}>
      <div className="grid gap-x-10 gap-y-5 lg:grid-cols-3">
        <div className="relative aspect-video w-full md:h-full lg:col-span-1 lg:max-w-full">
          <Image
            src={image ? image : "/assets/images/Stock.jpg"}
            alt={title}
            className="rounded-lg"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className=" max-w-3xl xs:min-w-[25rem] lg:col-span-2">
          <h3 className="text-lg font-[500] text-neutral-800">By {author}</h3>
          <div className="mb-3">
            <Rate value={rating} allowHalf disabled />
          </div>
          <h2 className="mb-3 text-2xl font-[700] text-neutral-800">{title}</h2>
          <p className="mb-3 line-clamp-4 text-neutral-500">{summary}</p>
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
