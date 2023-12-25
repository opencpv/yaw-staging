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
    <div className={` flex  gap-6 w-full ${classes}`} onClick={handleSwipe}>
      <div className={`flex flex-col gap-4 items-center `}>
        <ProgressCount
          type={active ? "active" : "inactive"}
          className={`hover:bg-gray-300 
          cursor-pointer ${
            active ? styles.review_pagination : "border-[1px] border-[#E6E6E6]"
          }`}>
          {number}
        </ProgressCount>
        <p
          className={`text-[13px] font-semibold capitalize  ${
            active ? " text-black " : "text-shade-200"
          } `}>
          {label}
        </p>
      </div>
      <div className="mt-[15%]">{!third && <ProgressLine />} </div>{" "}
    </div>
  );
};

const ProgressCount = styled("div", {
  fontSize: "1.9375rem",
  fontWeight: "600",
  width: "80px",
  maxWidth: "80px",
  minWidth: "80px",
  aspectRatio: "80/80",
  color: "#B0B0B0",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  "@media screen and (max-width:1024px": {
    width: "30px",
  },

  borderRadius: "50%",

  variants: {
    type: {
      active: {
        fontWeight: "700",
        color: "white",
      },
      inactive: {},
    },
  },

});

const ProgressLine = styled("div", {
  height: "1px",
  width: "100%",
  maxWidth: "200px",
  minWidth: "200px",

  "@media screen and (max-width: 1024px)": {
    maxWidth: "5px",
  },
  backgroundColor: "#CFCFCF",
});
