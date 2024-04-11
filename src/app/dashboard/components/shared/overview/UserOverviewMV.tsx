import Button from "@/components/__shared/ui/button/Button";
import Image from "next/image";
import React from "react";
import { AiOutlineUser } from "react-icons/ai";
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
      <div className="relative h-32 w-32 rounded-xl shadow-lg">
        {picture ? (
          <Image
            src={picture}
            alt={name}
            className="rounded-[inherit]"
            fill
            style={{ objectFit: "cover" }}
          />
        ) : (
          <div className="grid h-full w-full place-items-center rounded-[inherit] bg-neutral-100">
            <AiOutlineUser size={32} />
          </div>
        )}
      </div>
      <div className="flex flex-col items-center gap-y-2 sm:items-start">
        <h4>{name}</h4>
        <div className="mb-4 flex flex-wrap items-center justify-center gap-x-5 gap-y-3 text-base">
          {email && (
            <div className="flex items-center gap-2 text-neutral-700">
              <FaRegEnvelope className="text-primary-400" />
              {email}
            </div>
          )}

          {telephone && (
            <div className="flex items-center gap-2 text-neutral-700">
              <BsTelephone className="text-primary-400" />
              {telephone}
            </div>
          )}
        </div>
        <Button
          href="settings"
          className="flex items-center gap-1.5 rounded-md bg-[#597C7B] p-1 px-4 text-xs font-semibold text-white"
        >
          Edit profile <HiOutlinePencil />{" "}
        </Button>
      </div>
    </div>
  );
};

export default RenterOverviewMV;
