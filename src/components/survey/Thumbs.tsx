"use client"
import React, { useEffect, useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

type Props = {};

const Thumbs = (props: Props) => {
  const [thumbsUpChecked, setThumbsUpChecked] = useState<boolean>(false);
  const [thumbsDownChecked, setThumbsDownChecked] = useState<boolean>(false);

  const jelloHor = "jello-horizontal";
  const wobbleHorTop = "wobble-hor-top";

  const handleThumbsUpChecked = () => {
    setThumbsUpChecked((prevState) => !prevState);
    setThumbsDownChecked(false);
  };

  const handleThumbsDownChecked = () => {
    setThumbsDownChecked((prevState) => !prevState);
    setThumbsUpChecked(false);
  };

  return (
    <div className="flex items-center gap-10">
      <FaThumbsUp
        className={`cursor-pointer text-6xl sm:hover:text-green-400 ${
          thumbsUpChecked ? `text-green-400 ${jelloHor}` : "text-green-300"
        } `}
        onClick={handleThumbsUpChecked}
      />
      <FaThumbsDown
        className={`cursor-pointer text-6xl sm:hover:text-red-400 ${
          thumbsDownChecked ? "text-red-400" : "text-red-300"
        }`}
        onClick={handleThumbsDownChecked}
      />
    </div>
  );
};

export default Thumbs;
