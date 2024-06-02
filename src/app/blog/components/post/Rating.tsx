"use client";
import Rate from "@/components/__shared/ui/Rate";
import React, { useState } from "react";
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
    setSelectedRating(value);
    const sanityClient = client;
    sanityClient
      .patch(id as string)
      .setIfMissing({ ratings_number: 0, rating: 0 })
      .set({
        rating: (rating * rating_number + value) / (rating_number + 1),
        ratings_number: rating_number + 1,
      })
      .commit()
      .then((update) => {
        console.log(`Blog id ${id} rated to ${value}`);
      })
      .catch((err) => {
        console.log(err);
      });
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
