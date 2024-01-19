"use client";
import { useAssets } from "@/lib/custom-hooks/useAssets";
import Image from "next/image";
import { useState } from "react";
import style from "../Faq.module.css"

interface Props {
  title: string;
  text: string;
  isActive: boolean;
  onClick: () => void;
}

const FAQItem = ({ title, text, isActive, onClick }: Props) => {
  const [toggle, setToggle] = useState<boolean>(false);
  const { icons } = useAssets();

  return (
    <div className="h-fit cursor-pointer border-[#E9ECEF]">
      <div
        className="w-full transition-all duration-200"
        onClick={() => {
          setToggle(!toggle);
          onClick();
        }}
      >
        <div className="item-center flex justify-between pt-6 font-semibold text-[#2A4E55]">
          <h2 className="faq-title w-full pb-6 text-base lg:text-2xl">
            {title}
          </h2>
          <Image
            src={icons.FaqArrowIcon}
            alt="toggle"
            width={34}
            height={34}
            layout="fixed"
            className={`${
              isActive ? "rotate-90" : ""
            } mb-6 transition-all duration-200`}
          />
        </div>
      </div>
      <p
        className={`${
          isActive ? "pb-6" : "hidden"
        } transition-max-height w-11/12 transition-all overflow-hidden py-8 text-base duration-500`}
      >
        {text}
      </p>
    </div>
  );
};

export default FAQItem;
