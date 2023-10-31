import { styled } from "@stitches/react";
import { FaWifi } from "react-icons/fa";
import SlideEnter from "./SlideEnter";
import { motion } from "framer-motion";
import Amenity from "./Amenity";



export default function FeaturesAndAmenities() {
  return (
    <SlideEnter>
      <Root className="flex flex-col w-full items-center justify-center ">
        <div className="w-full lg:w-[75%] flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col gap-2">
            <p className="text-[25px] lg:text-[31px] font-semibold">
              Features & Amenities
            </p>
            <p className="text-[16px] font-[400]">
              You can add more amenities after you publish your listing
            </p>
          </div>
          <div className="grid grid-cols-4 gap-2 w-full">
            <div className="col-span-2 lg:col-span-1 flex flex-col gap-4 amenity-col">
              <Amenity icon={<FaWifi />} name="wifi" n={10} />
              <Amenity icon={<FaWifi />} name="wifi" n={10}/>
              <Amenity icon={<FaWifi />} name="wifi"n={10} />
            </div>
            <div className=" col-span-2 lg:col-span-1  flex flex-col gap-4 amenity-col">
              <Amenity icon={<FaWifi />} name="wifi" n={30} />
              <Amenity icon={<FaWifi />} name="wifi"  n={30}/>
              <Amenity icon={<FaWifi />} name="wifi" n={30}/>
              <Amenity icon={<FaWifi />} name="wifi" n={30}/>
            </div>{" "}
            <div className="col-span-2 lg:col-span-1  flex flex-col gap-4 amenity-col">
              <Amenity icon={<FaWifi />} name="wifi" n={50} />
              <Amenity icon={<FaWifi />} name="wifi" n={50} />
              <Amenity icon={<FaWifi />} name="wifi" n={50} />
              <Amenity icon={<FaWifi />} name="wifi" n={50}/>
            </div>{" "}
            <div className="col-span-2 lg:col-span-1  flex flex-col gap-4 amenity-col">
              <Amenity icon={<FaWifi />} name="wifi" n={70} />
              <Amenity icon={<FaWifi />} name="wifi" n={70}/>
              <Amenity icon={<FaWifi />} name="wifi" n={70} />
              <Amenity icon={<FaWifi />} name="wifi"  n={70}/>
            </div>
          </div>
        </div>
      </Root>
    </SlideEnter>
  );
}

const Root = styled("div", {
  ".amenity-col": {
    display: "flex",
    flexDirection: "column",
    gap: "16px",
    justifyContent: "center",
    alignItems: "center",
    "@media screen and (min-width: 1024px)": {
      justifyContent: "start",
    },
  },
});
