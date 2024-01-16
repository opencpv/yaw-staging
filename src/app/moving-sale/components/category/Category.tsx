import Image from "next/image";
import React from "react";

const Category = ({ category, count, className, image }: CategoryProps) => {
  return (
    <div
      className={`relative flex items-center justify-center h-40 text-sm text-center text-white min-w-fit ${className}`}
    >
      <Image src={image} alt="" fill style={{ objectFit: "cover" }} />
      <div className="absolute w-full h-full bg-opacity-20 bg-gradient-to-b from-primary-500 to-transparent">
      </div>
      <div className="relative z-10 p-10 space-y-2.5">
        <h4 className="font-[600] relative z-10">{category}</h4>
        {/* <p className="relative z-10">{count} items</p> */}
      </div>
    </div>
  );
};

export default Category;
