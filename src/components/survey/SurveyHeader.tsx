import Image from "next/image";
import React from "react";
import { FaTimesCircle } from "react-icons/fa";

type Props = {
  handleClose: () => void;
};

const SurveyHeader = ({ handleClose }: Props) => {
  return (
    <div className="flex w-full items-center justify-between">
      <div className="flex items-center gap-3">
        <Image
          src="/svgs/survey/chat-ellipse.svg"
          alt=""
          width={50}
          height={50}
          className="hidden xs:block"
        />
        <h1 className="font-[700] text-neutral-800 text-2xl tracking-tighter">Feedback</h1>
      </div>
      {/* <FaTimesCircle
        className="relative bottom-2 left-5 ml-auto translate-x-[10%] translate-y-[-5%] cursor-pointer text-4xl text-red-500 xs:ml-0 xs:text-5xl"
        onClick={handleClose}
      /> */}
    </div>
  );
};

export default SurveyHeader;
