import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  title: string;
  image: string | StaticImageData;
};

const TbPropertyImageSm = (props: Props) => {
  return (
    <div className="relative aspect-video min-h-[5rem] w-full max-w-[65px] shrink-0 rounded-lg xs:min-h-0">
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
