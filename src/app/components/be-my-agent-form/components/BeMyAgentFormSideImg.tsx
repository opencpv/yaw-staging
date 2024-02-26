import { useAssets } from "@/lib/custom-hooks/useAssets";
import { cn } from "@/lib/utils";
import Image from "next/image";
import React from "react";

type Props = {
  className?: string;
};

const BeMyAgentFormSideImg = (props: Props) => {
  const { images } = useAssets();
  return (
    <div
      className={cn(
        "relative h-60 w-full rounded-2xl lg:bottom-10 lg:h-[32rem]",
        props.className,
      )}
    >
      <Image
        src={images.FeelingRefreshed}
        alt="person relaxing on couch"
        fill
        style={{ objectFit: "cover" }}
        className="rounded-[inherit] object-left-top lg:object-left"
      />
    </div>
  );
};

export default BeMyAgentFormSideImg;
