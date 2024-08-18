import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string | StaticImageData;
  href?: string;
};

const TbPropertyImage = (props: Props) => {
  if (props.href) {
    return (
      <Link
        href={props.href}
        className="relative block aspect-video w-full max-w-[150px] shrink-0 rounded-lg"
      >
        <Image
          src={props.image}
          fill
          alt={props.title}
          className="object-cover rounded-[inherit]"
        />
      </Link>
    );
  }
  return (
    <div className="relative aspect-video w-full max-w-[150px] shrink-0 rounded-lg">
      <Image
        src={props.image}
        fill
        alt={props.title}
        objectFit="cover"
        className="rounded-[inherit]"
      />
    </div>
  );
};

export default TbPropertyImage;
