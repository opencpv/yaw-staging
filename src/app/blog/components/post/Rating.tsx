"use client";
import Rate from "@/components/__shared/ui/Rate";
import React, { useEffect, useState } from "react";
import { animate, delay, motion, stagger } from "framer-motion";
import { useSessionStorage } from "@uidotdev/usehooks";
import { useSearchParams } from "next/navigation";
import { client } from "@/lib/utils/sanity/client";

interface IProps {
  rating: number;
  rating_number: number;
}
const Rating = ({ rating = 0, rating_number = 0 }: IProps) => {
  const id = useSearchParams()?.get("id");
  const [blogRating, setBlogRating] = useSessionStorage<{
    ratedBlogs: {
      id: string;
      value: number;
    }[];
  }>("blogRating", {
    ratedBlogs: [],
  });
  const [selectedRating, setSelectedRating] = useState(0);
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
        defaultValue={rating}
        onChange={handleChange}
        value={rating == 0 ? selectedRating : rating}
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
