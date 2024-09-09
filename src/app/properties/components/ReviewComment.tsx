"use client";
import Rate from "@/components/__shared/ui/Rate";
import Avatar from "@/components/__shared/ui/avatar/Avatar";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import React from "react";

type Props = {};

const ReviewComment = (props: Props) => {
  const { images } = useAssets();
  return (
    <>
      <div className="flex flex-wrap gap-x-5 gap-y-3">
        <Avatar size="lg" image={images?.StockImage} name={"Amina Frimpong"} />
        <div className="space-y-1">
          <h5 className="font-semibold text-shade-500">Amina Frimpong</h5>
          <span className="flex flex-wrap gap-1">
            {/* <Rate disabled value={4.5} /> */}
            <small>April, 2023</small>
          </span>
        </div>
      </div>
      <p className="line-clamp-3 text-base">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sapiente
        dolores soluta accusamus culpa praesentium optio sed architecto, a
        voluptatem aliquam. Tempora dicta consectetur ea facilis reiciendis
        omnis maxime aperiam a. Lorem ipsum dolor sit amet consectetur
        adipisicing elit. Ullam, doloremque? Magnam nisi dolorem necessitatibus
        rem eum tempora corporis explicabo cupiditate laboriosam facere
        voluptatum minus dolores, iure assumenda maxime sint excepturi?
      </p>
    </>
  );
};

export default ReviewComment;
