"use client";
import React, { useState } from "react";
import { FaThumbsDown, FaThumbsUp } from "react-icons/fa";

type Props = {};

const Thumbs = (props: Props) => {
  const [thumbsUpChecked, setThumbsUpChecked] = useState<boolean>(false);
  const [thumbsDownChecked, setThumbsDownChecked] = useState<boolean>(false);

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
        className={`cursor-pointer text-6xl transition-all sm:hover:text-green-300 ${
          thumbsUpChecked ? "text-green-400 -translate-y-2" : "text-neutral-300"
        } `}
        onClick={handleThumbsUpChecked}
      />
      <FaThumbsDown
        className={`cursor-pointer text-6xl transition-all sm:hover:text-red-300 ${
          thumbsDownChecked ? "text-red-400 -translate-y-2" : "text-neutral-300"
        }`}
        onClick={handleThumbsDownChecked}
      />
    </div>
  );
};

export default Thumbs;
