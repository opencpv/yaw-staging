import { BsBuilding, BsHouses } from "react-icons/bs";
import { HiOutlineBuildingOffice, HiOutlineHome } from "react-icons/hi2";
import { IoHomeOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import { PiBuildings, PiHouseLine, PiWarehouse } from "react-icons/pi";
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
import Tiles from "@/app/components/listing-form/components/icons/Tiles";
import { CiWifiOn } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { LiaDoorOpenSolid, LiaHotTubSolid } from "react-icons/lia";
import { RiAlarmWarningLine, RiBilliardsLine } from "react-icons/ri";

export const properties = [
  { name: "apartment", icon: <PiBuildings size="44" /> },
  { name: "house", icon: <IoHomeOutline size="44" /> },
  { name: "town house", icon: <GoHome size="44" /> },
  { name: "detached house", icon: <HiOutlineHome size="44" /> },
  { name: "semi-detached house", icon: <BsHouses size="44" /> },
  { name: "self contain", icon: <PiHouseLine size="44" /> },
  { name: "compound house", icon: <PiWarehouse size="44" /> },
  { name: "mansion", icon: <HiOutlineBuildingOffice size="44" /> },
  { name: "penthouse", icon: <BsBuilding size="44" /> },
];

export const requiredFeatures = [
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
