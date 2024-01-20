import Image from "next/image";
import React, { LegacyRef, forwardRef } from "react";

type Props = {};

const ContactBanner = (props: Props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div
      className={`banner -mx-5 flex flex-col items-center justify-center gap-5 px-10 pt-10 text-white xs:mx-0 sm:px-24 md:pt-24 lg:flex-row lg:items-start lg:justify-between`}
      ref={ref}
    >
      <div className="">
        <h1 className="text-center">Get in touch with us</h1>
      </div>
      <div className="relative aspect-square w-52 min-[340px]:w-96 lg:bottom-32 lg:pb-5">
        <Image
          src={"/svgs/contact1.png"}
          alt="Customer service personnel"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default forwardRef(ContactBanner);
