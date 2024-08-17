import Image from "next/image";
import CaDownArrows from "../icons/CaDownArrows";
import TLPTags from "./TLPTags";

function WhatWeDo() {
  const tags = [
    "free home listings",
    "free rent searches",
    "rental agent service",
    "virtual tours",
  ];
  return (
    <div className="flex flex-col  flex-wrap items-start justify-start gap-4">
      <div className="flex items-center gap-2">
        <p className="select-none text-white">What we do</p>

        <div className=" relative h-[24px] w-[31px]">
          <Image
            src={"/svgs/tlp/arrowdown.svg"}
            fill
            alt="
        Arrow down"
          />
        </div>
      </div>
      <div className="flex flex-wrap gap-4">
        {tags.map((r, index) => (
          <TLPTags key={index} variant="white" content={r} />
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
