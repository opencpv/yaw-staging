import Image from "next/image";
import React from "react";

const AuthorImageCircle = ({
  image,
  name,
  className,
}: AuthorImageCircleProps) => {
  return (
    <div className={`relative w-14 h-14 border-4 bg-slate-200 rounded-full ${className}`} title={name}>
      <Image
        src={image}
        alt={name}
        className="rounded-full shrink-0"
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
};

export default AuthorImageCircle;
