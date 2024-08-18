// import { Rate } from "antd";
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
  image,
  summary,
  rating,
}: PostProps) => {
  return (
    <FramerWrapper>
      <div className="grid gap-x-10 gap-y-5 lg:grid-cols-3">
        <div className="relative aspect-video w-full md:h-full md:min-h-32 lg:col-span-1 lg:max-w-full">
          <Image
            src={image ? image : "/assets/images/Stock.jpg"} // Todo
            alt={title}
            className="rounded-xl"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="max-w-3xl space-y-3 xs:min-w-[25rem] lg:col-span-2">
          <h3 className="text-lg font-[500] text-shade-300">
            <span className="text-primary">by</span> {author}
          </h3>
          <div className="">
            <h2 className="font-semibold text-neutral-800">{title}</h2>
            <div>
              {/* <Rate className="" value={rating} allowHalf disabled /> */}
            </div>
          </div>
          <p className="line-clamp-4 text-neutral-500">{summary}</p>
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
