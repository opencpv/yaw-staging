import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string | StaticImageData;
};

const TbPropertyImageSm = (props: Props) => {
  return (
    <div className="relative aspect-video min-h-[6rem] w-full max-w-[120px] shrink-0 rounded-lg">
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
