import { styled } from "@stitches/react";
import { useEffect, useState } from "react";
import { useLocalStorage } from "@uidotdev/usehooks";
import { GiRoad } from "react-icons/gi";
import { BsPerson, BsSpeedometer2 } from "react-icons/bs";
import { TbAirConditioning } from "react-icons/tb";
import {
  PiForkKnife,
  PiMonitorLight,
  PiPawPrintLight,
  PiSwimmingPool,
  PiWallLight,
} from "react-icons/pi";
import { BiCctv } from "react-icons/bi";
import Tiles from "../../../../../../components/listing-form/components/icons/Tiles";
import Amenity from "../../../../../../components/listing-form/components/Amenity";
import styles from "../../index.module.css";
import { BeMyAgentFormType } from "../types";
import { CiWifiOn } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { LiaDoorOpenSolid, LiaHotTubSolid } from "react-icons/lia";
import { RiAlarmWarningLine, RiBilliardsLine } from "react-icons/ri";
import { useField } from "formik";

const data = [
  { name: "wifi", icon: <CiWifiOn size="44" /> },
  { name: "satellite tv", icon: <PiMonitorLight size="44" /> },
  { name: "self meter", icon: <BsSpeedometer2 size="44" /> },
  { name: "walled & gated", icon: <PiWallLight size="44" /> },
  { name: "parking", icon: <IoCarOutline size="44" /> },
  { name: "landlord on site", icon: <BsPerson size="44" /> },
  { name: "tiled space", icon: <Tiles /> },
  { name: "sliding windows", icon: <LiaDoorOpenSolid size="44" /> },
  { name: "pets allowed", icon: <PiPawPrintLight size="44" /> },
  { name: "near road", icon: <GiRoad size="44" /> },
  { name: "security camera", icon: <BiCctv size="44" /> },
  { name: "pool", icon: <PiSwimmingPool size="44" /> },
  { name: "pool table", icon: <RiBilliardsLine size="44" /> },
  { name: "hot tub", icon: <LiaHotTubSolid size="44" /> },
  { name: "kitchen", icon: <PiForkKnife size="44" /> },
  { name: "smoke alarm", icon: <RiAlarmWarningLine size="44" /> },
  { name: "air conditioning", icon: <TbAirConditioning size="44" /> },
];

export default function FeaturesAndAmenities() {
  const [agentFormData, setAgentFormData] =
    useLocalStorage<BeMyAgentFormType>("agent-form");
  const [selected, setSelected] = useState<any>([]);
  const [field, meta, helpers] = useField("featuresAndAmenities");

  const handleAmenityClick = (r: any) => {
    if (selected?.includes(r?.name)) {
      setSelected(selected?.filter((item: any) => item !== r?.name));
      helpers.setValue(selected?.filter((item: any) => item !== r?.name));
    } else {
      setSelected([...selected, r?.name]);
      helpers.setValue([...selected, r?.name]);
    }
  };

  useEffect(() => {
    setAgentFormData((prevData: any) => ({
      ...prevData,
      featuresAndAmenities: selected,
    }));
  }, [selected, setAgentFormData]);

  useEffect(() => {
    if (agentFormData?.featuresAndAmenities) {
      setSelected(agentFormData?.featuresAndAmenities);
    }
  }, []);

  return (
    <>
      <Root>
        <h2 className={`${styles.title}`}>Required Features</h2>
        <div className="grid w-full grid-cols-4 gap-5 lg:grid-cols-3">
          {data.map((r: any, index: number) => (
            <div
              key={index}
              className="col-span-2 lg:col-span-1"
              onClick={() => handleAmenityClick(r)}
            >
              <Amenity
                n={index}
                name={r?.name}
                icon={r?.icon}
                selected={selected?.includes(r?.name)}
              />
            </div>
          ))}
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
