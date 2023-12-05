import Button from "@/components/__shared/Button";
import Image from "next/image";
import React from "react";
import { MdWindow } from "react-icons/md";

type Props = {};

const ItemImages = (props: Props) => {
  return (
    <section className="relative grid grid-cols-3 gap-2 mb-16 h-60 md:h-[27rem]">
      <div className="relative col-span-1 hidden min-[350px]:block">
        <Image
          src="/assets/images/about/young-couple.webp"
          alt=""
          className="rounded-lg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="grid grid-cols-1 col-span-3 gap-2 min-[350px]:col-span-2 sm:grid-cols-2">
        {[1, 2, 3, 4].map((image, idx) => (
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
      <Button color="white" className="absolute text-neutral-600 bottom-2 right-2 flex gap-3 h-14 w-32 md:bottom-14 md:right-10">
        View all
        <MdWindow className="border p-2 rounded-sm text-4xl shrink-0" />
      </Button>
    </section>
  );
};

export default ItemImages;
