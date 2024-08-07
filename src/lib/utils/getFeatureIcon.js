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
import { RiFridgeLine } from "react-icons/ri";
import { HiOutlineLightningBolt } from "react-icons/hi";
import {
  LuBattery,
  LuBatteryFull,
  LuBatteryMedium,
  LuMicrowave,
} from "react-icons/lu";
import { MdOutlineBedroomParent, MdOutlinePropaneTank } from "react-icons/md";
import { FaRegLightbulb } from "react-icons/fa6";
import { AiOutlineApartment } from "react-icons/ai";
import { IoIosCellular } from "react-icons/io";

export const getFeatureIcon = (feature, size = 44, color) => {
  const lowerCaseFeature = feature.toLowerCase();
  switch (lowerCaseFeature) {
    case "wifi":
      return <CiWifiOn size={size} />;
    case "pets allowed":
      return <PiPawPrintLight size={size} />;
    case "near road":
      return <GiRoad size={size} />;
    case "security camera":
      return <BiCctv size={size} />;
    case "kitchen":
      return <PiForkKnife size={size} />;
    case "air conditioning":
      return <TbAirConditioning size={size} />;
    case "elevator":
      return <PiElevatorLight size={size} />;
    case "generator":
      return <HiOutlineLightningBolt size={size} />;
    case "water":
      return <IoWaterOutline size={size} />;
    case "fan":
      return <PiFanLight size={size} />;
    case "refrigerator":
      return <RiFridgeLine size={size} />;
    case "microwave":
      return <LuMicrowave size={size} />;
    case "self meter":
      return <BsSpeedometer2 size={size} />;
    case "polytank":
      return <MdOutlinePropaneTank size={size} />;
    case "walled & gated":
      return <PiWallLight size={size} />;
    case "parking":
      return <IoCarOutline size={size} />;
    case "landlord on site":
      return <BsPerson size={size} />;
    case "landlord off site":
      return <BsPersonSlash size={size} />;
    case "tiled space":
      return <Tiles size={size} color={color} />;
    case "self contained":
      return <TbBracketsContain size={size} />;
    case "dish washer":
      return <BiDish size={size} />;
    case "washing machine":
      return <GiWashingMachine size={size} />;
    case "security guard":
      return <GiSecurityGate size={size} />;
    case "fully furnished":
      return <LuBatteryFull size={size} />;
    case "semi furnished":
      return <LuBatteryMedium size={size} />;
    case "unfurnished":
      return <LuBattery size={size} />;
    default:
      //return <AiOutlineApartment size={size} />;
      return null
  }
};

export const getPropertyTypeIcon = (property, size = 44) => {
  const lowerCaseProperty = property.toLowerCase();
  switch (lowerCaseProperty) {
    case "house":
      return <IoHomeOutline size={size} />;
    case "compound house":
      return <PiWarehouse size={size} />;
    case "town house":
      return <GoHome size={size} />;
    case "apartment":
      return <PiBuildings size={size} />;
    case "flats":
      return <LiaBuilding size={size} />;
    case "room":
      return <MdOutlineBedroomParent size={size} />;
    case "guest house":
      return <HiOutlineHome size={size} />;
    case "chamber and hall":
      return <BsHouses size={size} />;
    case "boys quarters":
      return <PiHouseLine size={size} />;
    case "hostel":
      return <BsBuilding size={size} />;
    default:
      //return <IoHomeOutline size={size} />;
      return null
  }
};


export const getUtilityIcon = (utility, size = 44) => {
  const lowerCaseUtility = utility.toLowerCase();
  switch (lowerCaseUtility) {
    case "satellite tv":
      return <PiMonitorLight size={size} />;
        case "water":
      return <IoWaterOutline size={size} />;
    case "electricty":
      return <FaRegLightbulb size={size} />;
    case "gas":
      return <PiGasCan size={size} />;
    case "internet":
    return <IoIosCellular size={size} />
        default:
      //return <AiOutlineApartment size={size} />;
      return null
  }
};
