import { styled } from "@stitches/react";
import {
  Dispatch,
  HTMLAttributes,
  SetStateAction,
  useEffect,
  useState,
} from "react";
import { useSwiper } from "swiper/react";

type Props = {
  number: number;
  label: string;
  classes: string;
  third?: boolean;
};
import styles from "../index.module.css";
import useRatingsStore from "../useRatingsStore";
import { Button } from "@nextui-org/react";
import Image from "next/image";

export const Progress = ({ number, label, classes, third }: Props) => {
  const [active, setActive] = useState(false);
  const { activeTab, setActiveTab } = useRatingsStore();

  // const scrollToRight = (className: string) => {
  //   const element = document.querySelector(`.${className}`);

  //   if (element) {
  //     element.scrollIntoView({
  //       behavior: "smooth", // You can use "auto" for instant scrolling
  //       block: "start", // You can adjust this to "center" or "end" as needed
  //       inline: "end", // This scrolls to the right edge of the element
  //     });
  //   }
  // };

  return (
    <button
      className={` flex  w-full gap-6 ${classes}`}
      onClick={() => setActiveTab(number - 1)}
    >
      <div className={`flex flex-col items-center gap-8 `}>
        <div
          className={`cursor-pointer 
            ${
              activeTab == number - 1
                ? `bg-[#41807E] font-bold text-white `
                : " border-2 border-shade-200 text-shade-200"
            } flex aspect-square w-[40px] max-w-[80px] items-center justify-center rounded-full text-base font-semibold  md:w-[80px] md:text-[1.9375rem] `}
        >
          {number}
        </div>
        <p
          className={`text-[13px] font-semibold capitalize  ${
            activeTab == number - 1 ? "text-black " : "text-shade-200"
          } `}
        >
          {label}
        </p>
      </div>
      <div className="mt-[18%] md:mt-[14%]">
        {number !== 3 && (
          <div className="relative h-[1px] w-[30px] lg:w-[143px] mx-0 lg:mx-5">
            <Image
              src={"/assets/images/reviews-line.png"}
              alt="Reviews line"
              fill
            />
          </div> // <div className="h-[1px] w-[100px] bg-[#CFCFCF] md:w-[200px]"></div>
        )}{" "}
      </div>{" "}
    </button>
  );
};
