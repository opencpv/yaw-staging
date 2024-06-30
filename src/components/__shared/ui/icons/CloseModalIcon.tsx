import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {
  className?: string;
  onClick?: () => void;
};

const CloseModalIcon = ({ onClick, className }: Props) => {
  return (
    <button type="button" className={className} onClick={onClick}>
      <IoIosCloseCircle
        className="cursor-pointer text-4xl text-red-500 xs:text-5xl"
      />
    </button>
  );
};

export default CloseModalIcon;
