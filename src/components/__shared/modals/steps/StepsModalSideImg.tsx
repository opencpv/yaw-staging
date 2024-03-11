import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

type Props = {
  className?: string;
  sideImageClassName?: string;
  image: string | StaticImageData;
};

const StepsModalSideImg = (props: Props) => {
  return (
    <div
      className={cn(
        "relative h-60 w-full rounded-2xl lg:bottom-10 lg:h-[32rem]",
        props.className,
      )}
    >
      <Image
        src={props.image}
        alt="person relaxing on couch"
        fill
        style={{ objectFit: "cover" }}
        className={cn("rounded-[inherit] object-left-top lg:object-left", props.sideImageClassName)}
      />
    </div>
  );
};

export default StepsModalSideImg;
