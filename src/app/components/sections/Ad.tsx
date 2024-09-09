import Image from "next/image";
import React from "react";

type Props = {
  data: any;
};

const Ad = (props: Props) => {
  return (
    <section className="wrapper pt-14 max-sm:pb-20 sm:py-20">
      <div className="relative aspect-video h-80 w-full max-sm:hidden md:h-[26rem] xl:h-[35rem]">
        <Image
          src="/assets/images/home/temp/ad.jpg"
          alt="ad"
          fill
          className="object-contain max-sm:rounded-3xl"
        />
      </div>
      {/* Mobile Ad */}
      <div className="relative aspect-square w-full sm:hidden">
        <Image
          src="/assets/images/home/temp/ad-mobile.jpg"
          alt="ad"
          fill
          className="object-contain max-sm:rounded-3xl"
        />
      </div>
    </section>
  );
};

export default Ad;
