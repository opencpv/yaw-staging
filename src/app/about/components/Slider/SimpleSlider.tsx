"use client";
import dynamic from "next/dynamic";
const MobileVersion = dynamic(() => import("./MobileVersion"));
const DesktopVersion = dynamic(() => import("./DesktopVersion"));

const SimpleSlider = ({ data }: { data: any }) => {
  return (
    <div
      className="relative w-full bg-[#333] px-5 xs:px-10 lg:px-0"
      id="q5y40WLNHa7Htg=="
    >
      <div className="flex lg:justify-center">
        <h2 className="mb-14 mt-8 text-center font-bold text-white lg:mt-20">
          Lorem ipsum dolor
        </h2>
      </div>
      <MobileVersion data={data} />
      <DesktopVersion data={data} />
    </div>
  );
};

export default SimpleSlider;
