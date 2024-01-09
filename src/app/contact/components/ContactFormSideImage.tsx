import { useAssets } from "@/lib/custom-hooks/useAssets";
import { useContactStore } from "@/store/contact/useContactStore";
import Image from "next/image";
import React from "react";

type Props = {};

const ContactFormSideImage = (props: Props) => {
  const active = useContactStore((state) => state.activeKey);
  const { images } = useAssets();

  const activeImages = {
    general: images.StockImage,
    report: images.niceHome,
    writers: images.StockImage,
    advertise: images.niceHome,
  };

  return (
    <div className="relative flex items-center flex-1 w-full aspect-square lg:mt-10 md:aspect-auto">
      <Image
        src={activeImages[active]}
        alt="ad"
        className="rounded-[8px] h-full max-h-[807px]"
        fill
        style={{ objectFit: "cover" }}
        objectPosition="bottom"
      />
    </div>
  );
};

export default ContactFormSideImage;
