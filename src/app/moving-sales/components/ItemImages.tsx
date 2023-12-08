import Button from "@/components/__shared/Button";
import Image from "next/image";
import React from "react";
import { MdWindow } from "react-icons/md";
import ViewItemBtn from "./ViewItemBtn";

type Props = {};

const ItemImages = (props: Props) => {
  return (
    <section className="relative grid grid-cols-2 gap-2 mb-16 h-60 md:h-[27rem]">
      <div className="relative col-span-1 hidden min-[350px]:block">
        <Image
          src="/assets/images/about/young-couple.webp"
          alt=""
          className="rounded-lg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="grid grid-cols-1 col-span-2 gap-2 min-[350px]:col-span-1 sm:grid-cols-2">
        {[1, 2, 3, 4].map((_, idx) => (
          <div key={idx + 1} className="relative even:hidden sm:even:block ">
            <Image
              src="/assets/images/about/young-couple.webp"
              alt=""
              className="rounded-lg"
              fill
              style={{ objectFit: "cover" }}
            />
          </div>
        ))}
      </div>
      <ViewItemBtn className="bottom-2 right-2 md:bottom-8 md:right-10" />
    </section>
  );
};

export default ItemImages;
