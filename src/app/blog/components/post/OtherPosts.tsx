"use client";
import { ScrollShadow } from "@nextui-org/react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherPosts = ({ title, posts, className }: OtherPostsProps) => {
  return (
    <div className={`max-w-lg ${className}`}>
      <div
        className={
          "bg-primary-200 text-white px-2 py-3 text-xl font-[600] rounded-md mb-2"
        }
      >
        {title}
      </div>
      {/* posts */}
      <ul className="hidden gap-3 flex-col xs:flex">
        {posts.map((post, idx) => (
          <Link key={idx + 1} href={`${post.href}`}>
            <li>
              <div className="flex flex-wrap gap-2 text-sm">
                <div className="relative min-w-[5rem] h-20 flex-1">
                  <Image
                    src={post.image ? post.image : "/assets/images/Stock.jpg"}
                    alt={post.title}
                    className="rounded-lg"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="py-1 flex flex-col justify-between flex-[2] min-w-[8rem]">
                  <h3 className="font-[500] text-neutral-800 leading-tight">
                    {post.title}
                  </h3>
                  <p className="mt-auto text-xs text-neutral-400">
                    Posted by{" "}
                    <span className="text-neutral-800">{post.author}</span>
                  </p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
      <ScrollShadow
        isEnabled={false}
        hideScrollBar
        orientation="horizontal"
        className="max-w-[350px] xs:hidden"
      >
        <ul className="flex gap-3">
          {posts.map((post, idx) => (
            <Link key={idx+1} href={`${post.href}`}>
              <li>
                <div className="flex flex-wrap gap-2 text-sm">
                  <div className="relative min-w-[5rem] h-20 flex-1">
                    <Image
                      src={post.image ? post.image : "/assets/images/Stock.jpg"}
                      alt={post.title}
                      className="rounded-lg"
                      fill
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                  <div className="py-1 flex flex-col justify-between flex-[2] min-w-[8rem]">
                    <h3 className="font-[500] text-neutral-800">{post.title}</h3>
                    <p className="mt-auto text-xs text-neutral-400">
                      Posted by{" "}
                      <span className="text-neutral-800">{post.author}</span>
                    </p>
                  </div>
                </div>
              </li>
            </Link>
          ))}
        </ul>
      </ScrollShadow>
    </div>
  );
};

export default OtherPosts;
