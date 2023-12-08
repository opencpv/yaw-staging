import Callout from "@/app/dashboard/components/Callout";
import Button from "@/components/__shared/Button";
import Image from "next/image";
import React from "react";
import { BsTelephone } from "react-icons/bs";
import { FaRegEnvelope } from "react-icons/fa";
import { HiOutlineExclamationCircle, HiOutlinePencil } from "react-icons/hi";
import RenterOverviewMV from "./RenterOverviewMV";

const RenterOverview = ({
  name,
  email,
  picture,
  telephone,
  className
}: RenterOverviewProps) => {
  return (
    <div className={className}>
      <h2 className="text-2xl font-[700] mb-6">Overview</h2>
      <h3 className="text-neutral-700 font-[500] text-lg mb-6 md:hidden">
        Welcome, John
      </h3>
      <Callout className="flex items-center w-full gap-5 mb-6 text sm:w-10/12">
        <HiOutlineExclamationCircle className="text-5xl rotate-180 text-accent-50" />
        <div className="space-y-1">
          <p>
            Get started by effortlessly{" "}
            <span className="font-[600]">renting</span> and publishing{" "}
            <span className="font-[600]">products</span> with ease.
          </p>
          <p>
            Navigate through the menu on the top to discover more features and
            tools.
          </p>
        </div>
      </Callout>
      <div className="hidden w-full p-10 pt-20 pb-0 bg-primary-400 rounded-xl max-w-[850px] max-h-60 md:block">
        <div className="w-11/12 mx-auto">
          <h3 className="text-white mb-4 font-[600] text-xl">Welcome, John</h3>
          <div className="flex items-center p-8 py-16 bg-white shadow-2xl gap-x-6 gap-y-3 rounded-xl max-h-60">
            <div className="relative w-32 h-32 rounded-xl shadow-lg">
              <Image
                src={picture}
                alt={name}
                className="rounded-xl"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
            <div className="space-y-2">
              <h4 className="">{name}</h4>
              <div className="flex flex-wrap items-center mb-4 text-sm gap-x-5 gap-y-3">
                <div className="flex items-center gap-2 text-neutral-700">
                  <FaRegEnvelope className="text-primary-400" />
                  {email}
                </div>
                <div className="flex items-center gap-2 text-neutral-700">
                  <BsTelephone className="text-primary-400" />
                  {telephone}
                </div>
              </div>
              <Button className="flex items-center gap-1.5 font-[400] text-sm text-white p-1 px-4 rounded-md bg-[#597C7B]">
                Complete your profile <HiOutlinePencil />{" "}
              </Button>
            </div>
          </div>
        </div>
      </div>
      {/* Tablet view */}
      <RenterOverviewMV
        name={name}
        picture={picture}
        email={email}
        telephone={telephone}
        className="flex flex-col items-center w-full p-8 bg-white shadow-2xl gap-x-6 gap-y-3 rounded-xl sm:py-16 sm:max-h-60 sm:flex-row sm:justify-start md:hidden"
      />
    </div>
  );
};

export default RenterOverview;
