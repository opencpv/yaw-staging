import Image from "next/image";
import React from "react";

type Props = {};

const BackgroundImage = (props: Props) => {
  return (
    <>
      <Image
        src="/svgs/blog/star.svg"
        alt="white star"
        className="absolute right-40 top-0"
        width={500}
        height={500}
      />
      <Image
        src="/svgs/blog/star.svg"
        alt="white star"
        className="absolute -left-64 rotate-45 -top-32"
        width={500}
        height={500}
      />
      <Image
        src="/svgs/blog/star.svg"
        alt="white star"
        className="absolute -left-72 -bottom-10"
        width={500}
        height={500}
      />
    </>
  );
};

export default BackgroundImage;
