import { styled } from "@stitches/react";
import { FaWifi } from "react-icons/fa";
import SlideEnter from "./SlideEnter";
import { motion } from "framer-motion";
import Amenity from "./Amenity";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { IoIosWifi } from "react-icons/io";
import { MdHotTub, MdOutlineGasMeter, MdOutlinePool } from "react-icons/md";
import { GiGate, GiPoolTableCorner, GiRoad } from "react-icons/gi";
import ParkingSpace from "./icons/ParkingSpace";
import { BsPerson } from "react-icons/bs";
import Tiles from "./icons/Tiles";
import { TbDoorExit, TbToolsKitchen2 } from "react-icons/tb";
import { PiPawPrintLight } from "react-icons/pi";
import { BiSolidCctv } from "react-icons/bi";
import SmokeAlarm from "./icons/SmokeAlarm";
import AirConditioner from "./icons/AirConditioner";

const data = [
  { name: "wifi", icon: <IoIosWifi size="44" /> },
  { name: "self meter", icon: <MdOutlineGasMeter size="44" /> },
  { name: "walled & gated", icon: <GiGate size="44" /> },
  { name: "parking", icon: <ParkingSpace size="44" /> },
  { name: "landlord on site", icon: <BsPerson size="44" /> },
  { name: "tiled space", icon: <Tiles size="44" /> },
  { name: "sliding windows", icon: <TbDoorExit size="44" /> },
  { name: "pets allowed", icon: <PiPawPrintLight size="44" /> },
  { name: "near road", icon: <GiRoad size="44" /> },

  { name: "security camera", icon: <BiSolidCctv size="44" /> },
  { name: "pool", icon: <MdOutlinePool size="44" /> },
  { name: "pool table", icon: <GiPoolTableCorner size="44" /> },
  { name: "hot tub", icon: <MdHotTub size="44" /> },
  { name: "kitchen", icon: <TbToolsKitchen2 size="44" /> },
  { name: "smoke alarm", icon: <SmokeAlarm size="44" /> },
  { name: "air conditioning", icon: <AirConditioner size="44" /> },
];

export default function FeaturesAndAmenities() {
  const [selected, setSelected] = useState<any>([]);
  const [leaseFormData, setLeaseFormData] = useLocalStorage("lease-form", {
    featuresAndAmenties: [],
  });


  const handleAmenityClick = (r: any) => {
    if (selected.includes(r?.name)) {
      setSelected(selected.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
    }
  };

  useEffect(() => {
    setLeaseFormData((prevData: any) => ({
      ...prevData,
      featuresAndAmenties: selected,
    }));
  }, [selected?.length]);

  useEffect(() => {
    if (leaseFormData?.featuresAndAmenties) {
      setSelected(leaseFormData?.featuresAndAmenties);
    }  }, []);

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
            {data.map((r: any, index: number) => (
              <div
                key={index}
                className="col-span-2 lg:col-span-1"
                onClick={() => handleAmenityClick(r)}>
                <Amenity
                  n={index}
                  name={r?.name}
                  icon={r?.icon}
                  selected={selected?.includes(r?.name)}
                />
              </div>
            ))}
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
