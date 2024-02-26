import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  name: string;
  image: string | StaticImageData;
};

const TbUserImage = (props: Props) => {
  return (
    <div className="relative h-16 w-16 shrink-0 rounded-full">
      <Image
        src={props.image}
        alt={props.name}
        title={props.name}
        fill
        style={{ objectFit: "cover" }}
        className="shrink-0 rounded-full"
      />
    </div>
  );
};

export default TbUserImage;
