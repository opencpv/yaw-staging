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
        className={`flex flex-wrap justify-between green-gradient h-fit banner px-10 pt-10 gap-x-5 gap-y-20 text-white -mx-5 xs:rounded-3xl xs:mx-0 md:pt-24 sm:px-24`}
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
