import React from "react";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { styled } from "@stitches/react";

type Props = {};

const FaqHeader = (
  props: Props,
  ref: React.RefObject<HTMLDivElement> | React.ForwardedRef<HTMLDivElement>,
) => {
  const { images } = useAssets();
  return (
    <div
      className={`green-gradient banner -mx-5 flex h-fit flex-wrap justify-between gap-x-5 gap-y-20 px-10 pt-10 text-white xs:mx-0 xs:rounded-3xl sm:px-24 md:pt-24`}
      ref={ref}
    >
      <div className="space-y-4">
        <h1 className="sm:text-5xl">FAQ</h1>
        <h2>Everything You Need to Know</h2>
      </div>
      <Image
        src={images.FaqImage}
        alt="Four people around a giant FAQ graphic"
        width={400}
        // height={400}
        className=" md:mb-10 lg:mb-5"
      />
    </div>
  );
};

export default React.forwardRef(FaqHeader);
