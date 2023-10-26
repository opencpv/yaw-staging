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
};

export const Progress = ({
  number,
  activeNumber,
  label,
  classes,
  setActiveIndex,
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
    <div
      className={` flex flex-col gap-6 w-full ${classes}`}
      onClick={handleSwipe}
    >
      <div className="flex flex-row gap-4 items-center j pl-5">
        <ProgressCount
          type={active && "active"}
          className="hover:bg-gray-300 
          cursor-pointer"
        >
          {number}
        </ProgressCount>
        <ProgressLine />
      </div>
      <p
        className={`text-[13px] font-[400] ${
          active && "font-[700] text-[#8DA5A4]"
        } `}
      >
        {label}
      </p>
    </div>
  );
};

const ProgressCount = styled("div", {
  fontSize: "16px",
  fontWeight: "700",
  width: "64px",
  maxWidth: "64px",
  minWidth: "60px",
  aspectRatio: "64/64",
  color: "#8A8A8A",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#E6E6E6",
  "@media screen and (max-width:1024px": {
    width: "30px",
  },
  boxShadow:
    "0px 1px 2px 0px rgba(0, 0, 0, 0.06), 0px 1px 3px 0px rgba(0, 0, 0, 0.10)",
  borderRadius: "50%",

  variants: {
    type: {
      active: {
        backgroundColor: "#8DA5A4",
        fontWeight: "700",
        color: "white",
      },
      inactive: {},
    },
  },
  "&:hover": {
    scale: "1.02",
  },
});

const ProgressLine = styled("div", {
  height: "2px",
  width: "100%",
  maxWidth: "200px",
  minWidth: "200px",

  "@media screen and (max-width: 1024px)": {
    maxWidth: "5px",
  },
  backgroundColor: "#CFCFCF",
});
