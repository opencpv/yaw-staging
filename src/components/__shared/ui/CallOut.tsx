import React from "react";
import { HiOutlineExclamationCircle } from "react-icons/hi2";

type Props = {
  text: string;
  className?: string;
  variant?: "small" | "large"
};

const CallOut = ({ text, className, variant }: Props) => {
    if (variant === "large")return (
    <div className={`p-5 bg-[#FFF7E7] text-[#65969F] rounded-xl mt-2 flex items-center gap-5 text-base ${className}`}>
      <HiOutlineExclamationCircle className="text-5xl text-yellow-500 rotate-180" />
      {text}
    </div>
  )
  else return (
    <div className={`p-3 bg-[#FFF7E7] text-[#65969F] rounded-xl mt-2 flex items-center gap-3 text-sm ${className}`}>
      <HiOutlineExclamationCircle className="text-4xl text-yellow-500 rotate-180" />
      {text}
    </div>
  )
  
};

export default CallOut;
