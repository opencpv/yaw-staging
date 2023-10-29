import React from "react";
import {
  FaFireExtinguisher,
  FaHotTub,
  FaParking,
  FaWifi,
} from "react-icons/fa";
import { MdPool } from "react-icons/md";
import { TbAirConditioning, TbToolsKitchen2 } from "react-icons/tb";
import { PiTelevision } from "react-icons/pi";
import { GiCctvCamera, GiGasPump, GiPoolTableCorner } from "react-icons/gi";
import { BiAlarmAdd } from "react-icons/bi";
import { AiOutlineApartment } from "react-icons/ai";

const Feature = ({ label }: FeatureInterface) => {
  if (label.toLowerCase() === "wifi")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <FaWifi className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "security cameras on property")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <GiCctvCamera className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "pool")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <MdPool className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "gas")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <GiGasPump className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "kitchen")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <TbToolsKitchen2 className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "air conditioning")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <TbAirConditioning className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "satellite tv")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <PiTelevision className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "free parking on premises")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <FaParking className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "hot tub")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <FaHotTub className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "fire extinguisher")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <FaFireExtinguisher className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "smoke alarm")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <BiAlarmAdd className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  if (label.toLowerCase() === "pool table")
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <GiPoolTableCorner className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  else {
    return (
      <div className="flex items-center gap-x-3 property-feature">
        <AiOutlineApartment className="text-[#65969F]" />
        <p className="capitalize text-neutral-800">{label}</p>
      </div>
    );
  }
};

export default Feature;
