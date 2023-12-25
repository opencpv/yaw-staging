import { useState } from "react";
import CaThumbsDown from "./icons/CaThumbsDown";
import CaThumbsUp from "./icons/CaThumbsUp";
import SwiperSlideControls from "./SwiperSliderControls";
import Image from "next/image";

type Props = {
  setActiveIndex: any;
  setOpen: any;
};

function Recommend({ setActiveIndex, setOpen }: Props) {
  const [recommendation, setRecommendation] = useState<"yes" | "no">();

  const [thumbsUpHovered, setThumbsUpHovered] = useState(false);
  const [thumbsDownHovered, setThumbsDownHovered] = useState(false);
  return (
    <div className="flex flex-col items-center justify-center min-h-[325px]">
      <div className="flex flex-col gap-4 w-full items-center justify-center h-full min-h-[287px]">
        <p className="text-[1.2rem] font-semibold">
          Would you recommend{" "}
          <span className="text-[#2A4E55]">Jane Cooper</span> to your friends?
        </p>

        <div className="flex gap-10 items-center justify-center w-full">
          <div
            className=""
            onClick={() => {
              setRecommendation("yes");
            }}
            onMouseEnter={() => setThumbsUpHovered((init) => !init)}
            onMouseLeave={() => setThumbsUpHovered((init) => !init)}>
            <CaThumbsUp filled={thumbsUpHovered || recommendation == "yes"} />
          </div>{" "}
          <div
            className=""
            onClick={() => {
              setRecommendation("no");
            }}
            onMouseEnter={() => setThumbsDownHovered((init) => !init)}
            onMouseLeave={() => setThumbsDownHovered((init) => !init)}>
            {" "}
            <CaThumbsDown
              filled={thumbsDownHovered || recommendation == "no"}
            />
          </div>
        </div>

        {recommendation && (
          <div className="flex gap-2 items-center w-full justify-center">
            <p className="text-[1.5625rem] font-semibold">
              Thank you for response
            </p>
            <div className="relative w-full aspect-square max-w-[44px] animate animate-bounce">
              <Image
                src={"/assets/images/review-form/cone 1.png"}
                fill
                alt="Success"
              />
            </div>
          </div>
        )}
      </div>

      <div className="" onClick={() => setOpen(false)}>
        <SwiperSlideControls
          setActiveIndex={setActiveIndex}
          buttonLabel2="Finish"
        />
      </div>
    </div>
  );
}

export default Recommend;
