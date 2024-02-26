import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string | StaticImageData;
};

const TbPropertyImage = (props: Props) => {
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
