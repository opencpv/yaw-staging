import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlinePencil } from "react-icons/hi";

const RenterOverviewMV = ({
  name,
  picture,
  email,
  telephone,
  className,
}: UserOverviewProps) => {
  return (
    <div className={className}>
      <div className="relative w-32 h-32 rounded-xl shadow-lg">
        <Image
          src={picture}
          alt={name}
          className="rounded-xl"
          fill
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-col items-center gap-y-2 sm:items-start">
        <h4>{name}</h4>
        <div className="flex flex-wrap justify-center items-center mb-4 text-base gap-x-5 gap-y-3">
          <div className="flex items-center gap-2 text-neutral-700">
            <FaRegEnvelope className="text-primary-400" />
            {email}
          </div>
          <div className="flex items-center gap-2 text-neutral-700">
            <BsTelephone className="text-primary-400" />
            {telephone}
          </div>
        </div>
        <Button className="flex items-center gap-1.5 font-[400] text-xs text-white p-1 px-4 rounded-md bg-[#597C7B]">
          Complete your profile <HiOutlinePencil />{" "}
        </Button>
      </div>
    </div>
  );
};

export default RenterOverviewMV;
