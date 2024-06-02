import Image from "next/image";
import React from "react";

type Props = {};

const Ad = (props: Props) => {
  return (
    <section className="wrapper section pb-10 pt-5 sm:pb-24 sm:pt-10">
      <Image
        src="/assets/images/home/temp/ad.jpg"
        alt="ad"
        width={1920}
        height={1080}
        className="aspect-square max-h-[500px] object-contain max-sm:rounded-3xl sm:aspect-video"
      />
    </section>
  );
};

export default Ad;
