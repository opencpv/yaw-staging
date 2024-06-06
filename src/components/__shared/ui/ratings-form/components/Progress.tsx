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
  activeNumber: number;
  label: string;
  classes: string;
  setActiveIndex: Dispatch<SetStateAction<number>>;
  third?: boolean;
};
import styles from "../index.module.css";

export const Progress = ({
  number,
  activeNumber,
  label,
  classes,
  setActiveIndex,
  third,
}: Props) => {
  const [active, setActive] = useState(false);
  const swiper = useSwiper();

  const scrollToRight = (className: string) => {
    const element = document.querySelector(`.${className}`);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth", // You can use "auto" for instant scrolling
        block: "start", // You can adjust this to "center" or "end" as needed
        inline: "end", // This scrolls to the right edge of the element
      });
    }
  };

  const handleSwipe = () => {
    setActiveIndex(number);
    swiper.slideTo(number - 1);
    scrollToRight(`sc${number}`);
  };

  useEffect(() => {
    if (number == activeNumber) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [activeNumber, number]);
  return (
    <div className={` flex  w-full gap-6 ${classes}`} onClick={handleSwipe}>
      <div className={`flex flex-col items-center gap-4 `}>
        <div
          className={`cursor-pointer 
          hover:bg-gray-300 ${
            active
              ? `${styles.review_pagination} font-bold text-white`
              : "border-[1px] border-[#E6E6E6]"
          } flex aspect-square w-[40px] max-w-[80px] items-center justify-center rounded-full text-base font-semibold text-[#B0B0B0]  md:w-[80px] md:text-[1.9375rem] `}
        >
          {number}
        </div>
        <p
          className={`text-[13px] font-semibold capitalize  ${
            active ? " text-black " : "text-shade-200"
          } `}
        >
          {label}
        </p>
      </div>
      <div className="mt-[8%] md:mt-[14%]">
        {!third && <div className="h-[1px] w-[100px] md:w-[200px] bg-[#CFCFCF]"></div>}{" "}
      </div>{" "}
    </div>
  );
};
