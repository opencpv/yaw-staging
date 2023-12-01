"use client";
import { styled } from "@stitches/react";
import { useState } from "react";
import ApplicationForm from "../../components/application-form";
import ImageOptionsPopover from "../../components/listing-form/components/ChooseImages/ImageOptionsPopover";
import ListingFormModal from "../../components/listing-form";

export default function PDHero() {
  const [heroUrl, setHeroUrl] = useState(
    "/assets/images/property1.jpeg"
  );
  return (
    <div className="w-full min-w-full">
      <div
        className="p-hero w-full flex items-center justify-center"
        style={{
          backgroundImage: `url('${heroUrl}')`,
        }}>
       <div className="flex lg:flex-row flex-col gap-5 w-full items-center justify-center px-5">
          <ApplicationForm type="complex" />
          <ApplicationForm type="simple" />
          {/* <ListingFormModal/> */}

       </div>

      </div>
    </div>
  );
}
