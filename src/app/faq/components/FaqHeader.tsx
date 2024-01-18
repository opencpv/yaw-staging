import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { styled } from "@stitches/react";

type Props = {};

const FaqHeader = (
  props: Props,
  ref:
    | React.RefObject<HTMLDivElement>
    | React.ForwardedRef<HTMLDivElement>
) => {
  const { images } = useAssets();
  return (
      <div
        className={`flex flex-col gap-5 justify-center green-gradient h-fit banner rounded-3xl px-10 pt-10 items-center lg:items-start text-white md:pt-24 sm:px-24 lg:flex-row lg:justify-between`}
        ref={ref}
      >
        <div className="">
          <h1 className="">FAQ</h1>
          <h2>Everything You Need to Know</h2>
        </div>
          <Image
            src={images.FaqImage}
            alt="Four people around a giant FAQ graphic"
            width={400}
            // height={400}
            className="aspect-square"
            // style={{ objectFit: "contain" }}
          />
      </div>
  );
};

export default React.forwardRef(FaqHeader);
