"use client";
import { styled } from "@stitches/react";
import { useState } from "react";
import ApplicationForm from "../components/application-form";
import LeaseForm from "../components/lease-form";
import ImageOptionsPopover from "../components/lease-form/components/ChooseImages/ImageOptionsPopover";

export default function PDHero() {
  const [heroUrl, setHeroUrl] = useState(
    "/assets/images/property1.jpeg"
  );
  return (
    <Root className="w-full min-w-full">
      <div
        className="p-hero w-full flex items-center justify-center"
        style={{
          backgroundImage: `url('${heroUrl}')`,
        }}>
       <div className="flex flex-col gap-5 w-full items-center justify-center px-5">
          <ApplicationForm type="complex" />
          <ApplicationForm type="simple" />
          <LeaseForm/>

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
