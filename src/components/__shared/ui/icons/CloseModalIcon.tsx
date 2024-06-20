import React from "react";
import { IoIosCloseCircle } from "react-icons/io";

type Props = {
  onClick?: () => void;
};

const CloseModalIcon = ({ onClick }: Props) => {
  return (
    <button type="button">
      <IoIosCloseCircle
        className="cursor-pointer text-4xl text-red-500 xs:text-5xl"
        onClick={onClick}
      />
    </button>
  );
};

export default CloseModalIcon;
