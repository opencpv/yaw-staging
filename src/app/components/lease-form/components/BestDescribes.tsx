import { FaWifi } from "react-icons/fa";
import { Amenity } from "./FeaturesAndAmenities";
import { styled } from "@stitches/react";

type AmenityProp = {
  icon: any;
  name: string;
};

export default function BestDescribes() {
  return (
    <Root className="flex flex-col w-full items-center justify-center p-5 pt-20">
      <div className="w-full lg:w-[75%] flex flex-col items-center justify-center gap-6">
        <div className="w-full flex flex-col gap-2">
          <p className="text-[25px] lg:text-[31px] font-semibold">
            Which of these best describes your property?
          </p>
          <p className="text-[16px] font-[400]">Property Type </p>
        </div>
        <div className="grid grid-cols-4 w-full
        gap-2
        ">
          <div className="col-span-2 lg:col-span-1 flex flex-col gap-4">
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="as" />
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>
          <div className="col-span-2 lg:col-span-1  flex flex-col gap-4">
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>{" "}
          <div className="col-span-2 lg:col-span-1  flex flex-col gap-4">
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
          </div>{" "}
          <div className="col-span-2 lg:col-span-1  flex flex-col gap-4">
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
            <Amenity icon={<FaWifi />} name="wifi" />
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
  