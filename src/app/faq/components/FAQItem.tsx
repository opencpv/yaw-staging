"use client";
import { openSans } from "@/app/styles/font";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { useEffect, useState } from "react";

interface Props {
  title: string;
  text: string;
}

const FAQItem = ({ title, text }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { icons } = useAssets();
  useEffect(() => {}, []);

  return (
    <div className="p-0  m-0 h-fit border-b-[1px] mt-[25px] border-[#E9ECEF] cursor-pointer w-full">
      <div
        className="transition-all duration-200 w-full"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <div
          className={`${openSans.className} lg:pb-[35px pb-[25px] text-base lg:text-[25px]  flex item-center justify-between lg:gap-[70px] text-[#2A4E55] font-semibold`}
        >
          <p className=""> {title}</p>
          <Image
            src={icons.FaqArrowIcon}
            alt="icon"
            width={34}
            height={34}
            layout="fixed"
            className={`${
              toggle ? "rotate-90" : ""
            } transition-all duration-200`}
          />
        </div>
      </div>
      <p
        className={`${
          toggle ? "opacity-100  pb-[25px]" : "hidden opacity-0 max-h-0"
        } ${
          openSans.className
        } text-base lg:w-[718px] md:w-[597px] lg:pb-[35px] pb-[25px]  overflow-hidden transition-opacity transition-max-height duration-500`}
      >
        {text}
      </p>
    </div>
  );
};

export default FAQItem;
