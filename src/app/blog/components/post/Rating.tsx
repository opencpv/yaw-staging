"use client";
import Rate from "@/components/__shared/ui/Rate";
import React from "react";
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
        shouldAnimateStars={blogRating?.ratedBlogs?.length > 0}
        shouldShowMessage={
          blogRating?.ratedBlogs?.find((blog) => blog.id === id)?.value
            ? true
            : false
        }
        message="Thank you for rating this story"
      />
    </div>
  );
};

export default Rating;
