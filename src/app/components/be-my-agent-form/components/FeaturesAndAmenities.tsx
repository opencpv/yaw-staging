import { styled } from "@stitches/react";
import { FaWifi } from "react-icons/fa";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { IoIosWifi } from "react-icons/io";
import { MdHotTub, MdOutlineGasMeter, MdOutlinePool } from "react-icons/md";
import { GiGate, GiPoolTableCorner, GiRoad } from "react-icons/gi";
import { BsPerson } from "react-icons/bs";
import { TbDoorExit, TbToolsKitchen2 } from "react-icons/tb";
import { PiPawPrintLight } from "react-icons/pi";
import { BiSolidCctv } from "react-icons/bi";
import ParkingSpace from "../../listing-form/components/icons/ParkingSpace";
import Tiles from "../../listing-form/components/icons/Tiles";
import AirConditioner from "../../listing-form/components/icons/AirConditioner";
import SmokeAlarm from "../../listing-form/components/icons/SmokeAlarm";
import Amenity from "../../listing-form/components/Amenity";
import styles from './index.module.css'
import { BeMyAgentFormType } from "./types";

const data = [
  { name: "wifi", icon: <IoIosWifi size="44" /> },
  { name: "self meter", icon: <MdOutlineGasMeter size="44" /> },
  { name: "walled & gated", icon: <GiGate size="44" /> },
  { name: "parking", icon: <ParkingSpace  /> },
  { name: "landlord on site", icon: <BsPerson size="44" /> },
  { name: "tiled space", icon: <Tiles  /> },
  { name: "sliding windows", icon: <TbDoorExit size="44" /> },
  { name: "pets allowed", icon: <PiPawPrintLight size="44" /> },
  { name: "near road", icon: <GiRoad size="44" /> },

  { name: "security camera", icon: <BiSolidCctv size="44" /> },
  { name: "pool", icon: <MdOutlinePool size="44" /> },
  { name: "pool table", icon: <GiPoolTableCorner size="44" /> },
  { name: "hot tub", icon: <MdHotTub size="44" /> },
  { name: "kitchen", icon: <TbToolsKitchen2 size="44" /> },
  { name: "smoke alarm", icon: <SmokeAlarm  /> },
  { name: "air conditioning", icon: <AirConditioner  /> },
];

export default function FeaturesAndAmenities() {
  const [selected, setSelected] = useState<any>([]);
  const [agentFormData, setagentFormData] = useLocalStorage<BeMyAgentFormType>("agent-form");


  const handleAmenityClick = (r: any) => {
    if (selected.includes(r?.name)) {
      setSelected(selected.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
    }
  };

  useEffect(() => {
    setagentFormData((prevData: any) => ({
      ...prevData,
      featuresAndAmenities: selected,
    }));
  }, [selected?.length]);

  useEffect(() => {
    if (agentFormData?.featuresAndAmenities) {
      setSelected(agentFormData?.featuresAndAmenities);
    }  }, []);

  return (
    <>
      <Root className="flex flex-col w-full items-center justify-center ">
        <div className="w-full  flex flex-col items-center justify-center gap-6">
          <div className="w-full flex flex-col gap-2">
          <p className={`${styles.title} font-semibold`}>
              Features & Amenities
            </p>
            <p className="text-[1rem] font-[400]">
              You can add more amenities after you publish your listing
            </p>
          </div>
          <div className="grid grid-cols-4 lg:grid-cols-3 gap-2 w-full">
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
    </>
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
