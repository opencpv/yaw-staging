"use client";
import { styled } from "@stitches/react";
import { useState } from "react";
import ApplicationForm from "..";

export default function PDHero() {
  const [heroUrl, setHeroUrl] = useState(
    "/assets/images/property1.jpeg"
  );
  return (
    <Root className="w-full min-w-full">
      <div
        className="p-hero flex items-end justify-end pb-10 lg:pb-24 pr-10 lg:pr-24"
        style={{
          backgroundImage: `url('${heroUrl}')`,
        }}>
       <div className="flex flex-col gap-5">
          <ApplicationForm type="complex" />
          <ApplicationForm type="simple" />
       </div>

      </div>
    </Root>
  );
}

const Root = styled("section", {
  ".p-hero": {
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 53% 100%, 38% 80%, 0 80%)",
    aspectRatio: "1728/1117",
    // height:"100vh",
    backgroundPosition: "center",
    backgroundSize: "cover",
    "@media screen and (max-width:768px)":{
      aspectRatio:"200/300"
    }
  },
});
