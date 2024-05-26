"use client";
import Rate from "@/components/__shared/ui/Rate";
import React, { useEffect, useState } from "react";
import { animate, delay, motion, stagger } from "framer-motion";
import { useSessionStorage } from "@uidotdev/usehooks";
import { useSearchParams } from "next/navigation";
import { cn } from "@nextui-org/react";
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

  const variants = {
    show: {
      height: "auto",
      opacity: 1,
      transition: { delay: 1.8 },
    },
    hide: {
      height: 0,
      opacity: 0,
    },
  };

  useEffect(() => {
    animate(
      ".ant-rate-star",
      blogRating?.ratedBlogs?.length > 0
        ? { scale: [1, 1.5, 1.5, 1] }
        : { scale: 1 },
      {
        delay: stagger(0.1),
      },
    );
  }, [blogRating]);

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
