import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import React from "react";

type Props = {};

const ReviewComment = (props: Props) => {
  const { images } = useAssets();
  return (
    <>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        <div className="relative h-20 w-20 shrink-0 rounded-full">
          <Image
            src={images.StockImage}
            className="shrink-0 rounded-full"
            alt=""
            fill
            style={{ objectFit: "cover" }}
          />
        </div>
        <div className="text-neutral-800">
          <h3 className="text-xl font-[700]">Amina Frimpong</h3>
          <p className="text-neutral-700">April, 2023</p>
        </div>
      </div>
      <div className="lg:ml-24">
        <p className="mt-10 max-w-4xl text-neutral-700">
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
