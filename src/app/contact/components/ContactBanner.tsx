import Image from "next/image";
import React from "react";

type Props = {};

const ContactBanner = (props: Props) => {
  return (
    <div
      className={`banner flex flex-col gap-5 justify-center px-10 pt-10 items-center lg:items-start text-white md:pt-24 sm:px-24 lg:flex-row lg:justify-between`}
    >
      <div className="">
        <h1 className="text-center">Get in touch with us</h1>
      </div>
      <div className="relative w-52 aspect-square min-[340px]:w-96 lg:bottom-32 lg:pb-5">
        <Image
          src={"/svgs/contact1.png"}
          alt="Customer service personnel"
          fill
          id="jPFcRVJIZphajw=="
          style={{ objectFit: "contain" }}
        />
      </div>
    </div>
  );
};

export default ContactBanner;
