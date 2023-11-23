import Image from "next/image";
import Link from "next/link";
import React from "react";


const CategoryCard = ({
  category,
  image,
  href,
  className,
}: CategoryCardProps) => {
  return (
    <Link href={`${href}`}>
      <div className={`relative h-64 w-72 ${className}`}>
        <Image
          src={image}
          alt=""
          fill
          style={{ objectFit: "cover" }}
          className="md:rounded-3xl"
        />
        <div className="absolute bottom-0 w-full bg-neutral-800 bg-opacity-60 p-4 md:rounded-b-3xl">
          <p className="text-white text-center text-sm">{category}</p>
        </div>
      </div>
    </Link>
  );
};

export default CategoryCard;
