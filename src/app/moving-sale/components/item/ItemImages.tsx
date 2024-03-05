import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import React from "react";
import { MdWindow } from "react-icons/md";
import ViewItemBtn from "../ViewItemBtn";

type Props = {};

const ItemImages = (props: Props) => {
  return (
    <section className="relative mb-16 grid h-60 grid-cols-2 gap-2 md:h-[27rem]">
      {/* Main image */}
      <div className="relative col-span-2 xs:col-span-1">
        <Image
          src="/assets/images/about/young-couple.webp"
          alt=""
          className="rounded-lg"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div
        className="col-span-1 hidden w-full flex-wrap gap-2 xs:flex"
        // style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}
      >
        {[1, 2, 3].map((_, idx) => (
          <div
            key={idx + 1}
            className="relative min-w-full flex-1 even:hidden max-xl:min-w-[160px] md:even:block xl:min-w-[300px]"
          >
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
