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
        <h1 className="text-2xl font-[700] tracking-tighter text-neutral-800">
          Survey
        </h1>
      </div>
    </div>
  );
};

export default SurveyHeader;
