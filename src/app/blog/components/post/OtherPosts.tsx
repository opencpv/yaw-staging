"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const OtherPosts = ({ title, posts, className }: OtherPostsProps) => {
  return (
    <div className={`no-print max-w-lg ${className}`}>
      <div
        className={
          "mb-2 rounded-md bg-primary px-2 py-3 text-xl font-[600] text-white"
        }
      >
        {title}
      </div>
      {/* posts */}
      <ul className="flex flex-col gap-5">
        {posts.map((post, idx) => (
          <Link key={idx + 1} href={`${post.href}`}>
            <li>
              <div className="flex flex-wrap gap-2 text-sm">
                <div className="relative h-20 min-w-[5rem] flex-1">
                  <Image
                    src={post.image ? post.image : "/assets/images/Stock.jpg"}
                    alt={post.title}
                    className="rounded-lg"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </div>
                <div className="line-clamp-3 flex min-w-[8rem] flex-[2] flex-col justify-between py-1">
                  <h4 className="font-[500] leading-tight text-neutral-800">
                    {post.title}
                  </h4>
                  <p className="mt-auto text-xs text-neutral-400">
                    By <span className="text-neutral-800">{post.author}</span>
                  </p>
                </div>
              </div>
            </li>
          </Link>
        ))}
      </ul>
    </div>
  );
};

export default OtherPosts;
