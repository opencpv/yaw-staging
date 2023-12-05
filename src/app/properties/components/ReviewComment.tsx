import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";

type Props = {};

const ReviewComment = (props: Props) => {
  const { images } = useAssets();
  return (
    <>
      <div className="flex gap-x-5 gap-y-3 flex-wrap">
        <div className="relative w-20 h-20 rounded-full shrink-0">
          <Image
            src={images.StockImage}
            className="rounded-full shrink-0"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-neutral-800">
          <h3 className="font-[700] text-xl">Amina Frimpong</h3>
          <p className="text-neutral-700">April, 2023</p>
        </div>
      </div>
      <div className="lg:ml-24">
        <p className="max-w-2xl mt-10 text-sm text-neutral-700">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
          dolores soluta accusamus culpa praesentium optio sed architecto, a
          voluptatem aliquam. Tempora dicta consectetur ea facilis reiciendis
          omnis maxime aperiam a. Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Ullam, doloremque? Magnam nisi dolorem
          necessitatibus rem eum tempora corporis explicabo cupiditate
          laboriosam facere voluptatum minus dolores, iure assumenda maxime sint
          excepturi?
        </p>
      </div>
    </>
  );
};

export default ReviewComment;
