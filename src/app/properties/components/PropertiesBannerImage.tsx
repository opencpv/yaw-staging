import Image from "next/image";
import React from "react";

function PropertiesBannerImage() {
  return (
    <div className="relative aspect-video h-40 w-full sm:h-60">
      <Image
        src="/assets/images/Stock.jpg"
        alt="" // TODO: Add alt text
        fill
        style={{ objectFit: "cover" }}
      />
    </div>
  );
}

export default PropertiesBannerImage;
