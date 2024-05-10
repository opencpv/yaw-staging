"use client";
import Rate from "@/components/__shared/ui/Rate";
import React from "react";
import { motion } from "framer-motion";
import { useSessionStorage } from "@uidotdev/usehooks";
import { useSearchParams } from "next/navigation";

const Rating = () => {
  const id = useSearchParams()?.get("id");
  const [blogRating, setBlogRating] = useSessionStorage<{
    ratedBlogs: {
      id: string;
      value: number;
    }[];
  }>("blogRating", {
    ratedBlogs: [],
  });

  console.log(blogRating.ratedBlogs);

  const handleChange = (value: number) => {
    if (!blogRating?.ratedBlogs?.find((blog) => blog.id === id)?.value) {
      setBlogRating({
        ...blogRating,
        ratedBlogs: [
          ...(blogRating.ratedBlogs || []),
          { id: id as string, value: value },
        ],
      });
    }
  };

  const variants = {
    show: {
      height: "auto",
      opacity: 1,
    },
    hide: {
      height: 0,
      opacity: 0,
    },
  };

  return (
    <div className="space-y-1">
      <Rate
        allowClear
        defaultValue={0}
        onChange={handleChange}
        value={blogRating?.ratedBlogs?.find((blog) => blog.id === id)?.value}
        disabled={
          blogRating?.ratedBlogs?.find((blog) => blog.id === id)?.value
            ? true
            : false
        }
      />
      <motion.div
        variants={variants}
        animate={
          blogRating?.ratedBlogs?.find((blog) => blog.id === id)?.value
            ? "show"
            : "hide"
        }
        className="bg-success-bg p-2 text-success"
      >
        Thank you for rating this story
      </motion.div>
    </div>
  );
};

export default Rating;
