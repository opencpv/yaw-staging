"use client";
import Image from "next/image";
import React, { useState } from "react";
import AuthorImageCircle from "./AuthorImageCircle";
import { motion } from "framer-motion";
import { urlForImage } from "@/lib/utils/sanity/utils";
import { BlogAuthor } from "../../../../../interfaces";

interface Props {
  authors: BlogAuthor[];
}
const Authors = ({ authors }: Props) => {
  const [currentAuthorIndex, setCurrentAuthorIndex] = useState<number>(0);

  return (
    <div key={authors[currentAuthorIndex]?.id} className="space-y-1">
      <div className="flex max-w-lg flex-wrap items-center gap-3 rounded-[5rem] bg-white p-5 shadow-large">
        <div className="relative h-20 w-20">
          <Image
            src={
              urlForImage(
                authors[currentAuthorIndex].profile_image,
              )?.url() as string
            }
            alt={authors[currentAuthorIndex].name as string}
            className="shrink-0 rounded-full"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex-[3] space-y-3">
          <h3 className="text-sm font-[700] text-neutral-800">
            {authors[currentAuthorIndex]?.name}
          </h3>
          <motion.p
            initial={{ x: 10 }}
            animate={{ x: 0 }}
            className="line-clamp-5 min-w-[8rem] text-xs text-neutral-500"
          >
            {authors[currentAuthorIndex]?.bio}
          </motion.p>
        </div>
      </div>
      {/* Group */}
      <div className="flex flex-wrap -space-x-4 rtl:space-x-reverse">
        {authors.map((author, idx) => (
          <AuthorImageCircle
            key={idx + 1}
            image={urlForImage(author.profile_image).url() as string}
            name={author.name}
            onClick={() => setCurrentAuthorIndex(idx as number)}
          />
        ))}
      </div>
    </div>
  );
};

export default Authors;
