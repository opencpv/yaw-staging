import Image from "next/image";
import React from "react";
import AuthorImageCircle from "./AuthorImageCircle";

type Props = {};

const Authors = (props: Props) => {
  return (
    <div className="space-y-1">
      <div className="flex flex-wrap items-start gap-3 p-5 bg-white rounded-[4rem] shadow-large max-w-lg">
        <div className="relative w-20 h-20">
          <Image
            src={"/assets/images/about/about-slider-img.webp"}
            alt={""}
            className="rounded-full shrink-0"
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="flex-[3] space-y-3">
          <h3 className="text-sm text-neutral-800 font-[700]">
            Madhukar Singh
          </h3>
          <p className="text-xs text-neutral-500 min-w-[8rem]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
            nesciunt quo velit maiores.
          </p>
        </div>
      </div>
      {/* Group */}
      <div className="flex flex-wrap -space-x-4 rtl:space-x-reverse">
        {[1, 2, 3, 4, 5].map((author, idx) => (
          <AuthorImageCircle
            key={idx + 1}
            image="/assets/images/about/about-slider-img.webp"
            name="Singh"
          />
        ))}
      </div>
    </div>
  );
};

export default Authors;
