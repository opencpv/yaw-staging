import { BsBuilding, BsHouses, BsPersonSlash } from "react-icons/bs";
import { HiOutlineHome } from "react-icons/hi2";
import { IoHomeOutline, IoWaterOutline } from "react-icons/io5";
import { GoHome } from "react-icons/go";
import {
  PiBuildings,
  PiElevatorLight,
  PiFanLight,
  PiGasCan,
  PiHouseLine,
  PiWarehouse,
} from "react-icons/pi";
import { GiRoad, GiSecurityGate, GiWashingMachine } from "react-icons/gi";
import { BsPerson, BsSpeedometer2 } from "react-icons/bs";
import { TbAirConditioning, TbBracketsContain } from "react-icons/tb";
import {
  PiForkKnife,
  PiMonitorLight,
  PiPawPrintLight,
  PiWallLight,
} from "react-icons/pi";
import { BiCctv, BiDish } from "react-icons/bi";
import Tiles from "@/components/__shared/ui/listing-form/components/icons/Tiles";
import { CiWifiOn } from "react-icons/ci";
import { IoCarOutline } from "react-icons/io5";
import { LiaBuilding } from "react-icons/lia";
import {
  RiFridgeLine,
} from "react-icons/ri";
import { HiOutlineLightningBolt } from "react-icons/hi";
import {
  LuBattery,
  LuBatteryFull,
  LuBatteryMedium,
  LuMicrowave,
} from "react-icons/lu";
import { MdOutlineBedroomParent, MdOutlinePropaneTank } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";

export const properties = [
  { name: "house", icon: <IoHomeOutline size="44" /> },
  { name: "compound house", icon: <PiWarehouse size="44" /> },
  { name: "town house", icon: <GoHome size="44" /> },
  { name: "apartment", icon: <PiBuildings size="44" /> },
  { name: "flats", icon: <LiaBuilding size="44" /> },
  { name: "room", icon: <MdOutlineBedroomParent size="44" /> },
  { name: "guest house", icon: <HiOutlineHome size="44" /> },
  { name: "chamber and hall", icon: <BsHouses size="44" /> },
  { name: "boys quarters", icon: <PiHouseLine size="44" /> },
  { name: "hostel", icon: <BsBuilding size="44" /> },
];

export const requiredFeatures = [
  { name: "wifi", icon: <CiWifiOn size="44" /> },
  { name: "satellite tv", icon: <PiMonitorLight size="44" /> },
  { name: "pets allowed", icon: <PiPawPrintLight size="44" /> },
  { name: "near road", icon: <GiRoad size="44" /> },
  { name: "security camera", icon: <BiCctv size="44" /> },
  { name: "kitchen", icon: <PiForkKnife size="44" /> },
  { name: "air conditioning", icon: <TbAirConditioning size="44" /> },
  { name: "elevator", icon: <PiElevatorLight size="44" /> },
  { name: "generator", icon: <HiOutlineLightningBolt size="44" /> },
  { name: "water", icon: <IoWaterOutline size="44" /> },
  { name: "fan", icon: <PiFanLight size="44" /> },
  { name: "electricty", icon: <FaRegLightbulb size="44" /> },
  { name: "refrigerator", icon: <RiFridgeLine size="44" /> },
  { name: "gas", icon: <PiGasCan size="44" /> },
  { name: "microwave", icon: <LuMicrowave size="44" /> },
  { name: "self meter", icon: <BsSpeedometer2 size="44" /> },
  { name: "polytank", icon: <MdOutlinePropaneTank size="44" /> },
  { name: "walled & gated", icon: <PiWallLight size="44" /> },
  { name: "parking", icon: <IoCarOutline size="44" /> },
  { name: "landlord on site", icon: <BsPerson size="44" /> },
  { name: "landlord off site", icon: <BsPersonSlash size="44" /> },
  { name: "tiled space", icon: <Tiles /> },
  { name: "self contained", icon: <TbBracketsContain size="44" /> },
  { name: "dish washer", icon: <BiDish size="44" /> },
  { name: "washing machine", icon: <GiWashingMachine size="44" /> },
  { name: "security guard", icon: <GiSecurityGate size="44" /> },
  { name: "fully furnished", icon: <LuBatteryFull size="44" /> },
  { name: "semi furnished", icon: <LuBatteryMedium size="44" /> },
  { name: "unfurnished", icon: <LuBattery size="44" /> },
  //{ name: "pool", icon: <PiSwimmingPool size="44" /> },
  // { name: "street parking", icon: <GiCarParking size="44" /> },
  // { name: "garage parking", icon: <GiGarageDoor size="44" /> },
  //{ name: "smoke alarm", icon: <RiAlarmWarningLine size="44" /> },
  //{ name: "pool table", icon: <RiBilliardsLine size="44" /> },
  // { name: "gym", icon: <GiWeights size="44" /> },
  //{ name: "sliding windows", icon: <LiaDoorOpenSolid size="44" /> },
];
