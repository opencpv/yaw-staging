import { FaWifi } from "react-icons/fa";
import { Amenity } from "./FeaturesAndAmenities";
import { styled } from "@stitches/react";

type AmenityProp = {
  icon: any;
  name: string;
};

export default function SuitedFor() {
  return (
    <Root className="flex flex-col w-full items-center justify-center p-5 h-full">
      <div className="w-full lg:w-[75%] flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col gap-2">
          <p className="text-[25px] lg:text-[31px] font-semibold">
            What type of renter is your property best suited for?{" "}
          </p>
        </div>
        <div className="grid grid-cols-4 w-full gap-2 lg:min-h-[60vh]">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4 amenity-col">
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>
          <div className="col-span-2 lg:col-span-1  flex flex-col gap-4 amenity-col">
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>{" "}
          <div className="col-span-2 lg:col-span-1  flex flex-col gap-4 amenity-col">
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>
        </div>
      </div>
    </Root>
  );
}

const Root = styled("div", {
    ".amenity-col": {
      display: "flex",
      flexDirection: "column",
      gap: "16px",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  