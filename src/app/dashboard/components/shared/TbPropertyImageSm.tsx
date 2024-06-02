import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  title: string;
  image: string | StaticImageData;
  href?: string;
};

const TbPropertyImageSm = (props: Props) => {
  if (props.href) {
    return (
      <Link
        href={props.href}
        className="relative block aspect-square min-h-[6rem] w-full max-w-[120px] shrink-0 rounded-lg"
      >
        <Image
          src={props.image}
          fill
          alt={props.title}
          objectFit="cover"
          className="rounded-[inherit]"
        />
      </Link>
    );
  }
  return (
    <div className="relative aspect-square min-h-[6rem] w-full max-w-[120px] shrink-0 rounded-lg">
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

export default TbPropertyImageSm;
