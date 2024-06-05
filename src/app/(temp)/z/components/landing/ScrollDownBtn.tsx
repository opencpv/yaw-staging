"use client";
import React from "react";
import { FaChevronDown } from "react-icons/fa";


const ScrollDownBtn = () => {
  const scrollDown = () => {
    window.scroll({
      top: window.scrollY + 500,
      left: 0,
      behavior: "smooth",
    });
  };
  
  return (
    <button
      className={`absolute bottom-10 right-[45%] inline-block min-[560px]:hidden`}
      onClick={scrollDown}
    >
      <div className="relative flex flex-col items-center">
        <FaChevronDown className="translate-y-[95%] text-lg text-secondary-300" />
        <FaChevronDown className="text-5xl text-secondary-300" />
      </div>
    </button>
  );
};

export default ScrollDownBtn;
