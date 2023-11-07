import Image from "next/image";
import SlideEnter from "./SlideEnter";
import { useRef } from "react";

export const Number = ({ number }: { number: string }) => {
  return (
    <div
      className="w-full max-w-[80px] bg-white aspect-square flex items-center justify-center rounded-full text-[25px] font-[400] hover:scale-[1.05] cursor-pointer animate"
      style={{
        boxShadow: "0px 24px 48px -12px rgba(0, 0, 0, 0.18)",
      }}>
      {number}
    </div>
  );
};

type StepsProps = {
  number: string;
  headerText: string;
  subText: string;
  image: string;
};

const Steps = ({ number, headerText, subText, image }: StepsProps) => {
  return (
    <div className="w-full" >
      <div className="hidden lg:grid grid-cols-7 justify-center items-center w-full h-full border-b-[1px] border-b-[B0B0B0] py-3 hover:scale-[1.01]">
        <div className="col-span-5 flex  items-center justify-start w-full gap-6  max-w-[670px]">
          <Number number={number} />
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[20px] lg:text-[25px] font-semibold">{headerText}</p>
            <p className="text-[16px] font-[400] text-[#8A8A8A] max-w-[461px]">
              {subText}
            </p>
          </div>
        </div>
        <div className="col-span-2 relative w-full max-w-[308px] aspect-[308/160] rounded-2xl h-full ">
          <Image
            src={image}
            alt="Lease Image Form"
            fill
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      </div>
      <div className="mt-5 lg:hidden flex flex-col  gap-6 justify-center items-center w-full h-full border-b-[1px] border-b-[B0B0B0] py-3 pb-10 hover:scale-[1.01] ">
        <div className="w-full items-start flex pl-1  mb-2 animate animate-bounce">
          <Number number={number} />
        </div>
        <div className="relative w-full  aspect-[308/160] rounded-2xl h-full ">
          <Image
            src={image}
            alt="Lease Image Form"
            fill
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className=" flex flex-col  items-center justify-start w-full gap-6  max-w-[670px]">
          <div className="flex flex-col gap-4 w-full">
            <p className="text-[25px] font-semibold">{headerText}</p>
            <p className="text-[16px] font-[400] text-[#8A8A8A] max-w-[461px]">
              {subText}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function GetStarted() {
  return (
    <SlideEnter>
      <div className="flex flex-col items-center justify-center w-full lg:px-20 ">
        <div className="grid grid-cols-7  items-center justify-center  gap-y-5">
          <div className="col-span-5 w-full">
            <p className="text-[20px] lg:text-[1.9375rem] font-semibold max-w-[772px] leading-[28px] lg:leading-[43.4px] w-full">
              Getting underway on Rentright is a straightforward process.
            </p>
          </div>
          <div className="col-span-7 flex flex-col items-center justify-center gap-8 w-full h-full">
            <Steps
              number="01"
              headerText="Tell us about your place"
              subText="Provide essential details, such as its location and maximum guest capacity."
              image="/assets/images/leaseform/lease-form-1.png"
            />
            <Steps
              number="02"
              headerText="Set it apart and make it exceptional"
              subText="Add 10 images, a title, and a description, and rest assured, we're here to support you every step of the way."
              image="/assets/images/leaseform/lease-form-2.jpeg"
            />
            <Steps
              number="03"
              headerText="Finish up and publish"
              subText="Publish your listing"
              image="/assets/images/leaseform/lease-form-3.jpeg"
            />{" "}
          </div>
        </div>
      </div>
    </SlideEnter>
  );
}
