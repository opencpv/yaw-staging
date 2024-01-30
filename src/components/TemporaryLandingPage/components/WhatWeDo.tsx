import TLPTags from "./TLPTags";

function WhatWeDo() {
  const tags = [
    "free home listings",
    "free rent searches",
    "rental agent service",
    "virtual tours",
  ];
  return (
    <div className="flex flex-wrap items-center gap-4 justify-start">
        <p className="text-white">What we do</p>
      <div className="flex flex-wrap gap-4">
        {tags.map((r, index) => (
          <TLPTags key={index} variant="light-gray" content={r} />
        ))}
      </div>
    </div>
  );
}

export default WhatWeDo;
